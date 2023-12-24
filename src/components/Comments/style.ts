import styled from "@emotion/styled";
import { Box, TextField, Typography } from "@mui/material";

export const CommentsForm = styled.form<{ isCommentsOpen: boolean }>`
  display: ${(props) => (props.isCommentsOpen ? "block" : "none")};
`;
export const ListStyle = {
  width: "100%",
  marginTop: "10px",
  bgcolor: "background.paper",
  position: "relative",
  overflow: "auto",
  maxHeight: 280,
};
export const CommentsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CommentsTitle = styled(Typography)`
  font-size: 15px;
  font-weight: 700;
`;
export const GifInput = styled(TextField)`
  padding: 0;
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
  input::placeholder {
    font-family: "Inter", serif;
  }
  & label.Mui-focused {
    color: #5f3db5;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #5f3db5;
    }
    border-radius: 8px;
    background-color: #f1f1f2;
  }
  @media (max-width: 1024px) {
    width: 400px;
  }
  @media (max-width: 768px) {
    width: 70%;
    margin-right: 10px;
  }
`;
export const ErrorMessageComments = styled.p`
  margin: 0;
  font-size: 12px;
  color: #ff0000;
  align-self: start;
`;
export const EmptyCommentsMessage = styled.p`
  margin: 0;
`;
