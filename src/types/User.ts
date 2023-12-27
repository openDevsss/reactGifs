export type User = {
  avatar: string;
  isSuccess: boolean;
  id: string;
  nickname: string;
  email: string;
  token: string;
  createdAt: string;
  following: User[];
  followers: User[];
};
