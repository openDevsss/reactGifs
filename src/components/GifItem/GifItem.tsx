import { Box, IconButton, Typography } from "@mui/material";
import { ShareFat } from "@phosphor-icons/react";
import {
  Chat,
  DotsThreeOutlineVertical,
  Eye,
  HeartStraight,
  LinkSimple,
  ShareNetwork,
} from "phosphor-react";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { selectCurrentUser } from "../../features/users/users-selectors";
import { useAppSelector } from "../../redux-toolkit";
import type { Gif } from "../../types/Gif";
import { Comments } from "../Comments/Comments";
import { GifMenuAction } from "./GifMenuAction";
import { toogleLikeState } from "./service";
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

interface GifItemsProps extends Gif {}

export function GifItem({
  title,
  description,
  url,
  user,
  comment,
  id: gifId,
  likes,
}: GifItemsProps) {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const currentUser = useAppSelector(selectCurrentUser);
  const gifIsLiked = likes?.some((like) => like.user.id === currentUser?.id);
  const queryClient = useQueryClient();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };
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
    <GifItemWrapper
      style={{ width: isCommentsOpen ? "1100px" : "fit-content" }}
    >
      <Box maxWidth="600px" width="100%">
        {!isCommentsOpen && (
          <Box
            justifyContent="space-between"
            mb="10px"
            display="flex"
            alignItems="center"
          >
            <Box display="flex">
              <GifUserAvatar src={user.avatar} />
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
        <GifAnimation src={url} alt={title} />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding="10px"
        >
          <Box maxWidth="600px" display="flex" alignItems="center" gap="25px">
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
            <Typography>{likes?.length}</Typography>
          </Box>
        </Box>
      </Box>
      {isCommentsOpen ? (
        <ContainerGif>
          <>
            <div>
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
              <GifDescription>{description}</GifDescription>
            </div>
            <Comments
              isCommentsOpen={isCommentsOpen}
              comment={comment}
              gifId={gifId}
            />
          </>
        </ContainerGif>
      ) : null}
    </GifItemWrapper>
  );
}
