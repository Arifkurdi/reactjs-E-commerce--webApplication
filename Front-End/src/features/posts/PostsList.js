import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, selectStatus, fetchPosts } from "./postsSlice";

export const PostsList = () => {
  const posts = useSelector(selectPosts);
  const postStatues = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (postStatues === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatues, dispatch]);

  const renderedPosts = posts.map((post) => {
    return (
      <article className="post-excerpt" key={post.id}>
        <h3>{post.title}</h3>
        <p className="post-content">{post.content.substring(0, 100)}</p>
      </article>
    );
  });

  console.log(posts);
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
