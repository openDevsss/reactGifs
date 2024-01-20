import { Modal, ModalProps } from "@mui/material";
import React from "react";

import { StyledWtapperIntoModal } from "@components/UserList/style";

interface CustomModalProps extends ModalProps {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

export const CustomModal = ({ children, ...modalProps }: CustomModalProps) => {
  return (
    <Modal
      style={{ width: "600px", margin: "0 auto", top: "150px" }}
      {...modalProps}
    >
      <StyledWtapperIntoModal>{children}</StyledWtapperIntoModal>
    </Modal>
  );
};
