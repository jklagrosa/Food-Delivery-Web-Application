import { createSlice } from "@reduxjs/toolkit";

const wishNcartSlice = createSlice({
  name: "wishNcart",
  initialState: {
    prod_wishlist: null,
    prod_cart: null,
  },
  reducers: {
    GET_WISH_LIST: (state, action) => {
      state.prod_wishlist = action.payload;
    },
    GET_CART_ITEMS: (state, action) => {
      state.prod_cart = action.payload;
    },
  },
});

export const { GET_WISH_LIST, GET_CART_ITEMS } = wishNcartSlice.actions;

export default wishNcartSlice.reducer;
