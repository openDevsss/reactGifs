import { Modal } from "@mui/material";
import { EnvelopeOpen } from "phosphor-react";
import VerificationInput from "react-verification-input";
import { selectCurrentUser } from "../../features/users/users-selectors";
import { useAppSelector } from "../../redux-toolkit";
import {
  PopupButton,
  PopupDescription,
  PopupEmail,
  PopupTitle,
  VerifyPopupWrapper,
  style,
} from "./style";
export function ConfirmationPopup() {
  const currentUser = useAppSelector(selectCurrentUser);
  return (
    <Modal open={false}>
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
