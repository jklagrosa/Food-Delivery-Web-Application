import { createSlice } from "@reduxjs/toolkit";

const cwSlice = createSlice({
  name: "cw",
  initialState: {
    userWishList: false,
    userCart: false,
  },
  reducers: {
    openWishList: (state, action) => {
      state.userWishList = action.payload;
    },
    openCart: (state, action) => {
      state.userCart = action.payload;
    },
  },
});

export const {openWishList, openCart} = cwSlice.actions;

export default cwSlice.reducer;
