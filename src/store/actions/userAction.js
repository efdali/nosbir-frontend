import http, { setAuthToken } from "../../http";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { hideModal, LOGIN_MODAL, showModal } from "./modalAction";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
export const SET_REGISTER_ERRORS = "SET_REGISTER_ERRORS";
export const setLoginError = error => {
  return { type: SET_LOGIN_ERROR, error };
};
export const setRegisterErrors = error => {
  return { type: SET_REGISTER_ERRORS, error };
};
export const loginUser = user => ({ type: LOGIN, user });
export const login = userData => {
  return dispatch => {
    http
      .post("giris.php", userData)
      .then(res => {
        console.log(res);
        return res.data;
      })
      .then(res => {
        if (res.durum) {
          setAuthToken(res.token);
          localStorage.setItem("token", res.token);
          let decoded = jwt_decode(res.token);
          dispatch(loginUser(decoded.data));
          toast.success("Oturum Açıldı");
          dispatch(hideModal(LOGIN_MODAL));
        } else {
          dispatch(setLoginError(res.mesaj));
        }
      })
      .catch(error => {
        dispatch(setLoginError("Teknik bir hata oluştu!"));
      });
  };
};

export const logout = () => {
  localStorage.clear();
  return { type: LOGOUT };
};

export const register = userData => dispatch => {
  http
    .post("kayit.php", userData)
    .then(res => res.data)
    .then(res => {
      if (res.durum) {
        toast.success(res.mesaj);
        dispatch(showModal(LOGIN_MODAL));
      } else {
        dispatch(setRegisterErrors([res.mesaj]));
      }
    })
    .catch(error => {});
};
