import { Box } from "@mui/material";
import { TypeForUsers } from "./UserList";
import { StyledButtonSubscribe, UserAvatar, UserNicknameText } from "./style";

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
        <UserNicknameText>{user.nickname}</UserNicknameText>
      </Box>
      <StyledButtonSubscribe>Follow</StyledButtonSubscribe>
    </Box>
  );
};
