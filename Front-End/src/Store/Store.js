import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";
import haveIdReducer from "../features/haveId/haveIdSlice";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/posts/usersSlice";
import productReducer from "../features/product/productSlice";
import profileReducer from "../features/profile/profileSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    haveId: haveIdReducer,
    posts: postsReducer,
    users: usersReducer,
    product: productReducer,
    profile: profileReducer,
  },
});

// console.log()
