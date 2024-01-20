import { useState } from "react";

export const useDetailsGifActions = () => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  return {
    isCommentsOpen,
    setIsCommentsOpen,
  };
};
