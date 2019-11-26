import * as actions from "../actions/groupActions";
const initialState = {
  isLoading: true,
  isRejected: false,
  groups: [],
  errorMsg: ""
};

export default function GroupReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCHING_GROUPS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case actions.GROUPS_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        isRejected: true,
        errorMsg: action.msg
      });
    case actions.GROUPS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isRejected: false,
        groups: action.groups
      });
    default:
      return state;
  }
}