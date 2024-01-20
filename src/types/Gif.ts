import { Like } from "./Like";
import { Tag } from "./Tag";
import { User } from "./User";

export type Gif = {
  id: string;
  title: string;
  description: string;
  url: string;
  user: User;
  createdAt: string;
  updatedAt: string;
  tags: Tag[];
  comments: Comment[];
  viewers: number;
  likes: Like[];
};
