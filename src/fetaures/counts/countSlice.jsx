import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: state => {
      state.count = state.count + 1
    },
    decrement: state => {
      state.count = state.count - 1
    },
    incrementBy5: (state, actions) => {
      state.count = state.count + actions.payload
    },
    reset: (state) => {
      state.count = 0
    }
  }
});
export const { increment, decrement, incrementBy5, reset } = counterSlice.actions;
export default counterSlice.reducer;