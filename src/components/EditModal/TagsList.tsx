import {
  Box,
  Checkbox,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import { Tag } from "@types/Tag";
import {
  ErrorMessageEditModal,
  StyledList,
  StyledListItemButton,
} from "./style";
import { DtoEditModal } from "./types";
interface TagsListProps {
  tags: Tag[];
  register: UseFormRegister<DtoEditModal>;
  gifTags: Tag[];
  errors: FieldErrors;
  handleCheckbox: (value: Tag) => void;
}

export function TagsList({
  tags,
  handleCheckbox,
  register,
  gifTags,
  errors,
}: TagsListProps) {
  const selectedGifs = gifTags.map((tag) => tag.id);
  const [checked, setChecked] = useState(selectedGifs);

  const handleToggle = (value: string) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Box width="100%">
      <Typography textAlign="center">Tags</Typography>
      <StyledList dense>
        {tags?.map((value) => (
          <ListItem
            key={value.id}
            secondaryAction={
              <Checkbox
                edge="end"
                {...register("tags", {
                  required: {
                    value: true,
                    message: "Select at least 1 tag",
                  },
                })}
                onChange={() => {
                  handleCheckbox(value);
                  handleToggle(value.id);
                }}
                checked={checked.indexOf(value.id) !== -1}
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
        ))}
      </StyledList>
      {Boolean(errors.tags) && (
        <ErrorMessageEditModal>Select at least 1 tag</ErrorMessageEditModal>
      )}
    </Box>
  );
}
