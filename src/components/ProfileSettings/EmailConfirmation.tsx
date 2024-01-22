import { configModalName } from "constant";
import { useModal } from "@hooks/useModal";

import { ConfirmationPopup } from "@components/ConfirmationPopup/ConfirmationPopup";
import {
  ConfirmEmailDescription,
  ConfirmEmailPanelButton,
  EmailConfirmWrapper,
} from "./style";

export function EmailConfirmation() {
  const { modals, toggleModal } = useModal();
  return (
    <EmailConfirmWrapper>
      <ConfirmEmailDescription>
        If you want to upload and save GIF's, you need to confirm your Email
      </ConfirmEmailDescription>
      <ConfirmEmailPanelButton
        onClick={() => toggleModal(configModalName.email)}
      >
        Submit
      </ConfirmEmailPanelButton>
      <ConfirmationPopup
        onClose={() => toggleModal(configModalName.email)}
        isOpen={modals[configModalName.email]}
      />
    </EmailConfirmWrapper>
  );
}
