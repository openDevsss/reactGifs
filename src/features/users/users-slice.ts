import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Extra } from "../../types/ExtraType";
import { StatusType } from "../../types/StatusType";
import { UserType } from "../../types/UserType";

type AuthInitialState = {
  user: UserType | null;
  status: StatusType;
  error: string | null;
  isAuth: boolean;
};
type RegisterUserType = Pick<UserType, "email" | "password" | "nickname">;
type LoginUserType = Pick<UserType, "email" | "password">;
const initialState: AuthInitialState = {
  user: null,
  status: "idle",
  error: null,
  isAuth: false,
};

export const registerUser = createAsyncThunk<
  { token: string },
  RegisterUserType,
  { extra: Extra; rejectWithValue: string }
>(
  "@@auth/register",
  async (data, { extra: { client, api }, rejectWithValue }) => {
    try {
      const res = await client.post(api.REGISTER_USER, data);
      return res.data;
    } catch (error) {
      return rejectWithValue("У вас случилась ошибка");
    }
  }
);

export const loginUser = createAsyncThunk<
  UserType,
  LoginUserType,
  { extra: Extra; rejectWithValue: string }
>(
  "@@auth/login",
  async (dataUser, { extra: { client, api }, rejectWithValue }) => {
    try {
      const { data } = await client.post(api.LOGIN_USER, dataUser, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { token } = data;
      localStorage.setItem("jwt", token);
      return data;
    } catch (err) {
      return rejectWithValue("Ошибка");
    }
  }
);

export const updateCurrentUser = createAsyncThunk<
  any,
  any,
  { extra: Extra; rejectWithValue: string }
>(
  "@@user/update",
  async (data, { extra: { client, api }, rejectWithValue }) => {
    try {
      const jwt = localStorage.getItem("jwt");
      const res = await client.patch(api.UPDATE_CURRENT_USER, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue("Ошибка");
    }
  }
);

export const checkAuth = createAsyncThunk<
  UserType,
  string,
  { extra: Extra; rejectWithValue: string }
>("@@user/isAuth", async (jwt, { extra: { client, api }, rejectWithValue }) => {
  try {
    const res = await client.get(api.CHECK_JWT, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res.data;
  } catch (err) {
    return rejectWithValue("Ошибка");
  }
});

const UserSlice = createSlice({
  name: "@@user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.isAuth = false;
      state.user = null;
      localStorage.removeItem("jwt");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = "rejected";
        state.error = "cannot load data";
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = "received";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "received";
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload;
      })
      .addCase(updateCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload[0];
        state.error = null;
        state.status = "received";
      });
  },
});

export const { logOut } = UserSlice.actions;
export const userReducer = UserSlice.reducer;
