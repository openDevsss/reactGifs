import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { GearSix, HeartStraight, Moon, SignOut, UserCircle } from 'phosphor-react';
import { StyledMenuItem } from './styled';
interface HeaderMenuProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  isOpen: boolean;
}
export default function HeaderMenu({ anchorEl, handleClose, isOpen }: HeaderMenuProps) {
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
          width: '230px',
          padding: '8px',
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '&:before': {
            backgroundColor: '#fff',
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <StyledMenuItem onClick={handleClose}>
        <ListItemIcon>
          <UserCircle size={24} color="#5f3db5" />
        </ListItemIcon>
        My profile
      </StyledMenuItem>
      <StyledMenuItem onClick={handleClose}>
        <ListItemIcon>
          <HeartStraight size={24} color="#5f3db5" />
        </ListItemIcon>
        Favourite
      </StyledMenuItem>
      <StyledMenuItem onClick={handleClose}>
        <ListItemIcon>
          <GearSix size={24} color="#5f3db5" />
        </ListItemIcon>
        Settings
      </StyledMenuItem>

      <StyledMenuItem onClick={handleClose}>
        <ListItemIcon>
          <Moon size={24} color="#5f3db5" />
        </ListItemIcon>
        Night mode
      </StyledMenuItem>
      <StyledMenuItem onClick={handleClose}>
        <ListItemIcon>
          <SignOut size={24} color="#5f3db5" />
        </ListItemIcon>
        Logout
      </StyledMenuItem>
    </Menu>
  );
}
