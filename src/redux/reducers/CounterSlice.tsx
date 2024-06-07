import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 1
};

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.number++
    },
    decrement(state) {
      state.number--
    }
  }
})

export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;