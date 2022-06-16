import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import c_w from "./c_w";
import dish from "./dish";
import wishNcart from "./wishNcart";
import user from "./user";

const store = configureStore({
  reducer: {
    c_w,
    dish,
    user,
    product: wishNcart,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
