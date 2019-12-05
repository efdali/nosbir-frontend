import * as actions from "../actions/authActions";
const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case actions.AUTHENTICATE:
      return Object.assign({}, state, {
        isAuthenticated: true,
        user: action.user
      });
    case actions.DEAUTHENTICATE:
      return Object.assign({}, state, {
        ...initialState
      });
    default:
      return state;
  }
}
