import { Checkbox, ListItem, ListItemText } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { Tag } from "../../types/Tag";
import { DataForChangingGif } from "./EditModal";
import { StyledList, StyledListItemButton } from "./style";
interface TagsListProps {
  tags: Tag[];
  handleCheckbox: (value: Tag) => void;
  register: UseFormRegister<DataForChangingGif>;
}

export function TagsList({ tags, handleCheckbox, register }: TagsListProps) {
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
                onChange={() => handleCheckbox(value)}
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
