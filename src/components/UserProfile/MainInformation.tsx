import { Box } from "@mui/material";
import { Gear } from "@phosphor-icons/react";
import { subscribToUser, unSubscribToUser } from "features/users/users-slice";
import { Link } from "react-router-dom";
import { useAppDispatch } from "redux-toolkit";
import type { User } from "types/User";

import {
  MainInfoAvatar,
  MainInfoFollow,
  MainInfoMail,
  MainInfoName,
  MainInfoWrapper,
  PersonalInfoWrapper,
  StyledFollowButton,
  StyledNumber,
  StyledUnfollowButton,
} from "./style";

type MainInfoProps = Pick<
  User,
  "avatar" | "email" | "followers" | "following" | "nickname" | "id"
> & { currentUser: User };

function MainInformationSettings() {
  return (
    <Link
      style={{
        width: "20px",
        height: "20px",
      }}
      to="/settings"
    >
      <Gear cursor="pointer" size={20} color="#000" weight="light" />
    </Link>
  );
}

export function MainInformation({
  nickname,
  avatar,
  email,
  followers,
  following,
  id: userId,
  currentUser,
}: MainInfoProps) {
  const isFollowing = currentUser?.following.some(
    ({ followeeId }) => followeeId === userId,
  );

  const dispatch = useAppDispatch();
  const handleSubscribe = () => {
    dispatch(subscribToUser(userId));
  };
  const handleUnSubscribe = () => {
    dispatch(unSubscribToUser(userId));
  };

  return (
    <MainInfoWrapper>
      <MainInfoAvatar src={avatar} />
      <PersonalInfoWrapper>
        <div>
          <MainInfoName>{nickname}</MainInfoName>
          <MainInfoMail>
            {email}
            {userId === currentUser?.id && <MainInformationSettings />}
          </MainInfoMail>
        </div>

        <Box
          display="flex"
          flexDirection="column"
          gap="10px"
          marginTop="10px"
          width="fit-content"
        >
          <Box display="flex" alignItems="center" gap="20px">
            <MainInfoFollow>
              followers: <StyledNumber>{followers?.length}</StyledNumber>
            </MainInfoFollow>
            <MainInfoFollow>
              following: <StyledNumber>{following?.length}</StyledNumber>
            </MainInfoFollow>
          </Box>
          {currentUser?.id !== userId && (
            <Box>
              {!isFollowing ? (
                <StyledFollowButton onClick={handleSubscribe}>
                  follow
                </StyledFollowButton>
              ) : (
                <StyledUnfollowButton onClick={handleUnSubscribe}>
                  unfollow
                </StyledUnfollowButton>
              )}
            </Box>
          )}
        </Box>
      </PersonalInfoWrapper>
    </MainInfoWrapper>
  );
}
