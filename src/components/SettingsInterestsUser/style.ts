import styled from "@emotion/styled";
import { Box, Chip, Modal, Paper, StepLabel, TextField } from "@mui/material";

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
  gap: 20px;
  padding: 15px;
  overflow: auto;
  max-height: 700px;
`;

export const StyledChipTitle = styled(Chip)`
  padding: 20px;
  cursor: pointer;
`;

export const StyledWrapperTextField = styled(Box)`
  width: 100%;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const WrapperForTextFieldAndLabel = styled.div`
  width: 40%;
  flex-grow: 1;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 7px;
    border: #000000;
    color: #000000;
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #808080;
    }

    &.Mui-focused fieldset {
      border-color: #6765f2;
      border-width: 2px;
    }
  }
`;

export const StyledTextArea = styled(TextField)`
  width: 100%;
  align-self: flex-start;
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #808080;
    }

    &.Mui-focused fieldset {
      border-color: #808080;
      border-width: 1px;
    }
    &.css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root {
      padding: 10px;
      height: auto;
      min-height: 160px;
    }
    & fieldset {
      border-color: #808080;
    }

    &.Mui-focused fieldset {
      border-color: #6765f2;
      border-width: 2px;
    }
  }
`;

export const StyledStepLabel = styled(StepLabel)`
  .MuiStepLabel-label {
    color: #000000;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  &.Mui-focused fieldset {
    border-color: #6765f2;
    border-width: 2px;
  }
`;
