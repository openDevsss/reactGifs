/* eslint-disable indent */
import { Box, Tooltip, Typography } from "@mui/material";
import { HeartStraight } from "@phosphor-icons/react";
import { modalName } from "../../constant/modal";
import { useActionWithGifs } from "../../hooks/useActionWithGifs";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { Like } from "../../types/Like";
import { GifUserAvatar, StyledWrapperIconHeart } from "../GifItem/style";
interface LikeTooltipProp {
  likes: Like[];
  gifId: string;
  setIsOpenUserList: (modalKey: string) => void;
}
export function LikeTooltip({
  likes,
  gifId,
  setIsOpenUserList,
}: LikeTooltipProp) {
  const currentUser = useCurrentUser();
  const { handleToggleLike } = useActionWithGifs();
  const gifIsLiked = likes?.some((like) => like?.user.id === currentUser?.id);

  return (
    <Tooltip
      placement="top"
      title={
        <Box overflow="hidden" display="flex" gap="10px" maxWidth="170px">
          {likes?.length
            ? likes.map(({ user }) => (
                <GifUserAvatar
                  onClick={() => setIsOpenUserList(modalName.likes)}
                  key={user.id}
                  src={user.avatar}
                  alt={user.nickname}
                />
              ))
            : "Лайки пользователей"}
        </Box>
      }
      componentsProps={{
        tooltip: {
          sx: {
            color: "white",
            bgcolor: "rgba(0, 0, 0, 0.8)",
            padding: "10px",
            borderRadius: "10px",
            opacity: 0.3,
            display: "flex",
          },
        },
      }}
    >
      <StyledWrapperIconHeart isLiked={Boolean(likes?.length)}>
        {gifIsLiked ? (
          <HeartStraight
            size="24"
            color="#e05151"
            weight="fill"
            cursor="pointer"
            onClick={() => handleToggleLike(gifId)}
          />
        ) : (
          <HeartStraight
            size="24"
            weight="thin"
            cursor="pointer"
            onClick={() => handleToggleLike(gifId)}
          />
        )}
        {Boolean(likes?.length) && <Typography>{likes?.length}</Typography>}
      </StyledWrapperIconHeart>
    </Tooltip>
  );
}
