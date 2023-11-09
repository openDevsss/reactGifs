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
} from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { Hashtag } from "../Hashtag/Hashtag";
export function AddGif() {
  return (
    <WrapperAddGif>
      <TitleAddGif>Add GIF</TitleAddGif>
      <CreatedWrapper>
        <DragAndDropWrapper>
          <Button sx={buttonStyle} component="label">
            Upload Gif
            <input type="file" hidden />
          </Button>
          <Divider>Or</Divider>
          <FormInput label="Add with URL" size="small" />
        </DragAndDropWrapper>
        <FormAdded>
          <FormInput label="Title" size="small" />
          <FormInput label="Description" multiline />
          <TagList></TagList>
          <GifsTag>
            <Hashtag />
          </GifsTag>
        </FormAdded>
      </CreatedWrapper>
      <SubmitAddGifButton>Add</SubmitAddGifButton>
    </WrapperAddGif>
  );
}
