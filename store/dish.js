import { createSlice } from "@reduxjs/toolkit";

const dishSlice = createSlice({
  name: "dish",
  initialState: {
    todaySpecial: null,
    featured: null,
  },
  reducers: {
    GET_TODAY_SPECIAL: (state, action) => {
      state.todaySpecial = action.payload;
    },
    GET_FEATURED: (state, action) => {
      state.featured = action.payload;
    },
  },
});

export const { GET_TODAY_SPECIAL, GET_FEATURED } = dishSlice.actions;

export default dishSlice.reducer;
