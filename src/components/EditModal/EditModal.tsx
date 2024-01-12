import {
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import type { Tag } from "../../types/Tag";
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
}
interface DataForChangingGif {
  title: string;
  description: string;
  tags: Tag["id"];
}

export function EditModal({
  open,
  handleClose,
  title,
  description,
  tags,
}: EditModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    //   reset,
  } = useForm<DataForChangingGif>({
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<DataForChangingGif> = () => {
    return {};
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
          <Box>
            <Typography textAlign="center">Tags</Typography>
            <Box width="100%" display="flex" flexWrap="wrap">
              <List
                dense
                sx={{
                  width: "100%",

                  position: "relative",
                  overflow: "auto",
                  maxHeight: 140,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  "& ul": { padding: 0 },
                }}
              >
                {tags.map((value) => {
                  return (
                    <ListItem
                      key={value.id}
                      secondaryAction={
                        <Checkbox
                          edge="end"
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
                      <ListItemButton>
                        <ListItemText primary={value?.name} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Box>
          <EditPopupButton type="submit">Confirm</EditPopupButton>
        </EditPopupWrapper>
      </Modal>
    </div>
  );
}
