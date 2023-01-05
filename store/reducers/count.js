import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  count: 0,
};
const countSlice = createSlice({
  name: "count-slice",
  initialState,
  reducers: {
    increment: (state, { type, payload }) => {
      return { ...state, count: payload };
    },
  },
});

export const { increment } = countSlice.actions;
export const countSliceReducer = countSlice.reducer;
