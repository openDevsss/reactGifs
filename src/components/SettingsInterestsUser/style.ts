import styled from "@emotion/styled";
import { Box, Chip, Modal, Paper } from "@mui/material";

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
  overflow: hidden;
`;

export const StyledTitleStep = styled.h2`
  font-size: 24px;
  margin: 0;
  color: black;
`;

export const StyledWrapperGif = styled(Box)`
  width: 45%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 27px;
  padding: 15px;
  overflow: auto;
  max-height: 700px;
`;

export const StyledChipTitle = styled(Chip)`
  padding: 20px;
  cursor: pointer;
`;
