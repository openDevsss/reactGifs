import type { Followers } from "../../types/Followers";
import {
  FollowersAvatar,
  FollowersEmptyMessage,
  FollowersItem,
  FollowersList,
  FollowersNickname,
  FollowersTitle,
  FollowersWrapper,
} from "./style";
interface FollowersProps {
  followers: Followers[];
}
export default function Followers({ followers }: FollowersProps) {
  return (
    <FollowersWrapper>
      <FollowersTitle>Followers</FollowersTitle>
      {Boolean(followers) ? (
        <FollowersList>
          {followers.map((follow) => (
            <FollowersItem key={follow.follower.id}>
              <FollowersAvatar src={follow?.follower.avatar} />
              <FollowersNickname>{follow?.follower.nickname}</FollowersNickname>
            </FollowersItem>
          ))}
        </FollowersList>
      ) : (
        <FollowersEmptyMessage>
          No followers yet. Start connecting with others!
        </FollowersEmptyMessage>
      )}
    </FollowersWrapper>
  );
}
