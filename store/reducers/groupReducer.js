import * as actions from '../actions/groupActions';

const initialState = {
  group_loading: false,
  group_rejected: false,
  group_msg: '',
  group_groups: [],
};

export default function GroupReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCHING_GROUPS:
      return Object.assign({}, state, {
        group_loading: true,
        group_rejected:false
      });
    case actions.FETCHED_GROUPS:
      return Object.assign({}, state, {
        group_loading: false,
        group_rejected: false,
        group_groups: action.groups,
      });
    case actions.REJECTED_GROUPS:
      return Object.assign({}, state, {
        group_rejected: true,
        group_loading: false,
        group_msg: action.msg,
      });
    default:
      return initialState;
  }
}
