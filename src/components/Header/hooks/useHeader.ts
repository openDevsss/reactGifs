import { useCallback, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useAppDispatch } from "redux-hooks";
import { useCurrentUser } from "hooks/useCurrentUser";
import { logOut } from "features/users/users-slice";

export const useHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();
  const currentUser = useCurrentUser();
  const isMatches1024 = useMediaQuery("(max-width : 1024px)");
  const isMatches480 = useMediaQuery("(max-width : 480px)");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    setIsOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return {
    isOpen,
    anchorEl,
    currentUser,
    isMatches1024,
    isMatches480,
    handleClick,
    handleClose,
    handleLogout,
  };
};
