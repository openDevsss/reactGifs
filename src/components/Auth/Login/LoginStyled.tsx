import styled from "@emotion/styled";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
  Link,
} from "@mui/material";

export const Section = styled.section`
  width: 1920px;
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

export const Form = styled(FormControl)`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
`;

export const FormLegend = styled(Typography)`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 25px;
  font-family: "Arvo";
`;

export const InstructionText = styled(Typography)`
  font-size: 15px;
  font-family: "Arvo";
`;

export const Description = styled(FormLabel)`
  margin-top: 20px;
  margin-bottom: 7px;
  font-family: "Arvo";
`;

export const ButtonSubmit = styled(Button)`
  padding: 10px;
  color: white;
  margin-top: 50px;
  border-radius: 10px;
  font-family: "Arvo";
  background-color: #5f3db5;
  &:hover {
    background-color: #5f3db5;
  }
`;

export const WhiteBorderTextField = styled(TextField)`
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

export const RedirictText = styled(Typography)`
  text-align: center;
  margin-top: 5px;
  font-family: "Arvo";
`;

export const Title = styled(Typography)`
  font-weight: bold;
  color: white;
  font-size: 60px;
  text-align: center;
  font-family: "Arvo";
`;

export const LogInLink = styled(Link)`
  font-family: "Arvo";
  color: #5f3db5;
  cursor: pointer;
  &.MuiLink-root {
    text-decoration-color: rgba(61, 0, 113, 0.2);
  }
`;
