import { Divider, IconButton, InputAdornment, List } from "@mui/material";
import { PaperPlaneRight } from "@phosphor-icons/react";
import {
  DotsThreeOutlineVertical,
  LinkSimple,
  ShareNetwork,
} from "phosphor-react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import type { Gif } from "../../types/Gif";
import { ErrorMessage } from "../SettingsGif/style";
import { GifComment } from "./GifComment";
import { GifMenuAction } from "./GifMenuAction";
import { CreateCommentT, createComment } from "./service";
import {
  CommentsContainer,
  CommentsTitle,
  ContainerGif,
  GifAnimation,
  GifCommentsList,
  GifDescription,
  GifForm,
  GifHeadInformation,
  GifInput,
  GifMenuItem,
  GifUserAvatar,
  GifUserInformation,
  GifUserNickname,
  ListStyle,
} from "./style";

interface GifItemsProps extends Gif {}

export function GifItem({
  title,
  description,
  url,
  user,
  comment,
  id: gifId,
}: GifItemsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (newComment: CreateCommentT) => createComment(newComment),
    {
      onSuccess: () => queryClient.invalidateQueries(["gifs"]),
    }
  );
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<CreateCommentT>();
  const onSubmit: SubmitHandler<CreateCommentT> = (data, event) => {
    data.gifId = gifId;
    mutation.mutate(data);
    event?.target.reset();
  };
  return (
    <GifForm onSubmit={handleSubmit(onSubmit)}>
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
                authorId={user?.id}
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
          <List sx={ListStyle}>
            {comment.length > 0 ? (
              comment.map((message, index) => {
                return (
                  <>
                    <GifComment
                      key={message.id}
                      comment_text={message.comment_text}
                      user={message.user}
                    />
                    {index !== comment.length - 1 && (
                      <Divider variant="middle" />
                    )}
                  </>
                );
              })
            ) : (
              <GifCommentsList>There is no comments</GifCommentsList>
            )}
          </List>
          <GifInput
            {...register("comment_text", {
              maxLength: {
                value: 100,
                message: "Max length 100 symbols",
              },
              required: {
                value: true,
                message: "You can't levae empty comment",
              },
            })}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  sx={{
                    cursor: "pointer",
                  }}
                  position="end"
                >
                  <IconButton type="submit">
                    <PaperPlaneRight size={25} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            placeholder="Add a comment"
            size="small"
          />
          {errors.comment_text && (
            <ErrorMessage>{errors.comment_text.message}</ErrorMessage>
          )}
        </CommentsContainer>
      </ContainerGif>
    </GifForm>
  );
}
