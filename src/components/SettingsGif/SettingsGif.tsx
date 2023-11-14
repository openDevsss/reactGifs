import { useState } from "react";

import { CustomTabPanel } from "../Custom/CustomTabPanel";
import { EmailConfirmation } from "./EmailConfirmation";
import {
  ConfirmEmailPanel,
  SettingsTab,
  SettingsTabContainer,
  SettingsTabPanel,
  WrapperSettingsGif,
} from "./style";

export function SettingsGif() {
  const [selectTab, setSelectTab] = useState("confirmEmail");
  return (
    <WrapperSettingsGif>
      <SettingsTabContainer
        value={selectTab}
        onChange={(_: any, tab: any) => {
          setSelectTab(tab);
        }}
        orientation="vertical"
      >
        <SettingsTab
          key="confirmEmail"
          value="confirmEmail"
          label="confirm email"
        />
        <SettingsTab
          key="changePassword"
          value="changePassword"
          label="change password"
        />
      </SettingsTabContainer>
      <ConfirmEmailPanel value={selectTab} index="confirmEmail">
        <EmailConfirmation />
      </ConfirmEmailPanel>
      <CustomTabPanel value={selectTab} index="changePassword">
        <SettingsTabPanel>432234</SettingsTabPanel>
      </CustomTabPanel>
    </WrapperSettingsGif>
  );
}
