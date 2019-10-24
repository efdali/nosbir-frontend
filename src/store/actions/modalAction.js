export const HIDE_REGISTER_MODAL = "HIDE_REGISTER_MODAL";
export const HIDE_LOGIN_MODAL = "HIDE_LOGIN_MODAL";
export const SHOW_LOGIN_MODAL = "SHOW_LOGIN_MODAL";
export const SHOW_REGISTER_MODAL = "SHOW_REGISTER_MODAL";
export const REGISTER_MODAL = "REGISTER_MODAL";
export const LOGIN_MODAL = "LOGIN_MODAL";

export const showModal = modalType => {
  return dispatch => {
    if (modalType === REGISTER_MODAL) dispatch({ type: SHOW_REGISTER_MODAL });
    else if (modalType === LOGIN_MODAL) dispatch({ type: SHOW_LOGIN_MODAL });
  };
};

export const hideModal = modalType => {
  return dispatch => {
    if (modalType === REGISTER_MODAL) dispatch({ type: HIDE_REGISTER_MODAL });
    else if (modalType === LOGIN_MODAL) dispatch({ type: HIDE_LOGIN_MODAL });
  };
};
