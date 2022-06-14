import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import c_w from "./c_w";
import dish from "./dish";
import wishNcart from "./wishNcart";

const store = configureStore({
  reducer: {
    c_w,
    dish,
    product: wishNcart,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
