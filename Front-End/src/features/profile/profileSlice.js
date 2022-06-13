import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    username: "",
    email: "",
    phone: "",
    sign: false,
  },
  reducers: {
    setValues: (state, action) => {
      state.username = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.sign = true;
    },
  },
});

export const { setValues } = profileSlice.actions;
export default profileSlice.reducer;
export const selectName = (state) => state.profile.username;
export const selectEmail = (state) => state.profile.email;
export const selectPhone = (state) => state.profile.phone;
export const selectSign = (state) => state.profile.sign;
