import * as actions from "../actions/popularAction";
const initialState = {
  popular: [],
  loading: false,
  failMessage: ""
};

export default function popularReducer(state = initialState, action) {
  switch (action.type) {
    case actions.START_FETCH_POPULAR_POST:
      return Object.assign({}, state, {
        loading: true
      });
    case actions.REJECT_FETCH_POPULAR_POST:
      return Object.assign({}, state, {
        loading: false,
        failMessage: action.failMessage
      });
    case actions.FETCHED_POPULAR_POST:
      return Object.assign({}, state, {
        popular: action.popular,
        loading: false,
        failMessage: ""
      });
    default:
      return state;
  }
}
