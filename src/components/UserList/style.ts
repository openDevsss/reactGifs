import styled from "@emotion/styled";
import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledWtapperIntoModal = styled(Paper)`
  padding: 35px 50px;
  height: 70vh;
  max-height: 70vh;
  position: relative;
  outline: none;
`;

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserNicknameText = styled(Typography)`
  font-size: 24px;
  cursor: pointer;
  width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledButtonSubscribe = styled(Button)`
  color: #ffffff;
  background-color: #5f3db5;
  font-weight: 600;

  &:hover {
    background-color: #ffffff;
    color: #5f3db5;
  }
`;
export const StyledButtonUnSubscribe = styled(Button)`
  color: #5f3db5;
  background-color: #ffffff;
  font-weight: 600;

  &:hover {
    background-color: #ffffff;
    color: #ff0000;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
