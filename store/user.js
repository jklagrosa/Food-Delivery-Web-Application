import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    refresh_the_page: false,
  },
  reducers: {
    DEMO_USER: (state, action) => {
      state.userData = action.payload;
    },
    REFRESH_PAGE: (state, action) => {
      state.refresh_the_page = action.payload;
    },
  },
});

export const { DEMO_USER, REFRESH_PAGE } = userSlice.actions;

export default userSlice.reducer;
