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

        // console.log(`WishList: ${state.userWishList}, ${state.userCart}`);
    },
    openCart: (state, action) => {
      //   state.userCart = action.payload;

      state.userCart = action.payload.cart;
      state.userWishList = action.payload.wish;

    //   console.log(`Cart: ${state.userCart}, ${state.userWishList}`);
    },
  },
});

export const { openWishList, openCart, resetWishAndCart } = cwSlice.actions;

export default cwSlice.reducer;
