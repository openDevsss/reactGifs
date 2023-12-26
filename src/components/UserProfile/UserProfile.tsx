import Followers from "./Followers";
import { MainInformation } from "./MainInformation";
import { UserProfileGifs } from "./UserProfileGifs";
import { UserInfoWrapper, UserProfileWrapper } from "./style";

export function UserProfile() {
  return (
    <UserProfileWrapper>
      <UserInfoWrapper>
        <MainInformation />
        <UserProfileGifs />
      </UserInfoWrapper>
      <Followers />
    </UserProfileWrapper>
  );
}
