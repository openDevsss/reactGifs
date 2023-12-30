import styled from "@emotion/styled";
import { Avatar, Box, Chip, Typography } from "@mui/material";

export const UserProfileWrapper = styled.div`
  display: grid;
  /* gap: 20px; */
  grid-template-areas:
    "mainInfo followers"
    "userGifs followers"
    "userGifs _";
  grid-template-columns: 3fr 1fr;
  width: 90%;
  margin: 20px auto 0;
`;

export const HashtagWrapper = styled(Box)`
  margin-right: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
//TODO: Если не писать !important стили берутся у Chip'a
export const ColorizedHashtag = styled(Typography)`
  background-color: #5f3db5 !important;
  color: #ffffff !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  margin-right: 3px !important;
  padding: 3px 7px !important;
  border-radius: 7px !important;
`;

export const HashtagItem = styled(Chip)`
  background-color: transparent;
  color: #000;
  & .MuiChip-label {
    padding: 0;
    text-transform: uppercase;
  }
  & .MuiChip-icon {
    padding: 0;
    margin: 0;
  }
  & .MuiBox-root {
  }
`;

export const MainInfoWrapper = styled.div`
  border-radius: 12px;
  color: #000;
  margin: 0 auto;
  width: 640px;
  align-self: center;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
  height: 200px;
  grid-area: mainInfo;
`;
export const MainInfoAvatar = styled.img`
  object-fit: cover;
  height: 200px;
  width: 200px;
  border-radius: 12px 0 0 12px;
`;
export const PersonalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const MainInfoName = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
`;
export const MainInfoMail = styled.p`
  margin: 0;
  font-size: 14px;
  margin-top: 5px;
  color: #5f5f5f;
`;
export const MainInfoTagsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;
export const FollowersWrapper = styled.div`
  padding: 10px;
  width: 20%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  width: 300px;
  grid-area: followers;
  position: fixed;
  right: 200px;
  top: 110px;
`;
export const FollowersTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
`;
export const UserInfoWrapper = styled.div`
  width: 60%;
`;
export const UsersGifsWrapper = styled.div`
  display: grid;
`;
export const UsersGifsTitle = styled.p`
  margin: 0;
`;
export const UserGifItemWrapper = styled.div`
  height: fit-content;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 20px;
  /* grid-area: userGifs; */
`;
export const UserGif = styled.img`
  border-radius: 32px;
  width: 100%;
  min-width: 600px;
  max-width: 600px;
  height: 500px;
  object-fit: cover;
  cursor: pointer;
`;
export const UserGifTitle = styled.h2`
  margin: 0;
  align-self: center;
  font-size: 18px;
`;
export const MainInfoFollow = styled.p`
  font-size: 14px;
  margin: 0;
`;
export const UserGifDescription = styled.p`
  word-wrap: break-word;
`;
export const StyledNumber = styled.span`
  font-weight: 600;
`;
export const FollowersList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
export const FollowersItem = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
export const FollowersAvatar = styled(Avatar)`
  width: 50px;
  height: 50px;
`;
export const FollowersNickname = styled.p`
  font-size: 14px;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 70px;
`;
export const FollowersEmptyMessage = styled.p`
  text-align: center;
  padding: 20px;
`;
