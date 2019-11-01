import React from "react";
import Post from "../components/Post";
import PropTypes from "prop-types";
export default function PostList(props) {
  const { posts,noPostError } = props;
  if (posts.length <= 0) {
    return (
      <div className="post-container">
        <div className="alert alert-warning">
          {noPostError}
        </div>
      </div>
    );
  }
  return (
    <div className="post-container">
      {posts.map((p, i) => (
        <Post post={p} key={i} />
      ))}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};
PostList.defaultProps = {
  posts: [],
  noPostError:'Henüz paylaşılmış nos yok.İlk noslayan sen ol.'
};
