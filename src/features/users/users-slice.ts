import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Extra, Status } from "types";
import { User } from "types";

type AuthInitialState = {
  user: User | null;
  status: Status;
  error: string | null;
  isAuth: boolean;
};
type RegisterUserType = {
  email: string;
  password: string;
};
type LoginUserType = {
  email: string;
  password: string;
};
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
      return rejectWithValue(error);
    }
  },
);

export const loginUser = createAsyncThunk<
  User,
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
    } catch (error) {
      if (error.response && error.response.status === 401) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
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
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const checkAuth = createAsyncThunk<
  User,
  string,
  { extra: Extra; rejectWithValue: string }
>("@@user/isAuth", async (jwt, { extra: { client, api }, rejectWithValue }) => {
  try {
    const { data } = await client.get(api.CHECK_JWT, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
export const subscribToUser = createAsyncThunk<
  any,
  string,
  { extra: Extra; rejectWithValue: string }
>(
  "@@user/subscribe",
  async (followeeId, { extra: { client, api }, rejectWithValue }) => {
    try {
      const { data } = await client.put(api.SUBSCRIBE_USER, { followeeId });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const unSubscribToUser = createAsyncThunk<
  any,
  string,
  { extra: Extra; rejectWithValue: string }
>(
  "@@user/unSubscribe",
  async (followeeId, { extra: { client, api }, rejectWithValue }) => {
    try {
      const { data } = await client.put(api.UNSUBSCRIBE_USER, { followeeId });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
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
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.status = "received";
      })
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.isAuth = true;
        state.user = payload;
      })
      .addCase(updateCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.error = null;
        state.status = "received";
      })
      .addCase(subscribToUser.fulfilled, (state, { payload }) => {
        state.error = null;
        state.status = "received";
        state.user.following = [...state.user.following, payload.subscription];
      })
      .addCase(unSubscribToUser.fulfilled, (state, { payload }) => {
        state.error = null;
        state.status = "received";

        state.user.following = state.user.following.filter(
          ({ followeeId }) =>
            followeeId !== payload.existingSubscription.followeeId,
        );
      });
  },
});

export const { logOut } = UserSlice.actions;
export const userReducer = UserSlice.reducer;
