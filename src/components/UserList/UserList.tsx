import { useCurrentUser } from "../../hooks/useCurrentUser";
import { CustomModal } from "../Custom/CustomModal";
import { UserListItem } from "./UserListItem";

export interface TypeForUsers {
  id: string;
  nickname: string;
  avatar: string;
}
interface UserListProps {
  users: TypeForUsers[];
  open: boolean;
  onClose: (modalKey: string) => void;
}

export const UserList = ({ users, open, onClose }: UserListProps) => {
  const { following } = useCurrentUser();

  return (
    <CustomModal open={open} onClose={onClose}>
      <div>
        {users.map((user) => (
          <UserListItem key={user.id} user={user} following={following} />
        ))}
      </div>
    </CustomModal>
  );
};
