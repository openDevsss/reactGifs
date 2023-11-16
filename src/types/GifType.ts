import { User } from "./UserType";

export type Gif = {
  id: string;
  title: string;
  description: string;
  url: string;
  user: User;
  createdAt: string;
  updatedAt: string;
  tags: string[];
};
