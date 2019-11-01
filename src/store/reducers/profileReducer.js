import * as actions from "../actions/profileAction";
const initialState = {
  profile: {},
  post: [],
  total: 0,
  comments: [],
  totalComment:0
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCHED_USER_POSTS:
      return Object.assign({}, state, {
        profile: action.profile,
        post: action.post,
        total: action.total
      });
    case actions.FETCHED_USER_ANSWERS:
      return Object.assign({}, state, {
        profile:action.profile,
        comments: action.comments,
        totalComment:action.totalComment
      });
    default:
      return state;
  }
}
