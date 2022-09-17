/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isExpand: true,
  isOpen: false,
  open: "",
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setExpand: (state, action) => {
      state.isExpand = action.payload;
    },
    setOpen: (state, { payload }) => {
      state.open = payload;
    },
  },
  extraReducers: {},
});

export const { setExpand, setOpen } = navSlice.actions;
export const navSelector = (state) => state.nav;
export default navSlice.reducer;
