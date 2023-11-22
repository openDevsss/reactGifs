import styled from "@emotion/styled";
import { Box, MenuItem, TextField, Typography } from "@mui/material";

export const GifWrapper = styled(Box)`
  height: fit-content;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
  border-radius: 32px;
  display: flex;
  width: 1000px;
  padding: 20px;
`;
export const GifAnimation = styled.img`
  border-radius: 32px;
  width: 50%;
  min-width: 500px;
  height: 400px;
  object-fit: cover;
  cursor: pointer;
`;

export const ContainerGif = styled.div`
  width: 50%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GifHeadInformation = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GifUserInformation = styled(Box)`
  display: flex;
  align-items: center;
`;

export const GifUserAvatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  cursor: pointer;
  margin-right: 10px;
`;

export const GifUserNickname = styled(Typography)`
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
`;

export const GifMenuItem = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const GifDescription = styled(Typography)`
  font-size: 16px;
  margin-top: 10px;
`;

export const GifComment = styled(Typography)`
  font-size: 16px;
`;

export const CommentsTitle = styled(Typography)`
  font-size: 15px;
  font-weight: 700;
`;

export const GifInput = styled(TextField)`
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
  gap: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;
