import styled from "@emotion/styled";
import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const WrapperFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #202020;
  padding: 19px;
  box-sizing: border-box;
`;

export const ContainerFooter = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  font-weight: 700;
  font-size: 20px;
  color: #6f4ff2;
  cursor: pointer;
`;

export const IconFooter = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 24px;
  cursor: pointer;
  :last-child {
    margin-right: 0px;
  }
`;
