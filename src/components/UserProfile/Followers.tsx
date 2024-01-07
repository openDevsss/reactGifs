import { configModalName } from "../../constant/modal";
import { useModal } from "../../hooks/useModal";
import type { Followers } from "../../types/Followers";
import { UserList } from "../UserList/UserList";
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
  const { modals, toggleModal } = useModal();
  return (
    <FollowersWrapper>
      <FollowersTitle>Followers</FollowersTitle>
      {Boolean(followers?.length) ? (
        <FollowersList>
          {followers.map((follow) => (
            <FollowersItem
              onClick={() => toggleModal(configModalName.followers)}
              key={follow.follower.id}
            >
              <FollowersAvatar src={follow?.follower.avatar} />
              <FollowersNickname>{follow?.follower.nickname}</FollowersNickname>
            </FollowersItem>
          ))}
          {Boolean(modals[configModalName.followers]) && (
            <UserList
              open={modals[configModalName.followers]}
              onClose={() => toggleModal(configModalName.followers)}
              users={followers.map((follow) => follow?.follower)}
            />
          )}
        </FollowersList>
      ) : (
        <FollowersEmptyMessage>
          No followers yet. Start connecting with others!
        </FollowersEmptyMessage>
      )}
    </FollowersWrapper>
  );
}
