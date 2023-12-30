/* eslint-disable indent */
import { Box, IconButton, Typography } from "@mui/material";
import {
  Chat,
  DotsThreeOutlineVertical,
  Eye,
  LinkSimple, ShareFat, ShareNetwork
} from "@phosphor-icons/react";
import { useActionWithGifs } from "../../hooks/useActionWithGifs";
import LikeTooltip from "../LikeTooltip/LikeTooltip";

import type { Gif } from "../../types/Gif";
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
  const {
    isCommentsOpen,
    setIsCommentsOpen,
    isOpen,
    anchorEl,
    setIsOpenUserList,
    isOpenUserList,
    handleClick,
    handleClose,
    navigate,
  } = useActionWithGifs();

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
           <LikeTooltip
              gifId={gifId}
              setIsOpenUserList={setIsOpenUserList}
              likes={likes}
            />
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
