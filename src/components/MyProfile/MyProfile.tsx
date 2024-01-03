import { Gear } from "@phosphor-icons/react";
import { useState } from "react";
import { Box } from "@mui/system";

import { Link } from "react-router-dom";

import { selectCurrentUser } from "../../features/users/users-selectors";
import { useAppSelector } from "../../redux-toolkit";
import { CustomTab } from "../Custom/CustomTab";
import { CustomTabPanel } from "../Custom/CustomTabPanel";
import { CustomModal } from "../Custom/CustomModal";
import { CustomTabs } from "../Custom/CustomTabs";
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
import AddedGifs from "./AddedGifs/AddedGifs";
import { FollowersAndFollowing } from "./FollowersAndFollowingList";

export function MyProfile() {
  const [selectTab, setSelectTab] = useState("added");
  const [
    isOpenModalWithFollowersAndFollowers,
    setIsOpenModalWithFollowersAndFollowers,
  ] = useState(false);
  const [selectedList, setSelectedList] = useState<null | string>(null);
  const currentUser = useAppSelector(selectCurrentUser);

  const handleCloseAllModal = () => {
    setIsOpenModalWithFollowersAndFollowers(false);
  };

  const handleOpenList = (listType: string) => {
    setSelectedList(listType);
    setIsOpenModalWithFollowersAndFollowers(true);
  };
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
      <Box display="flex" gap="15px">
        <ProfileSubscriptions onClick={() => handleOpenList("following")}>
          <span style={{ fontWeight: "bold" }}>
            {currentUser?.following?.length || 0}
          </span>{" "}
          following
        </ProfileSubscriptions>
        <ProfileSubscriptions onClick={() => handleOpenList("followers")}>
          <span style={{ fontWeight: "bold" }}>
            {currentUser?.followers?.length || 0}
          </span>{" "}
          followers
        </ProfileSubscriptions>
        <CustomModal
          open={isOpenModalWithFollowersAndFollowers}
          onClose={handleCloseAllModal}
        >
          <div>
            <FollowersAndFollowing
              followers={currentUser?.followers || []}
              following={currentUser?.following || []}
              type={selectedList || ""}
            />
          </div>
        </CustomModal>
      </Box>

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
          <AddedGifs />
          <Link to="/gif-add">
            <AddedButton>Add GIF</AddedButton>
          </Link>
        </AddedWrapper>
      </CustomTabPanel>
    </ProfileWrapper>
  );
}
