import { selectCurrentUser } from "../../features/users/users-selectors";

import { useAppSelector } from "../../redux-toolkit";
import {
  EditProfileWrapper,
  ProfileEditAvatar,
  ProfileEditAvatarButton,
  ProfileEditInput,
  ProfileEditForm,
} from "./style";

export default function ProfileEdit() {
  const currentUser = useAppSelector(selectCurrentUser);
  return (
    <EditProfileWrapper>
      <ProfileEditAvatar src={currentUser?.avatar} />
      <ProfileEditForm>
        <ProfileEditInput label="url" autoComplete="none" size="small" />
        <ProfileEditInput label="nickname" autoComplete="none" size="small" />
        <ProfileEditInput label="email" autoComplete="none" size="small" />
        <ProfileEditAvatarButton>Change</ProfileEditAvatarButton>
      </ProfileEditForm>
    </EditProfileWrapper>
  );
}
