import { Box } from "@mui/material";
import { User } from "../../types/User";
import { StyledButtonSubscribe, UserAvatar, UserNicknameText } from "./style";

interface UserListItemProps {
  user: User;
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
