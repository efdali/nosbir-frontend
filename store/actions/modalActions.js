export const LOGIN_MODAL = "LOGIN_MODAL";
export const REGISTER_MODAL = "REGISTER_MODAL";

export const SET_LOGIN_MODAL = "SET_LOGIN_MODAL";
export const setLoginModal = isOpen => ({ type: SET_LOGIN_MODAL, isOpen });

export const SET_REGISTER_MODAL = "SET_REGISTER_MODAL";
export const setRegisterModal = isOpen => ({
  type: SET_REGISTER_MODAL,
  isOpen
});

export const setModalVisibility = (modal, isOpen) => dispatch => {
  if (modal === LOGIN_MODAL) dispatch(setLoginModal(isOpen));
  else dispatch(setRegisterModal(isOpen));
};