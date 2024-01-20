import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const ButtonBack = styled(Button)`
  color: #6f4ff2;
  border-color: #6f4ff2;
  &:hover {
    color: #6f4ff2;
    border-color: #6f4ff2;
  }
`;
export const DetailsGifItemWrapper = styled.div`
  height: fit-content;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
  border-radius: 32px;
  display: flex;
  padding: 20px 20px 15px;
  width: 1100px;
  box-sizing: border-box;
  @media screen and (max-width: 1200px) {
    max-width: 600px;
    width: 100%;
    flex-direction: column;
  }
`;
