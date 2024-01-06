import { modalName } from "../../constant/modal";
import { useModal } from "../../hooks/useModal";
import { ConfirmationPopup } from "../ConfirmationPopup/ConfirmationPopup";
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
      <ConfirmEmailPanelButton onClick={() => toggleModal(modalName.email)}>
        Submit
      </ConfirmEmailPanelButton>
      <ConfirmationPopup
        onClose={() => toggleModal(modalName.email)}
        isOpen={modals[modalName.email]}
      />
    </EmailConfirmWrapper>
  );
}
