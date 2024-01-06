import styled from "@emotion/styled";
import { Box, MenuItem, Typography } from "@mui/material";

export const GifItemWrapper = styled.div`
  height: fit-content;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
  border-radius: 32px;
  display: flex;
  width: 1100px;
  padding: 20px 20px 15px;
`;
export const GifAnimation = styled.img`
  border-radius: 20px;
  width: 100%;
  min-width: 600px;
  max-width: 600px;
  height: 500px;
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
`;

export const GifUserNickname = styled(Typography)`
  font-weight: 500;
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
`;

export const GifMenuItem = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GifDescription = styled(Typography)`
  font-size: 16px;
  margin-top: 10px;
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
export const StyledWrapperIconGif = styled.div`
  display: flex;
  align-items: center;
  background: #f1f1f2;
  padding: 4px 12px;
  border-radius: 32px;
  gap: 10px;
`;
export const StyledWrapperIconHeart = styled.div<{ isLiked: boolean }>`
  display: flex;
  align-items: center;
  background: #f1f1f2;
  padding: 4px 12px;
  border-radius: 32px;
  gap: ${({ isLiked }) => (isLiked ? "10px" : "0")};
`;
export const GifItemTitle = styled.h2`
  margin: 0;
  align-self: center;
  font-size: 18px;
`;
