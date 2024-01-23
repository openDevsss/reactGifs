import { Box, Typography } from "@mui/material";
import {
  EditProfileAvatar,
  EditProfileAvatarButton,
  EditProfileDeleteAvatarButton,
  EditProfileForm,
  EditProfileInput,
  EditProfileSubmitButton,
  EditProfileTitle,
} from "./style";

interface ProfileEditProps {
  nickname: string;
  email: string;
  avatar: string;
}
export const ProfileEdit = ({ nickname, email, avatar }: ProfileEditProps) => {
  return (
    <Box display="flex" flexDirection="column" gap="30px">
      <EditProfileTitle>Edit Profile</EditProfileTitle>
      <Box display="flex" flexDirection="column" gap="10px">
        <Typography>Profile Avatar</Typography>
        <Box display="flex" flexDirection="row" gap="10px">
          <EditProfileAvatar src={avatar} alt="avatar" />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <EditProfileAvatarButton>Change</EditProfileAvatarButton>
            <EditProfileDeleteAvatarButton>
              Delete
            </EditProfileDeleteAvatarButton>
          </Box>
        </Box>
      </Box>
      <EditProfileForm>
        <Box display="flex" gap="20px" flexWrap="wrap">
          <Box width="49%">
            <Typography>Nickname</Typography>
            <EditProfileInput defaultValue={nickname} />
          </Box>
          <Box width="49%">
            <Typography>Email</Typography>
            <EditProfileInput defaultValue={email} />
          </Box>
          <Box width="49%">
            <Typography>Phone number</Typography>
            <EditProfileInput />
          </Box>
          <Box width="49%">
            <Typography>Country</Typography>
            <EditProfileInput />
          </Box>
          <Box width="100%">
            <Typography>Bio</Typography>
            <EditProfileInput multiline />
          </Box>
        </Box>
        <EditProfileSubmitButton>Edit</EditProfileSubmitButton>
      </EditProfileForm>
    </Box>
  );
};
