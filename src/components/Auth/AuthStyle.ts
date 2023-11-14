import styled from "@emotion/styled";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const Wrapper = styled(Box)`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 250px;
  }
`;

export const FormLegend = styled(Typography)`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 25px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const InstructionText = styled(Typography)`
  font-size: 15px;
  color: #808080;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const LinkSign = styled(Link)`
  text-decoration: none;
  color: #5f3db5;
  &:hover {
    color: #6f4ff2;
  }
`;

export const TextSign = styled.span`
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Description = styled(FormLabel)`
  margin-top: 20px;
  margin-bottom: 7px;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ButtonSubmit = styled(Button)`
  padding: 10px;
  color: #ffffff;
  margin-top: 50px;
  border-radius: 10px;
  background-color: #5f3db5;
  &:hover {
    background-color: #5f3db5;
  }
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

export const WhiteBorderTextField = styled(TextField)`
  input::placeholder {
  }
  & label.Mui-focused {
    color: #5f3db5;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #5f3db5;
    }
    border-radius: 10px;
  }
`;

export const RedirectText = styled(Typography)`
  text-align: center;
  margin-top: 15px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Title = styled(Typography)`
  font-weight: 700;
  color: white;
  font-size: 60px;
  text-align: center;
`;

export const WrapperImage = styled(Box)`
  background-color: #5f3db5;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
