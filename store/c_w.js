import { createSlice } from "@reduxjs/toolkit";

const cwSlice = createSlice({
  name: "cw",
  initialState: {
    userWishList: false,
    userCart: false,
  },
  reducers: {
    resetWishAndCart: (state, action) => {
      state.userWishList = false;
      state.userCart = false;
    },

    openWishList: (state, action) => {
      state.userWishList = action.payload.wish;
      state.userCart = action.payload.cart;
    },
    openCart: (state, action) => {
      state.userCart = action.payload.cart;
      state.userWishList = action.payload.wish;
    },
  },
});

export const { openWishList, openCart, resetWishAndCart } = cwSlice.actions;

export default cwSlice.reducer;
