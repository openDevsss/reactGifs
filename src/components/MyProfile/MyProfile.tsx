import { useState } from "react";
import { CustomTab } from "../Custom/CustomTab";
import { CustomTabPanel } from "../Custom/CustomTabPanel";
import { CustomTabs } from "../Custom/CustomTabs";
import {
  ButtonsContainer,
  ProfileMail,
  ProfileName,
  ProfileSubscriptions,
  ProfileWrapper,
  ProfileButton,
  ProfileAvatarLetter,
} from "./styled";
export default function MyProfile() {
  const [selectTab, setSelectTab] = useState("created");
  return (
    <ProfileWrapper>
      <ProfileAvatarLetter>A</ProfileAvatarLetter>
      <ProfileName>Andrey</ProfileName>
      <ProfileMail>a@mail.ri</ProfileMail>
      <ProfileSubscriptions>0 подписок</ProfileSubscriptions>
      <ButtonsContainer>
        <ProfileButton>Поделиться</ProfileButton>
        <ProfileButton>Изменить профиль</ProfileButton>
      </ButtonsContainer>
      <CustomTabs
        value={selectTab}
        onChange={(_: any, tab: any) => {
          setSelectTab(tab);
        }}
      >
        <CustomTab key="saved" value="saved" label="Сохраненные" />
        <CustomTab key="created" value="created" label="Созданные" />
      </CustomTabs>
      <CustomTabPanel value={selectTab} index="saved">
        1235
      </CustomTabPanel>
      <CustomTabPanel value={selectTab} index="created">
        99090
      </CustomTabPanel>
    </ProfileWrapper>
  );
}
