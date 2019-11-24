import React from 'react';
import Post from './post';
import Loading from './loading';
import Error from './error';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../store/actions/postsActions';
const PostList = props => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPosts(props.group));
  }, []);
  const state = useSelector(state => state.posts);
  if (state.isLoading) return <Loading />;
  else if (state.isRejected) return <Error msg={state.msg} />;
  return (
    <div className="post-list">
      {state.posts.map((p, i) => (
        <Post post={p} key={i} />
      ))}
      <button>Daha Fazla Nos</button>
    </div>
  );
};

export default PostList;
