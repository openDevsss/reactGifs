import Menu from "@mui/material/Menu";
import { StyledMenuItem } from "./styled";
interface GifMenuProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  isOpen: boolean;
}
export default function GifMenuAction({
  anchorEl,
  handleClose,
  isOpen,
}: GifMenuProps) {
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
          width: "130px",
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
      <StyledMenuItem onClick={handleClose}>Download</StyledMenuItem>
      <StyledMenuItem onClick={handleClose}>Hide</StyledMenuItem>
      <StyledMenuItem onClick={handleClose}>Report</StyledMenuItem>
    </Menu>
  );
}
