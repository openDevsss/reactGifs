import { useActionWithGifs } from "../../hooks/useActionWithGifs";
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
  const { isOpenUserList, handleClose, setIsOpenUserList } =
    useActionWithGifs();
  return (
    <FollowersWrapper>
      <FollowersTitle>Followers</FollowersTitle>
      {Boolean(followers) ? (
        <FollowersList>
          {followers.map((follow) => (
            <FollowersItem
              onClick={() => setIsOpenUserList(true)}
              key={follow.follower.id}
            >
              <FollowersAvatar src={follow?.follower.avatar} />
              <FollowersNickname>{follow?.follower.nickname}</FollowersNickname>
            </FollowersItem>
          ))}
          {isOpenUserList && (
            <UserList
              open={isOpenUserList}
              onClose={handleClose}
              users={followers.map((follow) => follow.follower)}
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
