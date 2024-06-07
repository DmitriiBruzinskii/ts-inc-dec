import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./reducers/CounterSlice";

const store = configureStore({
  reducer: {
    counter: CounterReducer
  }
});

export default store;