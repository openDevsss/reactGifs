import { SettingsLayout } from "../PageLayout/SettingsLayout";
import { ConfirmEmailPanelButton, ConfirmEmailPanelDescription } from "./style";

export function EmailConfirmation() {
  return (
    <SettingsLayout>
      <ConfirmEmailPanelDescription>
        If you want to upload and save GIF's, you need to confirm your Email
      </ConfirmEmailPanelDescription>
      <ConfirmEmailPanelButton>Confirm</ConfirmEmailPanelButton>
    </SettingsLayout>
  );
}
