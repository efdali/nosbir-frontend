import React from "react";
import Post from "../components/Post";
import LoadMoreButton from "../components/LoadMoreButton";
export default function PostList(props) {
  return (
      <div className="post-container">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <LoadMoreButton text="Daha Fazla NOS"/>
      </div>
  );
}
