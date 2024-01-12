import { Container } from "@mui/material";
import 
interface ErrorBoundaryMessage {
  errorMeassge: string;
}

export const ErrorBoundaryMessage = ({
  errorMeassge,
}: ErrorBoundaryMessage) => {
  return (
    <Container>
      <h2>У вас случилась ошибка</h2>
    </Container>
  );
};
