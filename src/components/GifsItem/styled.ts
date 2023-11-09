import styled from "@emotion/styled";
import { Box, TextField, Typography } from "@mui/material";

export const WrapperHome = styled(Box)`
  height: fit-content;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
  border-radius: 32px;
  display: flex;
  width: 1000px;
  padding: 20px;
`;
export const GifAnimationsHome = styled.img`
  border-radius: 32px;
  width: 500px;
  height: 400px;
`;

export const ContainerHome = styled(Box)`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :nth-child(2) {
    justify-content: flex-start;
  }
`;

export const WrapperForButtonsAndProfile = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoUserHome = styled(Box)`
  display: flex;
  align-items: center;
`;

export const AvatarUserHome = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  cursor: pointer;
  margin-right: 10px;
`;

export const NicknameUserHome = styled(Typography)`
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
`;

export const ButtonsHome = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DescriptionUserHome = styled(Typography)`
  font-size: 13px;
  margin-top: 10px;
`;

export const CommentsTitle = styled(Typography)`
  font-size: 15px;
  font-weight: 700;
`;

export const AddCommentInputHome = styled(TextField)`
  padding: 0;
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;

  input::placeholder {
    font-family: "Inter", serif;
  }
  & label.Mui-focused {
    color: #5f3db5;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #5f3db5;
    }
    border-radius: 8px;
    background-color: #f1f1f2;
  }
  @media (max-width: 1024px) {
    width: 400px;
  }
  @media (max-width: 768px) {
    width: 70%;
    margin-right: 10px;
  }
`;
