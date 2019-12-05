import * as actions from "../actions/modalActions";
const initialState = {
  isLoginOpen: false,
  isRegisterOpen: false
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_LOGIN_MODAL:
      return Object.assign({}, state, {
        isLoginOpen: action.isOpen,
        isRegisterOpen: false
      });
    case actions.SET_REGISTER_MODAL:
      return Object.assign({}, state, {
        isRegisterOpen: action.isOpen,
        isLoginOpen: false
      });
    default:
      return state;
  }
}
