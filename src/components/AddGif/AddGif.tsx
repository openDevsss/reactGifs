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
} from "./style";
import { Hashtag } from "../Hashtag/Hashtag";
import { SubmitHandler, useForm } from "react-hook-form";
import { Gif } from "../../types/GifType";
export function AddGif() {
  const [tags, setTags] = useState<string[]>([]);
  const { register, handleSubmit } = useForm<Gif>();

  const tagsArray: string[] = [];
  const handleAddTag = (item: string) => {
    setTags((prevTags) => [...prevTags, item]);
  };
  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((item) => item !== tag));
  };
  const onSubmit: SubmitHandler<Gif> = (data) => {
    data.tags = tags;
  };
  return (
    <WrapperAddGif>
      <TitleAddGif>Add GIF</TitleAddGif>
      <FormAdded onSubmit={handleSubmit(onSubmit)}>
        <CreatedWrapper>
          <DragAndDropWrapper>
            <Button sx={buttonStyle} component="label">
              Upload Gif
              <input type="file" hidden />
            </Button>
            <Divider>Or</Divider>
            <FormInput
              autoComplete="none"
              {...register("url")}
              label="Add with URL"
              size="small"
            />
          </DragAndDropWrapper>
          <FormWrapperStyle>
            <FormInput
              autoComplete="none"
              {...register("title")}
              label="Title"
              size="small"
            />
            <FormInput
              autoComplete="none"
              {...register("description")}
              label="Description"
              multiline
            />
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
              {tagsArray
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
        <SubmitAddGifButton type="submit">Add</SubmitAddGifButton>
      </FormAdded>
    </WrapperAddGif>
  );
}
