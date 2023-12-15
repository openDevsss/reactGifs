import { User } from "./User";

export type Comment = {
  id: string;
  comment_text: string;
  user: User;
};
