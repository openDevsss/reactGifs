import { Button, Divider } from "@mui/material";

import { Hashtag } from "../Hashtag/Hashtag";
import { useAddGif } from "./hooks/useAddGif";
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
  const {
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
  } = useAddGif();
  let imageUrl;
  if (Boolean(image)) {
    imageUrl = URL.createObjectURL(image);
  }

  return (
    <WrapperAddGif>
      <TitleAddGif>Add GIF</TitleAddGif>
      <FormAdded onSubmit={handleSubmit(onSubmit)}>
        <CreatedWrapper>
          {image ? (
            <AddGifItemWrapper>
              <AddGifItem src={imageUrl} />
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
                  value: 40,
                  message: "Max length 40 symbols",
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
                  value: 3,
                  message: "Min length 3 symbols",
                },
                maxLength: {
                  value: 80,
                  message: "Max length 80 symbols",
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
            {Boolean(tags && tags?.length) && (
              <GifsTag>
                {tags
                  .filter((tag) => !selectedTags?.includes(tag))
                  .map((tag) => (
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
