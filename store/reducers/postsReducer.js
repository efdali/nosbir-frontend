import * as actions from '../actions/postsActions.js';
const initialState = {
  post_loading: false,
  post_rejected: false,
  post_msg: '',
  post_posts: [],
  post_total: 0,
};

export default function PostsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCHING_POSTS:
      return Object.assign({}, state, {
        post_loading: true,
        post_rejected: false,
      });
    case actions.REJECTED_POSTS:
      return Object.assign({}, state, {
        post_loading: false,
        post_rejected: true,
        post_msg: action.msg,
      });
    case actions.FETCHED_POSTS:
      return Object.assign({}, state, {
        post_loading: false,
        post_rejected: false,
        post_posts: action.posts,
        post_total: action.total,
      });
    default:
      return initialState;
  }
}
