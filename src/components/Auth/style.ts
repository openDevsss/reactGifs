import styled from "@emotion/styled";
import { Button, FormLabel, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    135deg,
    #ffffff,
    #e6e6ff,
    #ffffff
  ); /* градиент в нужных направлениях */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 250px;
  }
  justify-content: center;
`;

export const FormLegend = styled(Typography)`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  margin-bottom: 50px;
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

export const ErrorMessageRegistration = styled.p`
  margin: 0;
  font-size: 12px;
  color: #ff0000;
`;

export const StyledLogoImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 auto 0;
`;

export const StyledTitleCompany = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 60px;
`;
