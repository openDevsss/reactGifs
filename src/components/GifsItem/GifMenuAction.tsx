import Menu from "@mui/material/Menu";
import { ArrowFatLineDown, Megaphone, Trash } from "phosphor-react";
import { selectCurrentUser } from "../../features/users/users-selectors";
import { useAppSelector } from "../../redux-toolkit";
import type { User } from "../../types/UserType";
import { StyledMenuItem } from "./styled";
interface GifMenuProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  isOpen: boolean;
  authorId: User["id"];
}
export function GifMenuAction({
  anchorEl,
  handleClose,
  isOpen,
  authorId,
}: GifMenuProps) {
  const currentUser = useAppSelector(selectCurrentUser);
  const isMyGif = currentUser?.id === authorId;
  return (
    <Menu
      anchorEl={anchorEl}
      id="menu"
      open={isOpen}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          width: "150px",
          padding: "8px",
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "&:before": {
            backgroundColor: "#fff",
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <StyledMenuItem onClick={handleClose}>
        <ArrowFatLineDown size={20} />
        Download
      </StyledMenuItem>
      <StyledMenuItem onClick={handleClose}>
        <Megaphone size={20} />
        Report
      </StyledMenuItem>
      {isMyGif && (
        <StyledMenuItem style={{ color: "#ff0000" }} onClick={handleClose}>
          <Trash size={20} color="#ff0000" />
          Delete
        </StyledMenuItem>
      )}
    </Menu>
  );
}
