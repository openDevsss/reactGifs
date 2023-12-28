import Menu from "@mui/material/Menu";
import { ArrowFatLineDown, Megaphone, Trash } from "@phosphor-icons/react";
import { useMutation, useQueryClient } from "react-query";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import type { User } from "../../types/User";
import { deleteGif } from "./service";
import { StyledMenuItem } from "./style";

interface GifMenuProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  isOpen: boolean;
  authorId: User["id"];
  gifId: string;
}
export function GifMenuAction({
  gifId,
  anchorEl,
  handleClose,
  isOpen,
  authorId,
}: GifMenuProps) {
  const queryClient = useQueryClient();
  const { mutate: handleDelete } = useMutation(
    (gifid: string) => deleteGif(gifid),
    {
      onSuccess: () => queryClient.invalidateQueries(["gifs"]),
    },
  );
  const currentUser = useCurrentUser();
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
            // eslint-disable-next-line quotes
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
        <StyledMenuItem
          style={{ color: "#ff0000" }}
          onClick={() => handleDelete(gifId)}
        >
          <Trash size={20} color="#ff0000" />
          Delete
        </StyledMenuItem>
      )}
    </Menu>
  );
}
