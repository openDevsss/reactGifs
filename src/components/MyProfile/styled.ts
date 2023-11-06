import { Box, Tab, Tabs } from "@mui/material";
import styled from "@emotion/styled";
export const ProfileWrapper = styled(Box)`
  width: 900px;
  display: flex;
  margin: 40px auto;
  flex-direction: column;
  align-items: center;
`;
export const ProfileAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;
export const ProfileAvatarLetter = styled.p`
  margin: 0;
  font-size: 50px;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #f1f1f2;
`;
export const ProfileName = styled.p`
  margin: 0;
  margin-top: 20px;
  font-size: 36px;
`;
export const ProfileMail = styled.p`
  margin: 0;
  margin-top: 10px;
  font-size: 14px;
  color: #5f5f5f;
`;
export const ProfileSubscriptions = styled.p`
  margin: 0;
  margin-top: 10px;
  font-size: 16px;
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
`;
export const TabsContainer = styled(Tabs)({
  display: "flex",
  marginTop: "40px",
  "& .MuiTabs-indicator": {
    backgroundColor: "#000",
  },
  "& .MuiTabs-flexContainer": {
    gap: "40px",
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