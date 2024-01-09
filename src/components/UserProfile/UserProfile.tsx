import { Box } from "@mui/material";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import EmptyGifs from "../EmptyGifs/EmptyGifs";
import { FollowersList } from "./FollowersList";
import { MainInformation } from "./MainInformation";
import { UserProfileGifs } from "./UserProfileGif";
import { useGetUserGifs } from "./hooks/useGetUserGifs";
import { StyledButton } from "./style";

export function UserProfile() {
  const { id } = useParams();
  const { data: user, refetch } = useGetUserGifs(id);
  const currentUser = useCurrentUser();
  useEffect(() => {
    refetch();
  }, [id, refetch]);

  if (!user) {
    return null;
  }
  return (
    <>
      <MainInformation
        nickname={user.nickname}
        avatar={user.avatar}
        email={user.email}
        followers={user.followers}
        following={user.following}
        id={user.id}
      />
      <Box gridArea="userGifs" width="100%" m="0 auto">
        {currentUser?.id === user.id ? (
          <>
            <Link to="/gif-add">
              <StyledButton>+</StyledButton>
            </Link>
            {!Boolean(user.gifs.length) && (
              <EmptyGifs message="Looks like there are no GIFs to showcase. Time to add some!" />
            )}
          </>
        ) : (
          <>
            {!Boolean(user.gifs.length) && (
              <EmptyGifs message="The user hasn't added gifs yet, subscribe and follow their updates" />
            )}
          </>
        )}

        {user.gifs.map((gif) => (
          <UserProfileGifs key={gif.id} {...gif} userId={user.id} />
        ))}
      </Box>
      <FollowersList followers={user.followers} />
    </>
  );
}
