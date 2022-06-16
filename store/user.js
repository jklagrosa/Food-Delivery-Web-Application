import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
  },
  reducers: {
    DEMO_USER: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { DEMO_USER } = userSlice.actions;

export default userSlice.reducer;
