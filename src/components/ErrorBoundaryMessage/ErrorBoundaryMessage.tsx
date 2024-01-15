import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";
import { ReactComponent as ErrorImage } from "images/ErrorImage.svg";
import { Link } from "react-router-dom";

const StyledTitle = styled(Typography)`
  text-align: center;
  font-size: 18px;
`;

const StyledButton = styled.button`
  color: #ffffff;
  background-color: #5f3db5;
  padding: 15px;
  border-radius: 15px;
  font-weight: 600;
  border: none;
  outline: none;
  display: block;
  cursor: pointer;
  transition: background-color 0.6s, color 0.6s;
  width: 200px;
  margin: 70px auto 0;
  &:hover {
    color: #5f3db5;
    background-color: #ffffff;
  }
`;

export const ErrorBoundaryMessage = ({ onReset }: { onReset: () => void }) => {
  return (
    <Container>
      <ErrorImage
        style={{ width: "600px", margin: "0 auto", display: "block" }}
      />
      <StyledTitle>Opps! Page Not Found</StyledTitle>
      <Link to="/" style={{ textDecoration: "none" }}>
        <StyledButton onClick={onReset}>Back to home</StyledButton>
      </Link>
    </Container>
  );
};
