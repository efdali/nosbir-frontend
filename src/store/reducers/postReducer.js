import * as actions from "../actions/postAction";
const initialState = {
  posts: [],
  totalPost: 0,
  groups: [],
  post: {},
  comments: [],
  totalComments: 0
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SUCCESS_FETCH_GROUPS:
      return Object.assign({}, state, {
        groups: action.groups
      });
    case actions.SUCCESS_FETCH_POSTS:
      return Object.assign({}, state, {
        posts: action.posts,
        totalPost: action.total
      });
    case actions.SUCCESS_FETCH_MORE_POSTS:
      return Object.assign({}, state, {
        posts:[...state.posts,...action.posts],
        total:action.total
      });
    case actions.SUCCESS_FETCH_BY_ID:
      return Object.assign({}, state, {
        post: action.data,
        comments: action.comments,
        totalComments: action.totalComments
      });
    case actions.SUCCESS_FETCH_MORE_COMMENTS:
      return Object.assign({}, state, {
        comments: [...state.comments, ...action.comments]
      });
    case actions.SUCCESS_SHARE_COMMENT:
      return Object.assign({}, state, {
        comments: [action.newComment, ...state.comments]
      });
    default:
      return state;
  }
}
