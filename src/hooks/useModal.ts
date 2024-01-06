import { useState } from "react";

export const useModal = () => {
  const [modals, setModals] = useState<{ [key: string]: boolean }>({});
  console.log(modals);
  const toggleModal = (modalKey: string) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalKey]: !prevModals[modalKey],
    }));
  };

  return {
    modals,
    toggleModal,
  };
};
