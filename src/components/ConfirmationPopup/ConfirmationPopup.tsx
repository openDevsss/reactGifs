import { Box } from "@mui/system";
import {
  PopupButton,
  PopupDescription,
  PopupEmail,
  PopupLogo,
  PopupTitle,
  PopupWrapper,
} from "./style";
import VerificationInput from "react-verification-input";
import "./index.css";
import { useAppSelector } from "../../redux-toolkit";
import { selectCurrentUser } from "../../features/users/users-selectors";
import { Modal } from "@mui/material";
export function ConfirmationPopup() {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "0 solid #000",
    borderRadius: 12,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const currentUser = useAppSelector(selectCurrentUser);
  return (
    <Modal open={true}>
      <PopupWrapper sx={{ ...style }}>
        <PopupLogo size={100} color="#5f3db5" weight="thin" />
        <PopupTitle>Verify your email</PopupTitle>
        <PopupDescription>Please enter 6 digit code sent to</PopupDescription>
        <PopupEmail>{currentUser?.email}</PopupEmail>
        <VerificationInput
          classNames={{
            container: "container",
            character: "character",
            characterInactive: "character--inactive",
            characterSelected: "character--selected",
          }}
          validChars="0-9"
          inputProps={{ inputMode: "numeric" }}
          placeholder=""
        />
        <PopupButton>Confirm</PopupButton>
      </PopupWrapper>
    </Modal>
  );
}
