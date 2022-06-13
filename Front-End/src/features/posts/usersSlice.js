import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: [
    { id: "1", name: "Arif" },
    { id: "2", name: "Omer" },
  ],
  reducers: {},
});

export default usersSlice.reducer;

export const selectUsers = (state) => state.users;
