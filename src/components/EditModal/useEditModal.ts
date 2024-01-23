import { configModalName } from "constant";
import { useModal } from "@hooks/useModal";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";

import { editGif } from "./service";
import { DtoEditModal } from "./types";
import { Tag } from "types/Tag";
import { useAllTags } from "@hooks/useTags";

export const useEditModal = (
  gifTags: Tag[],
  id: string,
  handleClose: (modalKey: string) => void,
) => {
  const { toggleModal } = useModal();
  const queryClient = useQueryClient();
  const tags = useAllTags();
  const selectedGifsInCurrentGif = useMemo(
    () => gifTags.map((tag) => tag.id),
    [gifTags],
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DtoEditModal>({
    mode: "onSubmit",
  });
  const [selectedTags, setSelectedTags] = useState(selectedGifsInCurrentGif);

  const { mutate: handleChanging } = useMutation(
    (data: DtoEditModal) => editGif(data),
    {
      onSuccess: () => queryClient.invalidateQueries(["gifs"]),
    },
  );

  const onSubmit: SubmitHandler<DtoEditModal> = (data) => {
    data.tags = selectedTags;
    data.id = id;
    handleChanging(data);
    handleClose(configModalName.edit);
  };
  const handleCheckbox = (value: Tag) => {
    setSelectedTags([...selectedTags, value.id]);
  };

  return {
    register,
    handleSubmit,
    errors,
    selectedGifsInCurrentGif,
    tags,
    onSubmit,
    handleCheckbox,
    toggleModal,
  };
};
