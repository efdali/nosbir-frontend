import * as actions from "../actions/postActions";
const initialState = {
  posts: [],
  total: 0,
  isLoading: false,
  isRejected: false,
  errorMsg: ""
};

export default function PostReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCHING_POSTS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case actions.POSTS_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        isRejected: true,
        errorMsg: action.msg
      });
    case actions.POSTS_SUCCESS:
      return {
        ...initialState,
        posts: action.posts,
        total: action.total
      };
    default:
      return initialState;
  }
}
