import * as actions from "../actions/userAction";
import jwt_decode from 'jwt-decode';
const initialState = {
  isAuthenticated: !!localStorage.getItem("token"),
  user: localStorage.getItem("token") ? jwt_decode(localStorage.getItem("token")).data:{},
  loginError: "",
  registerErrors: []
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN:
      return Object.assign({}, state, {
        isAuthenticated: true,
        user: action.user
      });
    case actions.SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.error
      });
      case actions.REGISTER:
          return state;
    case actions.SET_REGISTER_ERRORS:
      return Object.assign({}, state, {
        registerErrors: action.error
      });
      case actions.LOGOUT:
        return initialState;
    default:
      return state;
  }
}
