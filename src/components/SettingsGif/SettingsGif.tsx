import { useState } from "react";
import { SettingsLayout } from "../../layout/SettingsLayout";
import { CustomTabPanel } from "../Custom/CustomTabPanel";

import { EmailConfirmation } from "./EmailConfirmation";
import ProfileEdit from "./ProfileEdit";
import { SettingsTab, SettingsTabContainer, WrapperSettingsGif } from "./style";

export function SettingsGif() {
  const [selectTab, setSelectTab] = useState("editProfile");
  return (
    <SettingsLayout>
      <WrapperSettingsGif>
        <SettingsTabContainer
          value={selectTab}
          onChange={(_: any, tab: any) => {
            setSelectTab(tab);
          }}
          orientation="vertical"
        >
          <SettingsTab
            key="editProfile"
            value="editProfile"
            label="edit profile"
          />
          <SettingsTab
            key="confirmEmail"
            value="confirmEmail"
            label="confirm email"
          />
        </SettingsTabContainer>
        <CustomTabPanel value={selectTab} index="confirmEmail">
          <EmailConfirmation />
        </CustomTabPanel>
        <CustomTabPanel value={selectTab} index="editProfile">
          <ProfileEdit />
        </CustomTabPanel>
      </WrapperSettingsGif>
    </SettingsLayout>
  );
}
