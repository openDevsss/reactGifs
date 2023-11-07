import {
  PopupButton,
  PopupDescription,
  PopupEmail,
  PopupTitle,
  VerifyPopupWrapper,
  style,
} from "./style";
import VerificationInput from "react-verification-input";
import "./index.css";
import { useAppSelector } from "../../redux-toolkit";
import { selectCurrentUser } from "../../features/users/users-selectors";
import { Modal } from "@mui/material";
import { EnvelopeOpen } from "phosphor-react";
export function ConfirmationPopup() {
  const currentUser = useAppSelector(selectCurrentUser);
  return (
    <Modal open={true}>
      <VerifyPopupWrapper sx={{ ...style }}>
        <EnvelopeOpen size={100} color="#5f3db5" weight="thin" />
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
      </VerifyPopupWrapper>
    </Modal>
  );
}
