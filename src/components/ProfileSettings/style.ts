import styled from "@emotion/styled";
import { Box, Button, Tab, Tabs, TextField, Typography } from "@mui/material";

import { CustomTabPanel } from "../Custom/CustomTabPanel";

export const WrapperProfileSettings = styled(Box)`
  padding: 50px 20px 20px 20px;
  display: flex;
`;

export const SettingsTabContainer = styled(Tabs)`
  display: flex;
  min-width: max-content;
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
export const EditProfileTabPanel = styled(CustomTabPanel)`
  width: 1000px;
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
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileEditSubmitButton = styled(Button)`
  margin-top: 20px;
  color: #000;
  background-color: #f1f1f2;
  border-radius: 10px;
  font-size: 12px;
  padding: 6px 12px;
  &:hover {
    background-color: #f1f1f2;
  }
`;

export const EditProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 500px;
`;

export const ProfileEditInput = styled(TextField)`
  margin-top: 5px;
  margin-top: 20px;
  color: #5f3db5;
  width: 100%;
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

export const EmailConfirmWrapper = styled.div`
  margin-left: 20px;
`;
export const ErrorMessage = styled.p`
  margin: 0;
  font-size: 12px;
  color: #ff0000;
  align-self: start;
`;

export const ConfirmEmailPanel = styled(CustomTabPanel)`
  display: flex;
  flex-direction: column;
`;

export const ConfirmEmailPanelDescription = styled(Typography)`
  font-size: 20px;
`;
