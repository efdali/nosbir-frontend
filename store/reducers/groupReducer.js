import * as actions from '../actions/groupActions';

const initialState = {
  isLoading: false,
  isRejected: false,
  msg: '',
  groups: [],
};

export default function GroupReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCHING_GROUPS:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case actions.FETCHED_GROUPS:
      return Object.assign({}, state, {
        isLoading: false,
        isRejected: false,
        groups: action.groups,
      });
    case actions.REJECTED_GROUPS:
      return Object.assign({}, state, {
        isRejected: true,
        isLoading: false,
        groups: [],
        msg: action.msg,
      });
    default:
      return initialState;
  }
}
