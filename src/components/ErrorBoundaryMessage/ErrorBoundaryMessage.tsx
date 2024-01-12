import { Container } from "@mui/material";
interface ErrorBoundaryMessageProps {
  errorMeassge?: string;
}

export const ErrorBoundaryMessage = ({
  errorMeassge,
}: ErrorBoundaryMessageProps) => {
  return (
    <Container>
      <h2>У вас случилась ошибка</h2>
    </Container>
  );
};
