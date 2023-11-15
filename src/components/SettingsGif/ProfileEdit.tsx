import { useState } from "react";
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
  const [nickname, setNickname] = useState(currentUser?.nickname);
  const [email, setEmail] = useState(currentUser?.email);
  return (
    <EditProfileWrapper>
      <ProfileEditAvatar src={currentUser?.avatar} />
      <ProfileEditForm>
        <ProfileEditInput label="url" autoComplete="none" size="small" />
        <ProfileEditInput
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          label="nickname"
          autoComplete="none"
          size="small"
        />
        <ProfileEditInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="email"
          autoComplete="none"
          size="small"
        />
        <ProfileEditAvatarButton>Change</ProfileEditAvatarButton>
      </ProfileEditForm>
    </EditProfileWrapper>
  );
}
