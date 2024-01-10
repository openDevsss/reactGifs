import styled from "@emotion/styled";
import { Box, Modal, Paper } from "@mui/material";

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
`;

export const StyledWrapper = styled(Paper)`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  height: 900px;
  outline: none;
  padding: 50px;
  box-sizing: border-box;
`;

export const StyledSelectedStepWrapper = styled(Box)`
  width: 100%;
  height: 80vh;
`;
