import { Modal } from "@mui/material";
import { EnvelopeOpen, X as CloseIcon } from "@phosphor-icons/react";
import VerificationInput from "react-verification-input";
import { selectCurrentUser } from "../../features/users/users-selectors";
import { useAppSelector } from "../../redux-toolkit";
import {
  PopupButton,
  PopupDescription,
  PopupEmail,
  PopupTitle,
  style,
  VerifyPopupWrapper,
} from "./style";

import "./index.css";
interface ConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
}
export function ConfirmationPopup({ isOpen, onClose }: ConfirmationProps) {
  const currentUser = useAppSelector(selectCurrentUser);
  return (
    <Modal open={isOpen}>
      <VerifyPopupWrapper sx={style}>
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
        <CloseIcon
          onClick={onClose}
          size={32}
          style={{
            position: "absolute",
            right: -25,
            top: -25,
            cursor: "pointer",
          }}
        />
        <PopupButton onClick={onClose}>Confirm</PopupButton>
      </VerifyPopupWrapper>
    </Modal>
  );
}
