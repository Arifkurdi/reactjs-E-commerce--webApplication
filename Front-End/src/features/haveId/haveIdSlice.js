import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const haveIdSlice = createSlice({
  name: "haveId",
  initialState: {
    value: [],
    items: [],
  },
  reducers: {
    pushId: (state, action) => {
      state.value.push(action.payload);
    },
    clearIds: (state) => {
      state.value = [];
    },
  },
});

export const { pushId, clearIds } = haveIdSlice.actions;
export default haveIdSlice.reducer;
export const selectAllItems = (state) => state.items;
export const selectItemById = (state, itemId) => state.value.find(itemId);
export const fetchItems = createAsyncThunk();
export const selectHaveId = (state) => state.haveId.value;
