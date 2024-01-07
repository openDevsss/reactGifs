import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const LayoutHomePage = styled(Container)`
  max-width: 1100px;
  margin: 0 auto;
`;

export const SettingsLayoutWrapper = styled(Container)`
  max-width: 1100px;
  margin: 0 auto;
  width: 1100px;
`;

export const LayoutDetailsGif = styled(Container)`
  max-width: 1100px;
  margin: 0 auto;
  width: 1100px;
  padding: 30px 0;
`;

export const LayoutUserProfile = styled(Container)`
  display: grid;
  grid-template-areas:
    "mainInfo followers"
    "userGifs followers"
    "userGifs _";
  grid-template-columns: 70% 30%;
  width: 65%;
  gap: 20px;
  margin: 20px auto 0;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
