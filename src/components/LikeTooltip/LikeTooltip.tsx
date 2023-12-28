import { Box, Tooltip, Typography } from "@mui/material";
import { HeartStraight } from "phosphor-react";
import { useMutation, useQueryClient } from "react-query";
import { selectCurrentUser } from "../../features/users/users-selectors";
import { useAppSelector } from "../../redux-toolkit";
import { Like } from "../../types/Like";
import { toogleLikeState } from "../GifItem/service";
import { GifUserAvatar, StyledWrapperIconGif } from "../GifItem/style";
interface LikeTooltipProp {
  likes: Like[];
  setIsOpenUserList: (isOpen: boolean) => void;
  gifId: string;
}
export default function LikeTooltip({
  likes,
  setIsOpenUserList,
  gifId,
}: LikeTooltipProp) {
  const queryClient = useQueryClient();
  const currentUser = useAppSelector(selectCurrentUser);
  const gifIsLiked = likes?.some((like) => like?.user.id === currentUser?.id);

  // TODO: TYPE
  // @ts-ignore
  const { mutate: handleToggleLike } = useMutation(
    // @ts-ignore
    (gifId: string) => toogleLikeState({ gifId }),
    {
      onSuccess: () => {
        // TODO: ДОБАВИТЬ ОБНОВЛЕНИЕ ТОЛЬКО ОДНОЙ ГИФКИ
        queryClient.invalidateQueries(["gifs"]);
      },
      refetchOnWindowFocus: false,
    }
  );
  return (
    <Tooltip
      placement="top"
      title={
        <Box overflow="hidden" display="flex" gap="10px" maxWidth="170px">
          {likes?.length
            ? likes.map(({ user }) => (
                <GifUserAvatar
                  onClick={() => setIsOpenUserList(true)}
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
      <StyledWrapperIconGif>
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
        <Typography>{likes?.length}</Typography>
      </StyledWrapperIconGif>
    </Tooltip>
  );
}
