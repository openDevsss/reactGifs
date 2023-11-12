import styled from "@emotion/styled";
import { Box, Button, TextField, Typography } from "@mui/material";
export const buttonStyle = {
  width: "300px",
  height: "400px",
  backgroundColor: "#f1f1f2",
  border: "1px dashed #5f3db5",
  borderRadius: "30px",
  color: "#000",
  marginBottom: "10px",

  ":hover": {
    backgroundColor: "#dadada",
  },
};
export const FormWrapperStyle = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const WrapperAddGif = styled(Box)`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const DragAndDropWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;
export const SubmitAddGifButton = styled(Button)`
  margin-top: 40px;
  padding: 8px 20px;
  align-self: center;
  width: 250px;
  background-color: #5f3db5;
  color: #ffffff;
  border-radius: 20px;
  &:hover {
    background-color: #3e267c;
  }
`;
export const TitleAddGif = styled(Typography)`
  margin: 0 auto;
  font-size: 20px;
  width: 80%;
`;
export const CreatedWrapper = styled(Box)`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 40px;
`;

export const FormAdded = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const FormInput = styled(TextField)`
  margin-top: 5px;
  margin-bottom: 20px;
  color: #5f3db5;
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #5f3db5;
    }

    border-radius: 20px;
    background-color: #f1f1f2;
  }
  & .MuiFormLabel-root {
    color: #000;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
export const TagList = styled(Box)`
  background-color: #f1f1f2;
  display: flex;
  flex-wrap: wrap;
  border-radius: 14px;
  padding: 8px 14px;
  min-height: 25px;
`;
export const GifsTag = styled(Box)`
  display: flex;
  margin-top: 10px;
  gap: 8px;
  flex-wrap: wrap;
`;
export const AddGifTag = styled.p`
  padding: 8px 14px;
  border-radius: 6px;
  background-color: #f1f1f2;

  cursor: pointer;
  :hover {
    background-color: black;
  }
`;
