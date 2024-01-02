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
  return (
    <div>
      {type === "followers" ? (
        <div>
          <h2>Followers</h2>
          <ul>
            {Boolean(followers?.length > 0) &&
              followers.map((follower) => (
                <UserListItem key={follower.id} user={follower} />
              ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2>Following</h2>
          <ul>
            {Boolean(following?.length > 0) &&
              following.map((followee) => (
                <UserListItem key={followee.id} user={followee} />
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
