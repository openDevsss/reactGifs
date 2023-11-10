import React, { useState } from 'react';
import {
  AddCommentInputGifs,
  AvatarUserGifs,
  ButtonsGifs,
  CommentsContainer,
  CommentsTitle,
  ContainerGifs,
  DescriptionUserGifs,
  GifAnimationsGifs,
  InfoUserGifs,
  NicknameUserGifs,
  WrapperForButtonsAndProfile,
  WrapperGifs,
} from './styled';
import { IconButton } from '@mui/material';
import { LinkSimple, ShareNetwork, DotsThreeOutlineVertical } from 'phosphor-react';
import GifMenuAction from './GifMenuAction';

/* interface GifsItemsProps extends Gif {} */

export function GifsItem(/* { id, title, description, url }: GifsItemsProps */) {
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
    <>
      <WrapperGifs>
        <GifAnimationsGifs src="https://www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif" />
        <ContainerGifs>
          <div>
            <WrapperForButtonsAndProfile>
              <InfoUserGifs>
                <AvatarUserGifs src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" />
                <NicknameUserGifs>Alex</NicknameUserGifs>
              </InfoUserGifs>
              <ButtonsGifs>
                <IconButton>
                  <ShareNetwork size={17} weight="fill" color="#6F4FF2" cursor="pointer" />
                </IconButton>
                <IconButton>
                  <LinkSimple size={17} weight="bold" color="#6F4FF2" cursor="pointer" />
                </IconButton>
                <IconButton onClick={handleClick}>
                  <DotsThreeOutlineVertical
                    size={17}
                    weight="fill"
                    color="#6F4FF2"
                    cursor="pointer"
                  />
                </IconButton>
                <GifMenuAction anchorEl={anchorEl} handleClose={handleClose} isOpen={isOpen} />
              </ButtonsGifs>
            </WrapperForButtonsAndProfile>
            <DescriptionUserGifs>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptate dolore dolores.
              Omnis animi facilis quia nemo odit odio fugit quidem esse aperiam, obcaecati quos
              temporibus fugiat libero. Ipsum, enim.
            </DescriptionUserGifs>
          </div>
          <CommentsContainer>
            <CommentsTitle>Comments</CommentsTitle>
            <DescriptionUserGifs>No comments:😞</DescriptionUserGifs>
            <AddCommentInputGifs placeholder="Add a comment" size="small" />
          </CommentsContainer>
        </ContainerGifs>
      </WrapperGifs>
      <WrapperGifs>
        <GifAnimationsGifs src="https://gifsec.com/wp-content/uploads/2022/09/congrats-gif-1.gif" />
        <ContainerGifs>
          <div>
            <WrapperForButtonsAndProfile>
              <InfoUserGifs>
                <AvatarUserGifs src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" />
                <NicknameUserGifs>Alex</NicknameUserGifs>
              </InfoUserGifs>
              <ButtonsGifs>
                <IconButton>
                  <ShareNetwork size={17} weight="fill" color="#6F4FF2" cursor="pointer" />
                </IconButton>
                <IconButton>
                  <LinkSimple size={17} weight="bold" color="#6F4FF2" cursor="pointer" />
                </IconButton>
                <IconButton onClick={handleClick}>
                  <DotsThreeOutlineVertical
                    size={17}
                    weight="fill"
                    color="#6F4FF2"
                    cursor="pointer"
                  />
                </IconButton>
                <GifMenuAction anchorEl={anchorEl} handleClose={handleClose} isOpen={isOpen} />
              </ButtonsGifs>
            </WrapperForButtonsAndProfile>
            <DescriptionUserGifs>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptate dolore dolores.
              Omnis animi
            </DescriptionUserGifs>
          </div>
          <CommentsContainer>
            <CommentsTitle>Comments</CommentsTitle>
            <DescriptionUserGifs>No comments:😞</DescriptionUserGifs>
            <AddCommentInputGifs placeholder="Add a comment" size="small" />
          </CommentsContainer>
        </ContainerGifs>
      </WrapperGifs>
    </>
  );
}
