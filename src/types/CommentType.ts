import { User } from "./UserType";

export type Comment = {
  id: string;
  comment_text: string;
  user: User;
};
