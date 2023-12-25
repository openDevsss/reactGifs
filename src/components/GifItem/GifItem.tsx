import { Box, IconButton, Tooltip, Typography } from "@mui/material";
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
import { useNavigate } from "react-router-dom";
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
import { UserList } from "../UserList/UserList";

interface GifItemsProps extends Gif {}

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
  console.log(comment);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUserList, setIsOpenUserList] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const currentUser = useAppSelector(selectCurrentUser);
  const gifIsLiked = likes?.some((like) => like.user.id === currentUser?.id);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
    setIsOpenUserList(false);
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
            <Box display="flex" gap="15px">
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
        <GifAnimation
          src={url}
          alt={title}
          onClick={() => navigate(`/gif/${gifId}`)}
        />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding="10px"
        >
          <Box maxWidth="600px" display="flex" alignItems="center" gap="25px">
            <Tooltip
              placement="top"
              title={
                <Box
                  overflow="hidden"
                  display="flex"
                  gap="10px"
                  maxWidth="170px"
                >
                  {Boolean(likes?.length)
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
            {isOpenUserList && (
              <UserList
                open={isOpenUserList}
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
      </Box>
      {isCommentsOpen && (
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
              comments={comment}
              gifId={gifId}
            />
          </>
        </ContainerGif>
      )}
    </GifItemWrapper>
  );
}
