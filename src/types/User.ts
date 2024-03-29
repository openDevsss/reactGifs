import { Followers } from "./Followers";
import { Gif } from "./Gif";

export type User = {
  avatar: string;
  isSuccess: boolean;
  id: string;
  nickname: string;
  email: string;
  token: string;
  createdAt: string;
  gifs: Gif[];
  following: Followers[];
  followers: Followers[];
};
