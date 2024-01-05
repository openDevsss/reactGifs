import { Box } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Followers from "./Followers";
import { MainInformation } from "./MainInformation";
import { UserProfileGifs } from "./UserProfileGif";
import { useGetUserGifs } from "./hooks/useGetUserGifs";
import { UserProfileWrapper } from "./style";

export function UserProfile() {
  const { id } = useParams();
  const { data: user, refetch } = useGetUserGifs(id);

  useEffect(() => {
    refetch();
  }, [id, refetch]);

  if (!user) {
    return null;
  }
  console.log(user);
  return (
    <UserProfileWrapper>
      <MainInformation
        nickname={user.nickname}
        avatar={user.avatar}
        email={user.email}
        followers={user.followers}
        following={user.following}
      />
      <Box gridArea="userGifs">
        {user.gifs.map((gif) => (
          <UserProfileGifs key={gif.id} {...gif} userId={user.id} />
        ))}
      </Box>
      <Followers followers={user.followers} />
    </UserProfileWrapper>
  );
}
