import Followers from "./Followers";
import { MainInformation } from "./MainInformation";
import UserProfileGifList from "./UserProfileGifList";
import { UserProfileWrapper } from "./style";

export function UserProfile() {
  return (
    <UserProfileWrapper>
      <MainInformation />
      <UserProfileGifList />
      <Followers />
    </UserProfileWrapper>
  );
}
