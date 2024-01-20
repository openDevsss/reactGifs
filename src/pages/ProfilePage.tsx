import { UserProfile } from "@components/UserProfile/UserProfile";
import { ProfileLayout } from "@layout/ProfileLayout";

export function ProfilePage() {
  return (
    <ProfileLayout>
      <UserProfile />
    </ProfileLayout>
  );
}
