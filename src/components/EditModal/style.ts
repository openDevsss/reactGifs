import styled from "@emotion/styled";
import { Button, List, ListItemButton, TextField } from "@mui/material";
export const EditPopupWrapper = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 460px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  padding: 20px;
  outline: none;

  @media (max-width: 1024px) {
    width: 35%;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 65%;
  }
  @media (max-width: 426px) {
    width: 75%;
  }
  @media (max-width: 376px) {
    width: 80%;
  }
`;
export const EditPopupTitle = styled.h2`
  margin: 0;
  font-size: 40px;
  font-weight: 500;
`;
export const EditPopupInput = styled(TextField)`
  width: 100%;
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
`;
export const EditPopupButton = styled(Button)`
  padding: 8px;
  background-color: #5f3db5;
  color: #ffffff;
  border-radius: 20px;
  width: 25%;
  &:hover {
    background-color: #3e267c;
  }
  @media (max-width: 1024px) {
    width: 30%;
  }
`;
export const ErrorMessageEditModal = styled.p`
  margin: 0;
  font-size: 12px;
  color: #ff0000;
`;
export const StyledList = styled(List)`
  width: 100%;
  position: relative;
  overflow: auto;
  overflow-x: hidden;
  max-height: 130px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  & ul {
    padding: 0;
  }
  gap: 10px;
  @media (max-width: 1920px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const StyledListItemButton = styled(ListItemButton)`
  padding-left: 5px;
  padding-right: 38px !important;
  border: 1px solid #5f3db5;
  border-radius: 12px;
`;
