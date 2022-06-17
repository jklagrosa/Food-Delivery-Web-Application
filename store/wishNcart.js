import { createSlice } from "@reduxjs/toolkit";

const wishNcartSlice = createSlice({
  name: "wishNcart",
  initialState: {
    prod_wishlist: null,
    prod_cart: null,
    user_logout: false,
  },
  reducers: {
    GET_WISH_LIST: (state, action) => {
      state.prod_wishlist = action.payload;
    },
    GET_CART_ITEMS: (state, action) => {
      state.prod_cart = action.payload;
    },
    USER_LOGOUT: (state, action) => {
      state.user_logout = action.payload;
    },
  },
});

export const { GET_WISH_LIST, GET_CART_ITEMS, USER_LOGOUT } =
  wishNcartSlice.actions;

export default wishNcartSlice.reducer;
