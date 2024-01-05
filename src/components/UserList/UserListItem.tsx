import { Box } from "@mui/material";
import { TypeForUsers } from "./UserList";
import {
  StyledButtonSubscribe,
  StyledLink,
  UserAvatar,
  UserNicknameText,
} from "./style";

interface UserListItemProps {
  user: TypeForUsers;
}

export const UserListItem = ({ user }: UserListItemProps) => {
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
      <StyledButtonSubscribe>Follow</StyledButtonSubscribe>
    </Box>
  );
};
