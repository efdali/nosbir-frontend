import * as actions from '../actions/postsActions.js';
const initialState = {
  isLoading: false,
  isRejected: false,
  msg: '',
  posts: [],
  total: 0,
};

export default function PostsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCHING_POSTS:
      return Object.assign({}, state, {
        isLoading: true,
        isRejected: false,
      });
    case actions.REJECTED_POSTS:
      return Object.assign({}, state, {
        isLoading: false,
        isRejected: true,
        msg: action.msg,
      });
    case actions.FETCHED_POSTS:
      return Object.assign({}, state, {
        isLoading: false,
        isRejected: false,
        posts: action.posts,
        total: action.total,
      });
    default:
      return initialState;
  }
}
