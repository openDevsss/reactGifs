import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import type { Tag } from "../../types/Tag";
import { TagsList } from "./TagsList";
import { EditGif } from "./service";
import {
  EditPopupButton,
  EditPopupInput,
  EditPopupTitle,
  EditPopupWrapper,
  ErrorMessageEditModal,
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
export interface DataForChangingGif {
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
  const handleCheckbox = (value) => {
    return setSelectedTags([...selectedTags, value.id]);
  };
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
              {Boolean(errors.title) && (
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
              {Boolean(errors.description) && (
                <ErrorMessageEditModal>
                  {errors.description.message}
                </ErrorMessageEditModal>
              )}
            </Box>
          </Box>
          <Box width="100%">
            <Typography textAlign="center">Tags</Typography>
            <TagsList
              register={register}
              handleCheckbox={handleCheckbox}
              tags={tags}
            />
            {Boolean(errors.tags) && (
              <ErrorMessageEditModal>
                Select at least 1 tag
              </ErrorMessageEditModal>
            )}
          </Box>
          <EditPopupButton onClick={() => handleClose} type="submit">
            Confirm
          </EditPopupButton>
        </EditPopupWrapper>
      </Modal>
    </div>
  );
}
