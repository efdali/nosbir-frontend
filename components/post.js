import React from 'react';

const Post = props => {
  const { post } = props;
  return (
    <div className="post">
      <h1>{post.title}</h1>
    </div>
  );
};

export default Post;
