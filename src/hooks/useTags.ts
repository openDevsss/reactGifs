import { selectTags } from "@features/tags/tags-selectors";
import { useAppSelector } from "../redux-hooks";

export const useAllTags = () => {
  return useAppSelector(selectTags);
};
