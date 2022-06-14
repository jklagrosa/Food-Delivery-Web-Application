import { createSlice } from "@reduxjs/toolkit";

const wishNcartSlice = createSlice({
  name: "wishNcart",
  initialState: {
    prod_wishlist: null,
  },
  reducers: {
    GET_WISH_LIST: (state, action) => {
      state.prod_wishlist = action.payload;
    },
  },
});

export const { GET_WISH_LIST } = wishNcartSlice.actions;

export default wishNcartSlice.reducer;
