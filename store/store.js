import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import c_w from "./c_w";
import dish from "./dish";

const store = configureStore({
  reducer: {
    c_w,
    dish,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
