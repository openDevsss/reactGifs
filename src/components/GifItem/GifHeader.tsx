import { Box, IconButton } from "@mui/material";
import { DotsThreeOutlineVertical } from "@phosphor-icons/react";
import { EditModal } from "components/EditModal/EditModal";
import { configModalName } from "constant";
import { useModal } from "hooks/useModal";
import React from "react";
import { Tag, User } from "types";

import { GifMenuAction } from "./GifMenuAction";
import { GifItemTitle, GifUserAvatar } from "./style";
import { GifMenuActionProps } from "./type";

interface GifHeaderProps {
  title: string;
  user: User;
  tags: Tag[];
  description: string;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}
type CombinedProps = GifHeaderProps & GifMenuActionProps;

export const GifHeader = ({
  anchorEl,
  gifId,
  handleClick,
  handleClose,
  isOpen,
  title,
  user,
  tags,
  description,
}: CombinedProps) => {
  const { modals, toggleModal } = useModal();

  return (
    <Box
      justifyContent="space-between"
      mb="10px"
      display="flex"
      alignItems="center"
    >
      <Box display="flex" gap="15px">
        <GifUserAvatar src={user?.avatar} />
        <GifItemTitle>{title}</GifItemTitle>
      </Box>
      <IconButton onClick={handleClick}>
        <DotsThreeOutlineVertical
          size={17}
          weight="fill"
          color="#6F4FF2"
          cursor="pointer"
        />
      </IconButton>
      <GifMenuAction
        gifId={gifId}
        authorId={user?.id}
        anchorEl={anchorEl}
        handleClose={handleClose}
        isOpen={isOpen}
        setIsOpenEditModal={toggleModal}
      />
      {Boolean(modals[configModalName.edit]) && (
        <EditModal
          open={Boolean(modals[configModalName.edit])}
          title={title}
          description={description}
          gifTags={tags}
          id={gifId}
          handleClose={toggleModal}
        />
      )}
    </Box>
  );
};
