import { useCallback, useState } from "react";

export const useModal = () => {
  const [modals, setModals] = useState<{ [key: string]: boolean }>({});

  const toggleModal = useCallback((modalKey: string) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalKey]: !prevModals[modalKey],
    }));
  }, []);

  return {
    modals,
    toggleModal,
  };
};
