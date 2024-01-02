import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Followers from "./Followers";
import { MainInformation } from "./MainInformation";
import { UserProfileGifs } from "./UserProfileGif";
import { useGetUserGifs } from "./hooks/useGetUserGifs";
import { UserProfileWrapper } from "./style";

export function UserProfile() {
  const { id } = useParams();
  const { data: user } = useGetUserGifs(id || "");
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
      />
      <Box gridArea="userGifs">
        {user.gifs.map((gif) => (
          <UserProfileGifs key={gif.id} {...gif} />
        ))}
      </Box>
      <Followers followers={user.followers} />
    </UserProfileWrapper>
  );
}
