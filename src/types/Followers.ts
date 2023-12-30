export type Followers = {
  followeeId: string;
  follower: {
    id: string;
    nickname: string;
    avatar: string;
  };
  followerId: string;
};
