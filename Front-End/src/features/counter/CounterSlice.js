import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {state.value += 1},
    decrement: (state) => {state.value -= 1},
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// console.log(counterSlice.actions.increment());
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = (state) => state.counter.value;