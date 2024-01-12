import { IconButton, Typography, Box } from "@mui/material";
import {
  Chat,
  DotsThreeOutlineVertical,
  Eye,
  ShareFat,
} from "@phosphor-icons/react";
import { useState } from "react";
import { configModalName } from "constant";
import { useActionWithGifs } from "hooks/useActionWithGifs";
import { useModal } from "hooks/useModal";
import { Gif } from "types";

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
interface userProfileGifsProps extends Gif {
  userId: string;
}
export function UserProfileGifs({
  title,
  description,
  url,
  comment,
  id: gifId,
  viewers,
  likes,
  userId,
}: userProfileGifsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { setIsCommentsOpen, isCommentsOpen } = useActionWithGifs();
  const { modals, toggleModal } = useModal();
  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

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
          authorId={userId}
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
        padding="10px 0"
      >
        <Box maxWidth="600px" display="flex" alignItems="center" gap="25px">
          <LikeTooltip
            gifId={gifId}
            setIsOpenUserList={toggleModal}
            likes={likes}
          />
          {Boolean(modals[configModalName.likes]) && (
            <UserList
              open={modals[configModalName.likes]}
              onClose={() => toggleModal(configModalName.likes)}
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
