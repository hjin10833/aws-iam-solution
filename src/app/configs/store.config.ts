import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "@/stores";

const store = configureStore({
  reducer: Reducer,
});

export default store;
