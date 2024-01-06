import { Box } from "@mui/material";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import Followers from "./Followers";
import { MainInformation } from "./MainInformation";
import { UserProfileGifs } from "./UserProfileGif";
import { useGetUserGifs } from "./hooks/useGetUserGifs";
import { StyledButton, UserProfileWrapper } from "./style";

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
    <UserProfileWrapper>
      <MainInformation
        nickname={user.nickname}
        avatar={user.avatar}
        email={user.email}
        followers={user.followers}
        following={user.following}
        id={user.id}
      />
      <Box gridArea="userGifs">
        {currentUser?.id === user.id && (
          <Box width="640px" margin="0 auto">
            <Link to="/gif-add">
              <StyledButton>+</StyledButton>
            </Link>
          </Box>
        )}

        {user.gifs.map((gif) => (
          <UserProfileGifs key={gif.id} {...gif} userId={user.id} />
        ))}
      </Box>
      <Followers followers={user.followers} />
    </UserProfileWrapper>
  );
}
