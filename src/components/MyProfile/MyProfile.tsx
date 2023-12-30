import { Gear } from "phosphor-react";
import { useState } from "react";

import { Link } from "react-router-dom";

import { selectCurrentUser } from "../../features/users/users-selectors";
import { useAppSelector } from "../../redux-toolkit";
import { CustomTab } from "../Custom/CustomTab";
import { CustomTabPanel } from "../Custom/CustomTabPanel";
import { CustomTabs } from "../Custom/CustomTabs";
import { AddedGifs } from "./AddedGifs/AddedGifs";
import {
  AddedButton,
  AddedWrapper,
  ButtonsContainer,
  ProfileAvatar,
  ProfileButton,
  ProfileMail,
  ProfileMailWrapper,
  ProfileName,
  ProfileSubscriptions,
  ProfileWrapper,
} from "./style";

export function MyProfile() {
  const [selectTab, setSelectTab] = useState("added");
  const currentUser = useAppSelector(selectCurrentUser);
  console.log(currentUser?.id);
  return (
    <ProfileWrapper>
      <ProfileAvatar src={currentUser?.avatar} />
      <ProfileName>{currentUser?.nickname}</ProfileName>
      <ProfileMailWrapper>
        <ProfileMail>{currentUser?.email}</ProfileMail>
        <Link to="/settings">
          <Gear
            style={{ cursor: "pointer" }}
            size={20}
            color="#000"
            weight="light"
          />
        </Link>
      </ProfileMailWrapper>

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
          <AddedGifs id={currentUser?.id ?? ""} />
          <Link to="/gif-add">
            <AddedButton>Add GIF</AddedButton>
          </Link>
        </AddedWrapper>
      </CustomTabPanel>
    </ProfileWrapper>
  );
}
