import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const UserProfileWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "mainInfo followers"
    "userGifs followers"
    "userGifs _";
  grid-template-columns: 2.5fr 1fr;
  width: 80%;
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
  border-radius: 20px;
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
  border-radius: 20px 0 0 20px;
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
  display: flex;
  align-items: center;
  gap: 5px;
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
  width: 300px;
  margin-right: 50%;
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
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 10px 20px;
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
export const StyledFollowersList = styled.ul`
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
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;
export const ProfileButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  border: none;
  padding: 15px;
  border-radius: 25px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const TabsContainer = styled(Tabs)({
  display: "flex",
  marginTop: "40px",
  "& .MuiTabs-indicator": {
    backgroundColor: "#000",
  },
  "& .MuiTabs-flexContainer": {
    gap: "40px",
    justifyContent: "center",
  },
  "& .MuiButtonBase-root": {
    padding: 0,
    justifyContent: "end",
    paddingBottom: "5px",
  },
});
export const ProfileTab = styled(Tab)`
  border-radius: 10px;
  color: #000 !important;
  background-color: transparent;
`;
export const StyledButton = styled(Button)`
  width: 640px;
  font-size: 25px;
  color: #ffffff;
  padding: 0;
  margin-top: 40px;
  border-radius: 12px;
  background-color: #5f3db5;
  color: #fff;
  &:hover {
    background-color: #fff;
    color: #5f3db5;
    box-shadow: rgba(95, 61, 181, 0.3) 0px 1px 20px 0px;
    transition: color 0.6s, background-color 0.6s, box-shadow 0.6s;
  }
`;
