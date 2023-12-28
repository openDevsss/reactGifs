import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ShareFat } from "@phosphor-icons/react";
import { Chat, DotsThreeOutlineVertical, Eye } from "phosphor-react";
import { useActionWithGifs } from "../../hooks/useActionWithGifs";
import { Gif } from "../../types/Gif";
import { Comments } from "../Comments/Comments";
import { GifMenuAction } from "../GifItem/GifMenuAction";
import { StyledWrapperIconGif } from "../GifItem/style";
import LikeTooltip from "../LikeTooltip/LikeTooltip";
import { UserList } from "../UserList/UserList";
import {
  UserGif,
  UserGifDescription,
  UserGifItemWrapper,
  UserGifTitle,
} from "./style";
interface UserProfileGifs extends Gif {}
export function UserProfileGifs({
  title,
  description,
  url,
  user,
  comment,
  id: gifId,
  viewers,
  likes,
}: UserProfileGifs) {
  const {
    isCommentsOpen,
    setIsCommentsOpen,
    isOpen,
    anchorEl,
    setIsOpenUserList,
    isOpenUserList,
    handleClick,
    handleClose,
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
            weight="fill"
            color="#6F4FF2"
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
              open={true}
              onClose={handleClose}
              users={likes.map(({ user }) => user)}
            />
          )}
          <StyledWrapperIconGif>
            <ShareFat size="24" weight="thin" cursor="pointer" />
          </StyledWrapperIconGif>
          <StyledWrapperIconGif
            onClick={() => setIsCommentsOpen(!isCommentsOpen)}
          >
            <Chat size="24" weight="thin" cursor="pointer" />
          </StyledWrapperIconGif>
        </Box>
        <Box display="flex" alignItems="center" gap="10px">
          <Eye size={20} weight="thin" />
          <Typography>{viewers}</Typography>
        </Box>
      </Box>
      {isCommentsOpen && <UserGifDescription>{description}</UserGifDescription>}
      <Comments
        userId={user?.id}
        comments={comment}
        gifId={gifId}
        isCommentsOpen={isCommentsOpen}
      />
    </UserGifItemWrapper>
  );
}
