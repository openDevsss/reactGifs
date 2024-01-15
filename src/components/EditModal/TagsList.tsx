import { Checkbox, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

import { Tag } from "../../types/Tag";
import { DataForChangingGif } from "./EditModal";
import { StyledList, StyledListItemButton } from "./style";
interface TagsListProps {
  tags: Tag[];
  handleCheckbox: (value: Tag) => void;
  register: UseFormRegister<DataForChangingGif>;
  gifTags: Tag[];
}

export function TagsList({
  tags,
  handleCheckbox,
  register,
  gifTags,
}: TagsListProps) {
  const [checked, setChecked] = useState(gifTags.map((tag) => tag.id));

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
    <StyledList dense>
      {tags?.map((value) => {
        return (
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
        );
      })}
    </StyledList>
  );
}
