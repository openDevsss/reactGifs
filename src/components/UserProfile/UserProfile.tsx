import { Box } from "@mui/material";
import { SkeletonProfile } from "components/Skeleton/SkeletonProfile";
import { useCurrentUser } from "hooks/useCurrentUser";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { EmptyGifs } from "../EmptyGifs/EmptyGifs";
import { FollowersList } from "./FollowersList";
import { useGetUserInformation } from "./hooks/useGetUserInformation";
import { MainInformation } from "./MainInformation";
import { StyledButton } from "./style";
import { UserProfileGifs } from "./UserProfileGif";

export const UserProfile = () => {
  const { id } = useParams();
  const { data: user, refetch, isFetching } = useGetUserInformation(id);
  const currentUser = useCurrentUser();
  const navigate = useNavigate();
  useEffect(() => {
    refetch();
  }, [id, refetch]);

  return (
    <>
      {!user ? (
        navigate(-1)
      ) : (
        <>
          {isFetching ? (
            <SkeletonProfile />
          ) : (
            Boolean(user) && (
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
                  {currentUser?.id === user.id && (
                    <>
                      <Link to="/gif-add">
                        <StyledButton>+</StyledButton>
                      </Link>
                      {!user.gifs.length ? (
                        <EmptyGifs message="Looks like there are no GIFs to showcase. Time to add some!" />
                      ) : (
                        user.gifs.map((gif) => (
                          <UserProfileGifs
                            key={gif.id}
                            {...gif}
                            userId={user.id}
                          />
                        ))
                      )}
                    </>
                  )}
                  {currentUser?.id !== user.id && !user.gifs.length && (
                    <EmptyGifs message="The user hasn't added gifs yet, subscribe and follow their updates" />
                  )}
                  {currentUser?.id !== user.id &&
                    user.gifs.length > 0 &&
                    user.gifs.map((gif) => (
                      <UserProfileGifs key={gif.id} {...gif} userId={user.id} />
                    ))}
                </Box>
                <FollowersList followers={user.followers} />
              </>
            )
          )}
        </>
      )}
    </>
  );
};
