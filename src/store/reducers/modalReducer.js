import * as actions from "../actions/modalAction";
const initialState = {
  registerModal: {
    isOpen: false
  },
  loginModal: {
    isOpen: false
  }
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SHOW_REGISTER_MODAL:
      return Object.assign({}, state, {
        loginModal: { isOpen: false },
        registerModal: { isOpen: true }
      });
    case actions.SHOW_LOGIN_MODAL:
      return Object.assign({}, state, {
        registerModal: { isOpen: false },
        loginModal: { isOpen: true }
      });
    case actions.HIDE_REGISTER_MODAL:
      return Object.assign({}, state, {
        registerModal: { isOpen: false }
      });
    case actions.HIDE_LOGIN_MODAL:
      return Object.assign({}, state, {
        loginModal: { isOpen: false }
      });
    default:
      return state;
  }
}
