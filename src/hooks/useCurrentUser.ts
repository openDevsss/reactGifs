import { selectCurrentUser } from "../features/users/users-selectors";
import { useAppSelector } from "../redux-toolkit";

export const useCurrentUser = () => {
  return useAppSelector(selectCurrentUser);
};
