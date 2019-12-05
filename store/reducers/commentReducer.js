import * as actions from "../actions/commentActions";

const initialState = {
  comments: [],
  total: 0,
  isLoading: false,
  isRejected: false,
  errorMsg: ""
};

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCHING_COMMENTS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case actions.COMMENTS_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        isRejected: true,
        errorMsg: action.msg
      });
    case actions.COMMENTS_SUCCESS:
      return Object.assign({}, state, {
        ...initialState,
        comments: action.comments,
        total: action.total
      });
      case actions.ADD_COMMENT:
        return Object.assign({},state,{
          comments:[action.newComment,...state.comments]
        });
    default:
      return state;
  }
}
