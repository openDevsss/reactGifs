import { IconButton, List } from "@mui/material";
import {
  DotsThreeOutlineVertical,
  LinkSimple,
  ShareNetwork,
} from "phosphor-react";
import React, { useState } from "react";
import type { Gif } from "../../types/GifType";
import GifComment from "./GifComment";
import { GifMenuAction } from "./GifMenuAction";
import {
  CommentsContainer,
  CommentsTitle,
  ContainerGif,
  GifAnimation,
  GifDescription,
  GifHeadInformation,
  GifInput,
  GifMenuItem,
  GifUserAvatar,
  GifUserInformation,
  GifUserNickname,
  GifWrapper,
} from "./styled";

interface GifItemsProps extends Gif {}

export function GifItem({
  title,
  description,
  url,
  user,
  comment,
}: GifItemsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  return (
    <GifWrapper>
      <GifAnimation src={url} alt={title} />
      <ContainerGif>
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
                authorId={user.id}
                anchorEl={anchorEl}
                handleClose={handleClose}
                isOpen={isOpen}
              />
            </GifMenuItem>
          </GifHeadInformation>
          <GifDescription>{description}</GifDescription>
        </div>
        <CommentsContainer>
          <CommentsTitle>Comments</CommentsTitle>
          <List
            sx={{
              width: "100%",
              maxWidth: "95%",
              bgcolor: "background.paper",
              position: "relative",
              overflow: "auto",
              maxHeight: 300,
            }}
          >
            {comment.map((message) => {
              return (
                <GifComment
                  key={message.id}
                  comment_text={message.comment_text}
                  user={message.user}
                />
              );
            })}
            <GifInput placeholder="Add a comment" size="small" />
          </List>
        </CommentsContainer>
      </ContainerGif>
    </GifWrapper>
  );
}
