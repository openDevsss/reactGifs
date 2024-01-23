import styled from "@emotion/styled";
import { Button, TextField, Typography } from "@mui/material";

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

export const EmailConfirmWrapper = styled.div`
  margin-left: 20px;
`;
// export const EditProfileWrapper = styled.div``;
export const EditProfileTitle = styled(Typography)`
  font-size: 24px;
  font-weight: 600;
`;
export const EditProfileAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  object-fit: cover;
`;
export const EditProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const EditProfileInput = styled(TextField)`
  width: 100%;

  & .MuiOutlinedInput-root {
    & textarea {
      padding: 0;
    }
    & fieldset {
      border-color: #808080;
    }

    &.Mui-focused fieldset {
      border-color: #6765f2;
      border-width: 2px;
    }
  }

  & .MuiInputBase-input {
    padding: 10px;
  }
`;
export const EditProfileSubmitButton = styled(Button)`
  width: 15%;
  padding: 10px 0;
  border-radius: 12px;
  align-self: center;
  background-color: #5f3db5;
  color: #ffffff;
  &:hover {
    background-color: #4d3193;
    color: #ffffff;
    transition: background-color 0.6s;
  }
`;
export const EditProfileAvatarButton = styled(Button)`
  width: 100%;
  border-radius: 6px;
  font-size: 14px;
  padding: 8px 30px;
  background-color: #5f3db5;
  color: #ffffff;
  &:hover {
    background-color: #4d3193;
    color: #ffffff;
    transition: background-color 0.6s;
  }
`;
export const EditProfileDeleteAvatarButton = styled(Button)`
  width: 100%;
  border-radius: 6px;
  font-size: 14px;
  padding: 7px 30px;
  background-color: transparent;
  color: #e01e30;
  border: 2px solid #e01e30;
  &:hover {
    background-color: #e01e30;
    color: #ffffff;
    transition: color 0.6s, background-color 0.6s;
  }
`;
