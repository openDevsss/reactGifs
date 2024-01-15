import { Box } from "@mui/material";
import { subscribToUser, unSubscribToUser } from "features/users/users-slice";
import { useAppDispatch } from "redux-hooks";
import type { Followers } from "types";

import { TypeForUsers } from "./UserList";
import {
  StyledButtonSubscribe,
  StyledButtonUnSubscribe,
  StyledLink,
  UserAvatar,
  UserNicknameText,
} from "./style";

interface UserListItemProps {
  user: TypeForUsers;
  following: Followers[];
}

export const UserListItem = ({ user, following }: UserListItemProps) => {
  const isFollowing = following?.some(
    ({ followeeId }) => followeeId === user?.id,
  );
  const dispatch = useAppDispatch();
  const handleSubscribe = () => {
    dispatch(subscribToUser(user?.id));
  };

  const handleUnSubscribe = () => {
    dispatch(unSubscribToUser(user?.id));
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
    >
      <Box display="flex" alignItems="center" gap="20px">
        <UserAvatar src={user.avatar} alt={user.nickname} />
        <StyledLink to={`/profile/${user.id}`}>
          <UserNicknameText>{user.nickname}</UserNicknameText>
        </StyledLink>
      </Box>
      {!isFollowing ? (
        <StyledButtonSubscribe onClick={handleSubscribe}>
          Follow
        </StyledButtonSubscribe>
      ) : (
        <StyledButtonUnSubscribe onClick={handleUnSubscribe}>
          unFollow
        </StyledButtonUnSubscribe>
      )}
    </Box>
  );
};
