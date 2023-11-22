import styled from "@emotion/styled";
import { Avatar, Box, MenuItem, TextField, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

export const WrapperHeader = styled.header`
  margin: 0;
  width: 100%;
  padding: 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const InformationHeader = styled(Box)`
  display: flex;
  align-items: center;
  gap: 27px;
  box-sizing: border-box;
`;

export const LogoHeader = styled.img`
  background-color: #d4cbe6;
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

export const HomeHeader = styled(Link)`
  color: #6f4ff2;
  font-size: 16px;
  text-decoration: none;
`;

export const RecommendationsTitle = styled(Typography)`
  color: #6f4ff2;
  font-size: 16px;
  @media (max-width: 400px) {
    margin-right: 20px;
  }
`;

export const WrapperSearch = styled.div`
  max-width: 950px;
  width: 100%;
  margin: 0 20px;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const SearchHeader = styled(TextField)`
  padding: 0;
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
`;

export const NavigationHeader = styled(Box)`
  display: flex;
  position: relative;
  align-items: center;
  gap: 22px;
`;

export const LinkNavigation = styled(NavLink)`
  font-size: 16px;
  text-decoration: none;
  color: #0c0c0c;
  font-size: 16px;
  line-height: 1.5;
`;

export const ProfileIcon = styled(Avatar)`
  border: 1px solid #29e072;
  width: 44px;
  height: 44px;
  object-fit: cover;
`;

export const ProfileName = styled(Typography)`
  color: #6f4ff2;
  font-size: 16px;
  padding-left: 25px;
`;

export const MyProfileWrapper = styled(Link)`
  margin: 0;
  width: 140px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #f1f1f2;
  border-radius: 50px;
  justify-content: center;
  cursor: pointer;
`;

export const WrapperIcon = styled(Box)`
  background-color: #f1f1f2;
  padding: 10px;
  padding-bottom: 6px;
  border-radius: 8px;
  cursor: pointer;
  &hover {
    filter: brightness(90%);
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 5px;
`;
