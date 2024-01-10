import { configureStore } from "@reduxjs/toolkit";

import * as api from "./config";
import { userReducer } from "./features/users/users-slice";
import { axiosInstance } from "./utils/axiosInstance";
import { tagsReducer } from "./features/tags/tags-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    tags: tagsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axiosInstance,
          api,
        },
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
