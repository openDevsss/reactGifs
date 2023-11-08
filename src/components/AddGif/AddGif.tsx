import { TextField } from "@mui/material";
import {
  DragAndDropWrapper,
  DragAndDropText,
  TitleAddGif,
  WrapperAddGif,
  FormAdded,
  CreatedWrapper,
} from "./style";

export function AddGif() {
  return (
    <WrapperAddGif>
      <TitleAddGif>Add GIF</TitleAddGif>
      <CreatedWrapper>
        <TextField
          type="file"
          inputProps={{
            multiple: true,
          }}
        >
          <DragAndDropText>Choose file</DragAndDropText>
        </TextField>
        <FormAdded>2121</FormAdded>
      </CreatedWrapper>
    </WrapperAddGif>
  );
}
