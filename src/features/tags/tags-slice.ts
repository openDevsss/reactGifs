import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { Extra } from "../../types/Extra";
import type { Status } from "../../types/Status";
import { Tag } from "../../types/Tag";

type TagsInitialState = {
  tags: Tag[] | null;
  status: Status;
  error: string | null;
};

const initialState: TagsInitialState = {
  tags: null,
  status: "idle",
  error: null,
};

export const getTags = createAsyncThunk<
  Tag[],
  undefined,
  { extra: Extra; rejectValue: string }
>("@@tags/alltags", async (_, { extra: { client, api }, rejectWithValue }) => {
  try {
    const { data } = await client.get(api.GET_ALL_TAGS);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const TagsSlice = createSlice({
  name: "@@tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTags.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getTags.rejected, (state) => {
        state.status = "rejected";
        state.error = "cannot load data";
      })
      .addCase(getTags.fulfilled, (state, { payload }) => {
        state.status = "received";
        state.tags = payload;
      });
  },
});

export const tagsReducer = TagsSlice.reducer;
