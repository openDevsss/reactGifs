import { Divider, IconButton, InputAdornment, List } from "@mui/material";
import { PaperPlaneRight } from "@phosphor-icons/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import type { Comment } from "../../types/Comment";
import { CreateCommentT, createComment } from "../GifItem/service";
import { GifComment } from "./GifComment";
import {
  CommentsContainer,
  CommentsTitle,
  EmptyCommentsMessage,
  ErrorMessageComments,
  GifInput,
  ListStyle,
} from "./style";
type CommentsPropType = {
  comment: Comment[];
  gifId: string;
  isCommentsOpen: boolean;
};
export function Comments({ comment, gifId, isCommentsOpen }: CommentsPropType) {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (newComment: CreateCommentT) => createComment(newComment),
    {
      onSuccess: () => queryClient.invalidateQueries(["gifs"]),
    }
  );
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<CreateCommentT>();
  const onSubmit: SubmitHandler<CreateCommentT> = (data, event) => {
    data.gifId = gifId;
    console.log(data);
    mutation.mutate(data);
    event?.target.reset();
  };

  return (
    <form
      style={{ display: isCommentsOpen ? "block" : "none" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <CommentsContainer>
        <CommentsTitle>Comments</CommentsTitle>
        <List sx={ListStyle}>
          {comment.length > 0 ? (
            comment.map((message, index) => {
              return (
                <React.Fragment key={index}>
                  <GifComment
                    key={message.id}
                    comment_text={message.comment_text}
                    user={message.user}
                  />
                  {index !== comment.length - 1 && <Divider variant="middle" />}
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
          <ErrorMessageComments>
            {errors.comment_text.message}
          </ErrorMessageComments>
        )}
      </CommentsContainer>
    </form>
  );
}