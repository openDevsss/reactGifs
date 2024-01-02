import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  Chat,
  DotsThreeOutlineVertical,
  Eye,
  ShareFat,
} from "@phosphor-icons/react";
import { useActionWithGifs } from "../../hooks/useActionWithGifs";
import { Gif } from "../../types/Gif";
import { Comments } from "../Comments/Comments";
import { GifMenuAction } from "../GifItem/GifMenuAction";
import { StyledWrapperIconGif } from "../GifItem/style";
import { LikeTooltip } from "../LikeTooltip/LikeTooltip";
import { UserList } from "../UserList/UserList";
import {
  UserGif,
  UserGifDescription,
  UserGifItemWrapper,
  UserGifTitle,
} from "./style";

export function UserProfileGifs({
  title,
  description,
  url,
  user,
  comment,
  id: gifId,
  viewers,
  likes,
}: Gif) {
  const {
    anchorEl,
    setIsOpenUserList,
    isOpenUserList,
    handleClick,
    handleClose,
    setIsCommentsOpen,
    isCommentsOpen,
    isOpen,
  } = useActionWithGifs();

  return (
    <UserGifItemWrapper>
      <Box
        justifyContent="space-between"
        mb="10px"
        display="flex"
        alignItems="center"
      >
        <UserGifTitle>{title}</UserGifTitle>
        <IconButton onClick={handleClick}>
          <DotsThreeOutlineVertical
            size={17}
            color="#6F4FF2"
            weight="fill"
            cursor="pointer"
          />
        </IconButton>
        <GifMenuAction
          gifId={gifId}
          authorId={user?.id}
          anchorEl={anchorEl}
          handleClose={handleClose}
          isOpen={isOpen}
        />
      </Box>
      <UserGif src={url} alt={title} />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="10px"
      >
        <Box maxWidth="600px" display="flex" alignItems="center" gap="25px">
          <LikeTooltip
            gifId={gifId}
            setIsOpenUserList={setIsOpenUserList}
            likes={likes}
          />
          {isOpenUserList && (
            <UserList
              open={isOpenUserList}
              onClose={handleClose}
              users={likes?.map(({ user }) => user)}
            />
          )}

          <StyledWrapperIconGif
            onClick={() => setIsCommentsOpen(!isCommentsOpen)}
          >
            <Chat size="24" weight="thin" cursor="pointer" />
          </StyledWrapperIconGif>
          <StyledWrapperIconGif>
            <ShareFat size="24" weight="thin" cursor="pointer" />
          </StyledWrapperIconGif>
        </Box>
        <Box display="flex" alignItems="center" gap="10px">
          <Eye size={20} weight="thin" />
          <Typography>{viewers}</Typography>
        </Box>
      </Box>
      {isCommentsOpen && <UserGifDescription>{description}</UserGifDescription>}
      <Comments
        comments={comment}
        gifId={gifId}
        isCommentsOpen={isCommentsOpen}
      />
    </UserGifItemWrapper>
  );
}
