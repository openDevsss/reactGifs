import { useState } from "react";
import { selectCurrentUser } from "../../features/users/users-selectors";
import { useAppSelector } from "../../redux-toolkit";
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
  ProfileAvatar,
} from "./styled";
export default function MyProfile() {
  const [selectTab, setSelectTab] = useState("created");
  const currentUser = useAppSelector(selectCurrentUser);
  return (
    <ProfileWrapper>
      {currentUser?.avatar ? (
        <ProfileAvatar src={currentUser.avatar} />
      ) : (
        <ProfileAvatarLetter>
          {currentUser?.nickname.slice(0, 1)}
        </ProfileAvatarLetter>
      )}
      <ProfileName>{currentUser?.nickname}</ProfileName>
      <ProfileMail>{currentUser?.email}</ProfileMail>
      <ProfileSubscriptions>0 follows</ProfileSubscriptions>
      <ButtonsContainer>
        <ProfileButton>Share</ProfileButton>
        <ProfileButton>Edit profile</ProfileButton>
      </ButtonsContainer>
      <CustomTabs
        value={selectTab}
        onChange={(_: any, tab: any) => {
          setSelectTab(tab);
        }}
      >
        <CustomTab key="saved" value="saved" label="Saved" />
        <CustomTab key="created" value="created" label="Created" />
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
