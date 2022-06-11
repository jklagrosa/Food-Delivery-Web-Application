import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import c_w from "./c_w";

const store = configureStore({
  reducer: {
    c_w,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
