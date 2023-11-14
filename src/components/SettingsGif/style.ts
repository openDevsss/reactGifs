import styled from "@emotion/styled";
import { Box, Button, Tab, Tabs, TextField, Typography } from "@mui/material";

export const WrapperSettingsGif = styled(Box)`
  padding: 50px 20px 20px 20px;
  display: flex;
`;

export const SettingsTabContainer = styled(Tabs)`
  display: flex;
  & .MuiTabs-indicator {
    background-color: #000;
  }
`;
export const SettingsTab = styled(Tab)`
  border-radius: 10px;
  width: 150px;
  color: #000 !important;
  background-color: transparent;
  align-self: start;
`;
export const ConfirmEmailDescription = styled(Typography)`
  font-size: 20px;
`;
export const ConfirmEmailPanelButton = styled(Button)`
  padding: 10px;
  margin-top: 15px;
  background-color: #5f3db5;
  color: #ffffff;
  border-radius: 12px;
  &:hover {
    background-color: #3e267c;
  }
`;
export const ProfileEditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProfileEditAvatar = styled.img`
  width: 100px;
  border-radius: 50%;
`;
export const ProfileEditAvatarButton = styled(Button)`
  color: #000;
  background-color: #f1f1f2;
  &:hover {
    background-color: #f1f1f2;
  }
`;
export const EditProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
`;
export const ProfileEditInput = styled(TextField)`
  margin-top: 5px;
  margin-bottom: 20px;
  color: #5f3db5;
  width: 30%;
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #5f3db5;
    }

    border-radius: 20px;
    background-color: #f1f1f2;
  }
  & .MuiFormLabel-root {
    color: #000;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
