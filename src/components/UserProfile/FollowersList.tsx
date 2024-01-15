import { configModalName } from "constant";
import { useModal } from "hooks/useModal";
import type { Followers } from "types";

import { UserList } from "../UserList/UserList";
import {
  FollowersAvatar,
  FollowersEmptyMessage,
  FollowersItem,
  FollowersNickname,
  FollowersTitle,
  FollowersWrapper,
  StyledFollowersList,
} from "./style";
interface FollowersProps {
  followers: Followers[];
}
export function FollowersList({ followers }: FollowersProps) {
  const { modals, toggleModal } = useModal();

  return (
    <FollowersWrapper>
      <FollowersTitle>Followers</FollowersTitle>
      {Boolean(followers?.length) ? (
        <StyledFollowersList>
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
              open={Boolean(modals[configModalName.followers])}
              onClose={() => toggleModal(configModalName.followers)}
              users={followers.map((follow) => follow?.follower)}
            />
          )}
        </StyledFollowersList>
      ) : (
        <FollowersEmptyMessage>
          No followers yet. Start connecting with others!
        </FollowersEmptyMessage>
      )}
    </FollowersWrapper>
  );
}
