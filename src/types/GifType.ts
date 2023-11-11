import { UserType } from "./UserType";

export type Gif = {
  id: string;
  title: string;
  description: string;
  url: string;
  user: UserType;
  createdAt: string;
  updatedAt: string;
};
