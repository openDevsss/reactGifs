type Following = {
  following: User;
};
type Followers = {
  followers: User;
};
export type User = {
  avatar: string;
  isSuccess: boolean;
  id: string;
  nickname: string;
  email: string;
  token: string;
  createdAt: string;
  following: Following[];
  followers: Followers[];
};
