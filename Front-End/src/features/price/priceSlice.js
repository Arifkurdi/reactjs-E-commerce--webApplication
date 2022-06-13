import { createSlice } from "@reduxjs/toolkit";

export const priceSlice = createSlice({
  name: "price",
  initialState: {
    value: [],
    allPrices: 0,
  },
  reducers: {
    addPrice: (state, action) => {
      state.value.push(action.payload);
    },
    collectPrice: (state) => {
      for (let i = 0; i < state.value.length; i++) {
        state.allPrices += state.value[i];
      }
    },
  },
});

export const { addPrice, collectPrice } = priceSlice.actions;
export default priceSlice.reducer;

export const selectPrice = (state) => state.price.value;
export const selectAllPrice = (state) => state.price.allPrices;
