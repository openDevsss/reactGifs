import { Button, Divider } from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAlert from "../../hooks/useAlert";
import type { Tag } from "../../types/Tag";
import { Hashtag } from "../Hashtag/Hashtag";
import { DataForCreateGif, createGif } from "./hooks/service";
import { useGetTags } from "./hooks/useGetTags";
import {
  AddGifItem,
  AddGifItemWrapper,
  CreatedWrapper,
  DragAndDropWrapper,
  ErrorMessageAddGif,
  FormAdded,
  FormInput,
  FormWrapperStyle,
  GifsTag,
  SubmitAddGifButton,
  TagList,
  TitleAddGif,
  WrapperAddGif,
  buttonStyle,
} from "./style";
export function AddGif() {
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
    [data.tags] = selectedTags.map(({ id }) => id);
    createGif(data)
      .then(() => {
        setAlert("Вы успешно добавили гифку", "success");
        reset();
      })
      .catch((err) => {
        setAlert(err, "error");
      });
  };
  const displayGif = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  // test
  return (
    <WrapperAddGif>
      <TitleAddGif>Add GIF</TitleAddGif>
      <FormAdded onSubmit={handleSubmit(onSubmit)}>
        <CreatedWrapper>
          {image ? (
            <AddGifItemWrapper>
              <AddGifItem src={image} />
            </AddGifItemWrapper>
          ) : (
            <DragAndDropWrapper>
              <Button sx={buttonStyle} component="label">
                Upload Gif
                <input onChange={displayGif} type="file" hidden />
              </Button>
              <Divider>Or</Divider>
              <FormInput
                autoComplete="none"
                {...register("url", {
                  required: {
                    value: true,
                    message: "This field cannot be empty",
                  },
                  pattern: {
                    value: /(http)?s?:?(\/\/[^"']*\.(?:gif|apng|webp|bpg))/,
                    message: "This is incorrect link",
                  },
                })}
                label="Add with URL"
                size="small"
              />
              {errors.url && (
                <ErrorMessageAddGif>{errors.url.message}</ErrorMessageAddGif>
              )}
            </DragAndDropWrapper>
          )}
          <FormWrapperStyle>
            <FormInput
              autoComplete="none"
              {...register("title", {
                required: {
                  value: true,
                  message: "This field cannot be empty",
                },
                minLength: {
                  value: 3,
                  message: "Min length 3 symbols",
                },
                maxLength: {
                  value: 25,
                  message: "Max length 25 symbols",
                },
              })}
              label="Title"
              size="small"
            />
            {errors.title && (
              <ErrorMessageAddGif>{errors.title.message}</ErrorMessageAddGif>
            )}
            <FormInput
              autoComplete="none"
              {...register("description", {
                required: {
                  value: true,
                  message: "This field cannot be empty",
                },
                minLength: {
                  value: 5,
                  message: "Min length 5 symbols",
                },
              })}
              label="Description"
              multiline
            />
            {errors.description && (
              <ErrorMessageAddGif>
                {errors.description.message}
              </ErrorMessageAddGif>
            )}
            {Boolean(selectedTags?.length) && (
              <TagList>
                {selectedTags.map((tag) => {
                  return (
                    <Hashtag
                      key={tag.id}
                      tag={tag.name}
                      onClick={() => handleRemoveTag(tag.id)}
                    />
                  );
                })}
              </TagList>
            )}
            {Boolean(tags?.length) && (
              <GifsTag>
                {tags
                  ?.filter((x) => !selectedTags?.includes(x))
                  ?.map((tag) => (
                    <Hashtag
                      key={tag.id}
                      tag={tag.name}
                      onClick={() => handleAddTagToSelected(tag)}
                    />
                  ))}
              </GifsTag>
            )}
          </FormWrapperStyle>
        </CreatedWrapper>
        <SubmitAddGifButton type="submit">Add</SubmitAddGifButton>
      </FormAdded>
    </WrapperAddGif>
  );
}
