import styled from "@emotion/styled";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";

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
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
`;

export const FormLegend = styled(Typography)`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 25px;
`;

export const InstructionText = styled(Typography)`
  font-size: 15px;
  color: grey;
`;

export const Description = styled(FormLabel)`
  margin-top: 20px;
  margin-bottom: 7px;
  color: black;
`;

export const ButtonSubmit = styled(Button)`
  padding: 10px;
  color: white;
  margin-top: 50px;
  border-radius: 10px;
  background-color: #5f3db5;
  &:hover {
    background-color: #5f3db5;
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
`;
