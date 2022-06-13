import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid,
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
          },
        };
      },
    },
  },
});

export const { postAdded } = postsSlice.actions;

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (state) => {
    const res = await fetch("http://localhost:8000/posts")
      .then((data) => data.json())
      .catch((err) => console.log(err));
    state.posts.posts.push(res);
    console.log(res);
    // state.posts.posts.push(res);
    return res;
  }
);

export default postsSlice.reducer;

export const selectPosts = (state) => state.posts.posts;
export const selectPostById = (state, postId) => {
  state.posts.posts.find((post) => post.id == postId);
};
export const selectStatus = (state) => state.posts.status;
