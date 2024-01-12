/* eslint-disable indent */
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import {
  Chat,
  DotsThreeOutlineVertical,
  Eye,
  LinkSimple,
  ShareFat,
  ShareNetwork,
} from "@phosphor-icons/react";
import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import { useActionWithGifs } from "hooks/useActionWithGifs";
import { useModal } from "hooks/useModal";
import type { Gif } from "types";
import { configModalName } from "constant";

import { LikeTooltip } from "../LikeTooltip/LikeTooltip";
import { Comments } from "../Comments/Comments";
import { UserList } from "../UserList/UserList";
import { GifMenuAction } from "./GifMenuAction";
import {
  ContainerGif,
  GifAnimation,
  GifDescription,
  GifHeadInformation,
  GifItemTitle,
  GifItemWrapper,
  GifMenuItem,
  GifUserAvatar,
  GifUserInformation,
  GifUserNickname,
  StyledWrapperIconGif,
} from "./style";

type GifItemsProps = Gif;

export function GifItem({
  title,
  description,
  url,
  user,
  comment,
  id: gifId,
  viewers,
  likes,
}: GifItemsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { setIsCommentsOpen, navigate, isCommentsOpen } = useActionWithGifs();
  const { modals, toggleModal } = useModal();
  const handleClose = useCallback(() => {
    setAnchorEl(null);
    setIsOpen(false);
  }, []);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };
  const location = useLocation();
  const handleNavigateToDetails = (gifId: string) => {
    if (location.pathname !== `/gif/${gifId}`) navigate(`/gif/${gifId}`);
  };
  const isWideScreen = useMediaQuery("(min-width:1200px)");
  return (
    <GifItemWrapper isCommentsOpen={isCommentsOpen}>
      <Box maxWidth="600px" width="100%">
        {!isCommentsOpen && (
          <Box
            justifyContent="space-between"
            mb="10px"
            display="flex"
            alignItems="center"
          >
            <Box display="flex" gap="15px">
              <GifUserAvatar src={user?.avatar} />
              <GifItemTitle>{title}</GifItemTitle>
            </Box>
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
        )}
        <GifAnimation
          src={url}
          alt={title}
          onClick={() => handleNavigateToDetails(gifId)}
        />
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
                open={Boolean(modals[configModalName.likes])}
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
      </Box>
      {isCommentsOpen && (
        <ContainerGif>
          <>
            <div>
              {Boolean(isWideScreen) && (
                <GifHeadInformation>
                  <GifUserInformation>
                    <GifUserAvatar src={user.avatar} />
                    <GifUserNickname>{user.nickname}</GifUserNickname>
                  </GifUserInformation>
                  <GifMenuItem>
                    <IconButton>
                      <ShareNetwork
                        size={17}
                        weight="fill"
                        color="#6F4FF2"
                        cursor="pointer"
                      />
                    </IconButton>
                    <IconButton>
                      <LinkSimple
                        size={17}
                        weight="bold"
                        color="#6F4FF2"
                        cursor="pointer"
                      />
                    </IconButton>
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
                  </GifMenuItem>
                </GifHeadInformation>
              )}

              <GifDescription>{description}</GifDescription>
            </div>
            <Comments
              isCommentsOpen={isCommentsOpen}
              comments={comment}
              gifId={gifId}
            />
          </>
        </ContainerGif>
      )}
    </GifItemWrapper>
  );
}
