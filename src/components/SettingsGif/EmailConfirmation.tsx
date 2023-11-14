import { useState } from "react";

import { ConfirmationPopup } from "../ConfirmationPopup/ConfirmationPopup";
import { ConfirmEmailPanelButton, ConfirmEmailDescription } from "./style";

export function EmailConfirmation() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseEmailConfirmationPopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ConfirmEmailDescription>
        If you want to upload and save GIF's, you need to confirm your Email
      </ConfirmEmailDescription>
      <ConfirmEmailPanelButton onClick={() => setIsOpen(true)}>
        Confirm
      </ConfirmEmailPanelButton>
      <ConfirmationPopup
        onClose={handleCloseEmailConfirmationPopup}
        isOpen={isOpen}
      />
    </>
  );
}
