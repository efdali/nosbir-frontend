import * as actions from "../actions/popularActions";
const initialState = {
  isLoading: false,
  isRejected: false,
  errorMsg: "",
  posts: []
};

export default function PopularReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCHING_POPULARS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case actions.POPULARS_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        isRejected: true,
        errorMsg: action.msg
      });
      case actions.POPULARS_SUCCESS:
          return {
              ...initialState,
              posts:action.populars
          }
    default:
      return state;
  }
}
