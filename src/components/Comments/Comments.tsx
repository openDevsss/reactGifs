import { Divider, IconButton, InputAdornment, List } from "@mui/material";
import { PaperPlaneRight } from "@phosphor-icons/react";
import { useActionWithGifs } from "@hooks/useActionWithGifs";
import React from "react";
import { SubmitHandler } from "react-hook-form";

import { CreateCommentT } from "../GifItem/service";
import { GifComment } from "./GifComment";
import {
  CommentsContainer,
  CommentsForm,
  CommentsTitle,
  EmptyCommentsMessage,
  ErrorMessageComments,
  GifInput,
  ListStyle,
} from "./style";
import { Comment } from "types/Comment";

type CommentsPropType = {
  comments: Comment[];
  gifId: string;
  isCommentsOpen: boolean;
};

export function Comments({
  comments,
  gifId,
  isCommentsOpen,
}: CommentsPropType) {
  const { register, handleSubmit, errors, mutation } = useActionWithGifs();
  const onSubmit: SubmitHandler<CreateCommentT> = (data, event) => {
    data.gifId = gifId;
    mutation.mutate(data);
    event?.target.reset();
  };

  return (
    <CommentsForm
      isCommentsOpen={isCommentsOpen}
      onSubmit={handleSubmit(onSubmit)}
    >
      <CommentsContainer>
        <CommentsTitle>Comments</CommentsTitle>
        <List sx={ListStyle}>
          {comments?.length > 0 ? (
            comments.map((message, index) => {
              return (
                <React.Fragment key={index}>
                  <GifComment
                    key={message.id}
                    comment_text={message.comment_text}
                    user={message.user}
                  />
                  {index !== comments.length - 1 && <Divider component="li" />}
                </React.Fragment>
              );
            })
          ) : (
            <EmptyCommentsMessage>There's no comments </EmptyCommentsMessage>
          )}
        </List>
        <GifInput
          {...register("comment_text", {
            maxLength: {
              value: 120,
              message: "Max length 120 symbols",
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
          <ErrorMessageComments>
            {errors.comment_text.message}
          </ErrorMessageComments>
        )}
      </CommentsContainer>
    </CommentsForm>
  );
}
