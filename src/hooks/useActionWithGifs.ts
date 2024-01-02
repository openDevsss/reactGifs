import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { CreateCommentT, toogleLikeState } from "../components/GifItem/service";

export function useActionWithGifs() {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUserList, setIsOpenUserList] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<CreateCommentT>();

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
    },
  );
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
    setIsOpenUserList(false);
  };

  return {
    handleToggleLike,
    register,
    handleSubmit,
    errors,
    isCommentsOpen,
    setIsCommentsOpen,
    isOpen,
    isOpenUserList,
    setIsOpenUserList,
    anchorEl,
    handleClick,
    handleClose,
    navigate,
  };
}
