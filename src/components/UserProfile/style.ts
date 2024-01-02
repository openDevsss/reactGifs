import styled from "@emotion/styled";
import { Avatar, Box, Chip, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const UserProfileWrapper = styled.div`
  display: grid;
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
  padding: 20px;
  width: 20%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 65vh;
  grid-area: followers;
  position: fixed;
  right: 200px;
  top: 110px;
  box-sizing: border-box;
  overflow: hidden;
`;
export const FollowersTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 20px;
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
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const FollowersItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 20px;
`;
export const FollowersAvatar = styled(Avatar)`
  width: 50px;
  height: 50px;
`;
export const FollowersNickname = styled.p`
  font-size: 14px;
  margin: 0;
`;
export const FollowersEmptyMessage = styled.p`
  text-align: center;
  padding: 20px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
