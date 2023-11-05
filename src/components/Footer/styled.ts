import styled from "@emotion/styled";
import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const WrapperFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #202020;
  padding: 84px 140px;
  box-sizing: border-box;
`;

export const ContainerFooter = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
export const PresentationFooter = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ContainerIcons = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoFooter = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 16px;
  cursor: pointer;
`;

export const TitleFooter = styled(Typography)`
  font-family: "Inter";
  font-weight: 700;
  font-size: 28px;
  color: #5f3db5;
`;

export const IconFooter = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 24px;
  cursor: pointer;
  :last-child {
    margin-right: 0px;
  }
`;

export const NavigationFooter = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const DescriptionFooter = styled(Typography)`
  color: #ffffff;
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  width: 390px;
`;

export const TytleExploreFooter = styled(Typography)`
  font-family: "Inter";
  font-weight: 700;
  font-size: 21px;
  color: #5f3db5;
`;

export const LinkNavigation = styled(Link)`
  text-decoration: none;
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  margin-top: 8px;
`;

export const LinkFooter = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const Line = styled(Divider)`
  margin: 30px 0;
  background-color: #d3d4d6;
  height: 1.5px;
`;
