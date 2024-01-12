import { User } from "types";

export type Comment = {
  id: string;
  comment_text: string;
  user: User;
};
