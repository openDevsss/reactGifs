import React from "react";
import {
  AddCommentInputHome,
  AvatarUserHome,
  ButtonsHome,
  CommentsContainer,
  CommentsTitle,
  ContainerHome,
  DescriptionUserHome,
  GifAnimationsHome,
  InfoUserHome,
  NicknameUserHome,
  WrapperForButtonsAndProfile,
  WrapperHome,
} from "./styled";
import { IconButton } from "@mui/material";
import { LinkSimple, ShareNetwork } from "phosphor-react";
import { KebabMenu } from "../GifsList/KebabMenu";
import { Gif } from "../../types/GifType";

interface GifsItemsProps extends Gif {}

export function GifsItem(/* { id, title, description, url }: GifsItemsProps */) {
  return (
    <>
      <WrapperHome>
        <GifAnimationsHome src="https://www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif" />
        <ContainerHome>
          <div>
            <WrapperForButtonsAndProfile>
              <InfoUserHome>
                <AvatarUserHome src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" />
                <NicknameUserHome>Alex</NicknameUserHome>
              </InfoUserHome>
              <ButtonsHome>
                <IconButton>
                  <ShareNetwork
                    size={17}
                    weight="fill"
                    color="#6F4FF2"
                    cursor={"pointer"}
                  />
                </IconButton>
                <IconButton>
                  <LinkSimple
                    size={17}
                    weight="bold"
                    color="#6F4FF2"
                    cursor={
                      "pointer"
                    } /* не получилось написать их в styled.ts (не реагировали) */
                  />
                </IconButton>
                <KebabMenu />
              </ButtonsHome>
            </WrapperForButtonsAndProfile>
            <DescriptionUserHome>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              voluptate dolore dolores. Omnis animi facilis quia nemo odit odio
              fugit quidem esse aperiam, obcaecati quos temporibus fugiat
              libero. Ipsum, enim.
            </DescriptionUserHome>
          </div>
          <CommentsContainer>
            <CommentsTitle>Comments</CommentsTitle>
            <DescriptionUserHome>No comments:(</DescriptionUserHome>
            <AddCommentInputHome placeholder="Add a comment" size="small" />
          </CommentsContainer>
        </ContainerHome>
      </WrapperHome>
      <WrapperHome>
        <GifAnimationsHome src="https://gifsec.com/wp-content/uploads/2022/09/congrats-gif-1.gif" />
        <ContainerHome>
          <div>
            <WrapperForButtonsAndProfile>
              <InfoUserHome>
                <AvatarUserHome src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" />
                <NicknameUserHome>Alex</NicknameUserHome>
              </InfoUserHome>
              <ButtonsHome>
                <IconButton>
                  <ShareNetwork
                    size={17}
                    weight="fill"
                    color="#6F4FF2"
                    cursor={"pointer"}
                  />
                </IconButton>
                <IconButton>
                  <LinkSimple
                    size={17}
                    weight="bold"
                    color="#6F4FF2"
                    cursor={
                      "pointer"
                    } /* не получилось написать их в styled.ts (не реагировали) */
                  />
                </IconButton>
                <KebabMenu />
              </ButtonsHome>
            </WrapperForButtonsAndProfile>
            <DescriptionUserHome>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              voluptate dolore dolores. Omnis animi
            </DescriptionUserHome>
          </div>
          <CommentsContainer>
            <CommentsTitle>Comments</CommentsTitle>
            <DescriptionUserHome>No comments:(</DescriptionUserHome>
            <AddCommentInputHome placeholder="Add a comment" size="small" />
          </CommentsContainer>
        </ContainerHome>
      </WrapperHome>
    </>
  );
}
