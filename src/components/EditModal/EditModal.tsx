import {
  Box,
  Checkbox,
  ListItem,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import type { Tag } from "../../types/Tag";
import { EditGif } from "./service";
import {
  EditPopupButton,
  EditPopupInput,
  EditPopupTitle,
  EditPopupWrapper,
  ErrorMessageEditModal,
  StyledList,
  StyledListItemButton,
} from "./style";

interface EditModalProps {
  open: boolean;
  title: string;
  handleClose: (modalKey: string) => void;
  description: string;
  tags: Tag[];
  id: string;
  gifTags: Tag[];
}
interface DataForChangingGif {
  id: string;
  title: string;
  description: string;
  tags: Tag[];
}

export function EditModal({
  open,
  handleClose,
  title,
  description,
  tags,
  id,
}: EditModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataForChangingGif>({
    mode: "onSubmit",
  });
  const [selectedTags, setSelectedTags] = useState([]);
  const onSubmit: SubmitHandler<DataForChangingGif> = (data) => {
    [data.tags] = selectedTags;
    data.id = id;
    EditGif(data);
  };
  console.log();
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <EditPopupWrapper onSubmit={handleSubmit(onSubmit)}>
          <EditPopupTitle>Edit</EditPopupTitle>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="25px"
            width="100%"
          >
            <Box width="100%">
              <EditPopupInput
                defaultValue={title}
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
                size="small"
                label="Title"
              />
              {errors.title && (
                <ErrorMessageEditModal>
                  {errors.title.message}
                </ErrorMessageEditModal>
              )}
            </Box>
            <Box width="100%">
              <EditPopupInput
                defaultValue={description}
                {...register("description", {
                  required: {
                    value: true,
                    message: "This field cannot be empty",
                  },
                  minLength: {
                    value: 3,
                    message: "Min length 3 symbols",
                  },
                })}
                size="small"
                label="Description"
                multiline
              />
              {errors.description && (
                <ErrorMessageEditModal>
                  {errors.description.message}
                </ErrorMessageEditModal>
              )}
            </Box>
          </Box>
          <Box width="100%">
            <Typography textAlign="center">Tags</Typography>
            <Box width="100%" display="flex" flexWrap="wrap">
              <StyledList dense>
                {tags?.map((value) => {
                  return (
                    <ListItem
                      key={value.id}
                      secondaryAction={
                        <Checkbox
                          edge="end"
                          onChange={() =>
                            setSelectedTags([
                              ...selectedTags,
                              { name: value?.name, id: value?.id },
                            ])
                          }
                          sx={{
                            color: "#5f3db5",
                            "&.Mui-checked": {
                              color: "#5f3db5",
                            },
                          }}
                        />
                      }
                      disablePadding
                    >
                      <StyledListItemButton>
                        <ListItemText
                          sx={{ textAlign: "center" }}
                          primary={value?.name}
                        />
                      </StyledListItemButton>
                    </ListItem>
                  );
                })}
              </StyledList>
            </Box>
          </Box>
          <EditPopupButton onClick={() => handleClose} type="submit">
            Confirm
          </EditPopupButton>
        </EditPopupWrapper>
      </Modal>
    </div>
  );
}
