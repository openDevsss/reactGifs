import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useActionWithGifs() {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUserList, setIsOpenUserList] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
    setIsOpenUserList(false);
  };
  return {
    isCommentsOpen,
    setIsCommentsOpen,
    isOpen,
    isOpenUserList,
    setIsOpenUserList,
    anchorEl,
    handleClick,
    handleClose,
    navigate,
  };
}
