import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  List,
  Typography,
} from "@mui/material";
import { PaperPlaneRight, ShareFat } from "@phosphor-icons/react";
import {
  Chat,
  DotsThreeOutlineVertical,
  Eye,
  HeartStraight,
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
import { CreateCommentT, createComment, toogleLikeState } from "./service";
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
  StyledWrapperIconGif,
} from "./style";
import { useAppSelector } from "../../redux-toolkit";
import { selectCurrentUser } from "../../features/users/users-selectors";

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
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const currentUser = useAppSelector(selectCurrentUser);
  const gifIsLiked = likes?.some((like) => like.user.id === currentUser?.id);
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
    <GifForm onSubmit={handleSubmit(onSubmit)}>
      <Box width="60%">
        <GifAnimation src={url} alt={title} />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding="10px"
        >
          <Box display="flex" alignItems="center" gap="25px">
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
            <StyledWrapperIconGif>
              <Chat size="24" weight="thin" cursor="pointer" />
            </StyledWrapperIconGif>
          </Box>
          <Box display="flex" alignItems="center" gap="10px">
            <Eye size={20} weight="thin" />
            <Typography>{likes?.length}</Typography>
          </Box>
        </Box>
      </Box>

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
