import { User } from "../../types/User";
import { UserListItem } from "../UserList/UserListItem";

interface FollowersAndFollowingProps {
  followers: User[];
  following: User[];
  type: string;
}

export const FollowersAndFollowing = ({
  followers,
  following,
  type,
}: FollowersAndFollowingProps) => {
  console.log(following);
  return (
    <div>
      {type === "followers" ? (
        <div>
          <h2>Followers</h2>
          <ul>
            {Boolean(followers?.length > 0) &&
              followers.map((follower) => <UserListItem user={follower} />)}
          </ul>
        </div>
      ) : (
        <div>
          <h2>Following</h2>
          <ul>
            {Boolean(following?.length > 0) &&
              following.map((follower) => <UserListItem user={follower} />)}
          </ul>
        </div>
      )}
    </div>
  );
};
