import styled from "@emotion/styled";
import { Box, MenuItem, TextField, Typography } from "@mui/material";

export const WrapperGifs = styled(Box)`
  height: fit-content;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
  border-radius: 32px;
  display: flex;
  width: 1000px;
  padding: 20px;
`;
export const GifAnimationsGifs = styled.img`
  border-radius: 32px;
  width: 500px;
  height: 400px;
`;

export const ContainerGifs = styled(Box)`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WrapperForButtonsAndProfile = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoUserGifs = styled(Box)`
  display: flex;
  align-items: center;
`;

export const AvatarUserGifs = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  cursor: pointer;
  margin-right: 10px;
`;

export const NicknameUserGifs = styled(Typography)`
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
`;

export const ButtonsGifs = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DescriptionUserGifs = styled(Typography)`
  font-size: 13px;
  margin-top: 10px;
`;

export const CommentsTitle = styled(Typography)`
  font-size: 15px;
  font-weight: 700;
`;

export const AddCommentInputGifs = styled(TextField)`
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

export const StyledMenuItem = styled(MenuItem)`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 5px;
`;
