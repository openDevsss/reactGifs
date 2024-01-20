import { User } from "types/User";

export type Comment = {
  id: string;
  comment_text: string;
  user: User;
};
