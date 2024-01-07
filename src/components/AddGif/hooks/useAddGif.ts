import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAlert } from "../../../hooks/useAlert";
import { Tag } from "../../../types/Tag";
import { DataForCreateGif, createGif } from "./service";
import { useGetTags } from "./useGetTags";

export const useAddGif = () => {
  const [image, setImage] = useState("");
  const [selectedTags, setSeletedTags] = useState<Tag[]>([]);
  const { setAlert } = useAlert();
  const { data: tags } = useGetTags();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DataForCreateGif>({
    mode: "onSubmit",
  });
  const handleRemoveTag = (tagId: Tag["id"]) =>
    setSeletedTags(selectedTags?.filter((tag) => tag.id !== tagId));
  const handleAddTagToSelected = (tag: Tag) => {
    setSeletedTags((prev) => [...prev, tag]);
  };
  const onSubmit: SubmitHandler<DataForCreateGif> = (data) => {
    if (selectedTags.length === 0) {
      setAlert("Выберите хотя бы один тег", "error");
      return;
    }
    [data.tags] = selectedTags.map(({ id }) => id);
    createGif(data)
      .then(() => {
        setAlert("Вы успешно добавили гифку", "success");
        setSeletedTags([]);
        reset();
      })
      .catch((error) => {
        setAlert(error.message, "error");
      });
  };
  const displayGif = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return {
    image,
    tags,
    register,
    handleSubmit,
    errors,
    selectedTags,
    handleRemoveTag,
    handleAddTagToSelected,
    onSubmit,
    displayGif,
  };
};
