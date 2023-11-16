import { useState } from "react";
import { Button, Divider } from "@mui/material";
import {
  TitleAddGif,
  WrapperAddGif,
  FormAdded,
  CreatedWrapper,
  buttonStyle,
  FormInput,
  DragAndDropWrapper,
  SubmitAddGifButton,
  TagList,
  GifsTag,
  FormWrapperStyle,
  AddGifItem,
  AddGifItemWrapper,
  ErrorMessageAddGif,
} from "./style";
import { Hashtag } from "../Hashtag/Hashtag";
import { SubmitHandler, useForm } from "react-hook-form";
import { Gif } from "../../types/GifType";
export function AddGif() {
  const [tags, setTags] = useState<string[]>([]);
  const [image, setImage] = useState("");
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Gif>();
  const selectedTags: string[] = [];
  const handleAddTag = (item: string) => {
    setTags((prevTags) => [...prevTags, item]);
  };
  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((item) => item !== tag));
  };
  const onSubmit: SubmitHandler<Gif> = (data) => {
    data.tags = tags;
  };
  const displayGif = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <WrapperAddGif>
      <TitleAddGif>Add GIF</TitleAddGif>
      <FormAdded onSubmit={handleSubmit(onSubmit)}>
        <CreatedWrapper>
          {Boolean(image) ? (
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
            {Boolean(tags.length) && (
              <TagList>
                {tags.map((tag, index) => {
                  return (
                    <Hashtag
                      key={index}
                      tag={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  );
                })}
              </TagList>
            )}
            <GifsTag>
              {selectedTags
                ?.filter((data) => !tags.includes(data))
                .map((tag, index) => {
                  return (
                    <Hashtag
                      key={index}
                      tag={tag}
                      onClick={() => handleAddTag(tag)}
                    />
                  );
                })}
            </GifsTag>
          </FormWrapperStyle>
        </CreatedWrapper>
        <SubmitAddGifButton
          type="submit"
          onClick={() => {
            setError("url", { type: "manual" });
          }}
        >
          Add
        </SubmitAddGifButton>
      </FormAdded>
    </WrapperAddGif>
  );
}
