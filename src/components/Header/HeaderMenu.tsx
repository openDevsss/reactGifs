import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import { GearSix, Moon, SignOut, UserCircle } from "phosphor-react";

import { MenuItemLink, StyledMenuItem } from "./style";

interface HeaderMenuProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  isOpen: boolean;
  handleLogout: () => void;
}
export function HeaderMenu({
  anchorEl,
  handleClose,
  isOpen,
  handleLogout,
}: HeaderMenuProps) {
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={isOpen}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          width: "200px",
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
      <MenuItemLink to="my-profile">
        <StyledMenuItem>
          <ListItemIcon>
            <UserCircle size={24} color="#5f3db5" />
          </ListItemIcon>
          My profile
        </StyledMenuItem>
      </MenuItemLink>
      <MenuItemLink to="settings">
        <StyledMenuItem onClick={handleClose}>
          <ListItemIcon>
            <GearSix size={24} color="#5f3db5" />
          </ListItemIcon>
          Settings
        </StyledMenuItem>
      </MenuItemLink>
      <MenuItemLink to="">
        <StyledMenuItem onClick={handleClose}>
          <ListItemIcon>
            <Moon size={24} color="#5f3db5" />
          </ListItemIcon>
          Night mode
        </StyledMenuItem>
      </MenuItemLink>
      <MenuItemLink to="">
        <StyledMenuItem onClick={handleLogout}>
          <ListItemIcon>
            <SignOut size={24} color="#5f3db5" />
          </ListItemIcon>
          Logout
        </StyledMenuItem>
      </MenuItemLink>
    </Menu>
  );
}
