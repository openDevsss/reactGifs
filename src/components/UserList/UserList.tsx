import { User } from "../../types/User";
import { CustomModal } from "../Custom/CustomModal";
import { UserListItem } from "./UserListItem";

interface UserListProps {
  users: User[];
  open: boolean;
  onClose: () => void;
}

export const UserList = ({ users, open, onClose }: UserListProps) => {
  return (
    <CustomModal open={open} onClose={onClose}>
      <div>
        {users.map((user) => (
          <UserListItem key={user.id} user={user} />
        ))}
      </div>
    </CustomModal>
  );
};
