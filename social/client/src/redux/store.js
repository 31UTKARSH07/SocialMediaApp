import { configureStore } from "@reduxjs/toolkit";
import userSclice from "./userSclice.js";
const store = configureStore({
  reducer: {
    user: userSclice,
  },
});
export default store;