import { Alert } from "@mui/material";
import { useAlert } from "../../hooks/useAlert";

const AlertPopup = () => {
  const { text, type } = useAlert();
  if (text && type) {
    return (
      <Alert
        // @ts-ignore
        severity={type}
        sx={{
          position: "fixed",
          zIndex: 1000,
          padding: "20px",
          borderRadius: "8px",
          top: 15,
          left: type === "error" || type === "warning" ? "15px" : null,
          right: type === "success" || type === "info" ? "15px" : null,
        }}
      >
        {text}
      </Alert>
    );
  } else {
    return null;
  }
};

export default AlertPopup;
