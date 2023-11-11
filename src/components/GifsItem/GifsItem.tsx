import React, { useState } from "react";
import {
  CommentsContainer,
  CommentsTitle,
  ContainerGif,
  GifAnimation,
  GifHeadInformation,
  GifUserInportmation,
  GifUserAvatar,
  GifUserNickname,
  GifMenuItem,
  GifDescription,
  GifComment,
  GifInput,
  GifWrapper,
} from "./styled";
import { IconButton } from "@mui/material";
import {
  LinkSimple,
  ShareNetwork,
  DotsThreeOutlineVertical,
} from "phosphor-react";
import GifMenuAction from "./GifMenuAction";
import { Gif } from "../../types/GifType";

interface GifItemsProps extends Gif {}

export function GifItem({ title, description, url, user }: GifItemsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  console.log(anchorEl);
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
            <GifUserInportmation>
              <GifUserAvatar src={user.avatar} />
              <GifUserNickname>{user.nickname}</GifUserNickname>
            </GifUserInportmation>
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
          <GifComment>No comments:😞</GifComment>
          <GifInput placeholder="Add a comment" size="small" />
        </CommentsContainer>
      </ContainerGif>
    </GifWrapper>
  );
}
