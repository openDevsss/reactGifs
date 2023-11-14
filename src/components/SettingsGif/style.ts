import styled from "@emotion/styled";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { CustomTabPanel } from "../Custom/CustomTabPanel";

export const WrapperSettingsGif = styled(Box)`
  padding: 50px 20px 20px 20px;
  display: flex;
`;

export const SettingsTabContainer = styled(Tabs)`
  display: flex;
  & .MuiTabs-indicator {
    background-color: #000;
  }
`;
export const SettingsTab = styled(Tab)`
  border-radius: 10px;
  color: #000 !important;
  background-color: transparent;
  align-self: start;
`;
export const ConfirmEmailPanel = styled(CustomTabPanel)`
  display: flex;
  flex-direction: column;
`;
export const ConfirmEmailPanelDescription = styled(Typography)`
  font-size: 20px;
`;
export const ConfirmEmailPanelButton = styled(Button)``;
export const SettingsTabPanel = styled(Box)``;
