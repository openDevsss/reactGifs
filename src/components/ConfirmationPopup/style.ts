import { Box, Button, Typography } from "@mui/material";
import { EnvelopeOpen } from "phosphor-react";
import styled from "styled-components";

export const PopupWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* position: "absolute";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #ffffff;
  border: none;
  border-radius: 12;
  box-shadow: 24;
  padding: 16px 32px 24px; */
`;
export const PopupLogo = styled(EnvelopeOpen)``;
export const PopupTitle = styled(Typography)`
  font-size: 22px;
  font-weight: 700;
  color: #5f3db5;
`;
export const PopupDescription = styled(Typography)`
  margin-top: 8px;
  font-size: 14px;
  color: #5f3db5;
`;
export const PopupEmail = styled(Typography)`
  font-size: 14px;
  color: #5f3db5;
  font-weight: 600;
`;
export const PopupButton = styled(Button)`
  margin-top: 40px;
  padding: 10px 20px;
  background-color: #5f3db5;
  color: #ffffff;
  border-radius: 20px;
  &:hover {
    background-color: #3e267c;
  }
`;
