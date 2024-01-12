import { RootState } from "@srcstore";

export const selectCurrentUser = (state: RootState) => state.user.user;
