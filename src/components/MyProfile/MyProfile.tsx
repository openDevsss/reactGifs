import { useState } from "react";
import { Link } from "react-router-dom";

import { selectCurrentUser } from "../../features/users/users-selectors";
import { useAppSelector } from "../../redux-toolkit";
import { CustomTab } from "../Custom/CustomTab";
import { CustomTabPanel } from "../Custom/CustomTabPanel";
import { CustomTabs } from "../Custom/CustomTabs";
import {
  ButtonsContainer,
  ProfileAvatar,
  ProfileAvatarLetter,
  ProfileButton,
  ProfileMail,
  ProfileName,
  ProfileSubscriptions,
  ProfileWrapper,
  AddedWrapper,
  AddedTitle,
  AddedButton,
} from "./styled";
export default function MyProfile() {
  const [selectTab, setSelectTab] = useState("added");
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
        <CustomTab key="saved" value="saved" label="saved" />
        <CustomTab key="added" value="added" label="added" />
      </CustomTabs>
      <CustomTabPanel value={selectTab} index="saved"></CustomTabPanel>
      <CustomTabPanel value={selectTab} index="added">
        <AddedWrapper>
          <AddedTitle>
            It's empty now. Here will be pictures that you will add
          </AddedTitle>
          <Link to="/gif-add">
            <AddedButton>Add GIF</AddedButton>
          </Link>
        </AddedWrapper>
      </CustomTabPanel>
    </ProfileWrapper>
  );
}
