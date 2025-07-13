import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./feature/viewSlice";
import countReducer from "./feature/counterSlice";

export const store = configureStore({
  reducer: {
    view: viewReducer,
    count: countReducer,
  },
});
