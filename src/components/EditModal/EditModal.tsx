import { Box, Modal } from "@mui/material";
import { configModalName } from "constant";

import type { Tag } from "@types/Tag";
import { TagsList } from "./TagsList";
import {
  EditPopupButton,
  EditPopupInput,
  EditPopupTitle,
  EditPopupWrapper,
  ErrorMessageEditModal,
} from "./style";
import { useEditModal } from "./useEditModal";

interface EditModalProps {
  open: boolean;
  title: string;
  description: string;
  id: string;
  gifTags: Tag[];
  handleClose: (modalKey: string) => void;
}

export const EditModal = ({
  open,
  title,
  description,
  gifTags,
  id,
  handleClose,
}: EditModalProps) => {
  const { register, handleSubmit, errors, tags, onSubmit, handleCheckbox } =
    useEditModal(gifTags, id, handleClose);
  return (
    <>
      <Modal open={open} onClose={() => handleClose(configModalName.edit)}>
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
                    value: 40,
                    message: "Max length 40 symbols",
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
                  maxLength: {
                    value: 80,
                    message: "Max length 40 symbols",
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

          <TagsList
            register={register}
            handleCheckbox={handleCheckbox}
            tags={tags}
            gifTags={gifTags}
            errors={errors}
          />

          <EditPopupButton type="submit">Confirm</EditPopupButton>
        </EditPopupWrapper>
      </Modal>
    </>
  );
};
