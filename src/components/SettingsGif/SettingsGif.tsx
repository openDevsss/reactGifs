import { SettingsLayout } from "layout/SettingsLayout";
import { useState } from "react";

import { CustomTabPanel } from "@components/Custom/CustomTabPanel";
import { EmailConfirmation } from "./EmailConfirmation";
import { ProfileEdit } from "./ProfileEdit";
import {
  EditProfileTabPanel,
  SettingsTab,
  SettingsTabContainer,
  WrapperSettingsGif,
} from "./style";

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
        <EditProfileTabPanel value={selectTab} index="editProfile">
          <ProfileEdit />
        </EditProfileTabPanel>
      </WrapperSettingsGif>
    </SettingsLayout>
  );
}
