import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { gifsKeys } from "utils/gifs-query-key";

import {
  CreateCommentT,
  createComment,
  toogleLikeState,
} from "../components/GifItem/service";

export function useActionWithGifs() {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: handleToggleLikeGif } = useMutation(
    (gifId: string) => toogleLikeState({ gifId }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(gifsKeys.all);
      },
    },
  );
  const { mutate: handleCreateComment } = useMutation(
    (newComment: CreateCommentT) => createComment(newComment),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(gifsKeys.all);
      },
    },
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCommentT>();

  return {
    handleToggleLikeGif,
    handleCreateComment,
    register,
    handleSubmit,
    errors,
    isCommentsOpen,
    setIsCommentsOpen,
    navigate,
  };
}
