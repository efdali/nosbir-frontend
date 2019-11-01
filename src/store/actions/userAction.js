import http, { setAuthToken } from "../../utils/http";
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
export const loginUser = user => {
  return { type: LOGIN, user };
};
export const login = userData => {
  return dispatch => {
    http
      .post("giris.php", userData)
      .then(res => res.data)
      .then(res => {
        if (res.durum) {
          localStorage.setItem("token", res.token);
          setAuthToken(res.token);
          let user = jwt_decode(res.token).data;
          dispatch(loginUser(user));
          toast.success("Oturum Açıldı");
          dispatch(hideModal(LOGIN_MODAL));
        } else {
          dispatch(setLoginError(res.mesaj));
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(setLoginError("Teknik bir hata oluştu!"));
      });
  };
};

export const logout = message => dispatch => {
  localStorage.removeItem("token");
  setAuthToken(false);
  toast.warn(message ? message : "Çıkış Yapıldı");
  dispatch(clearUser());
};
export const clearUser = () => {
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

export const saveUserProfileInfo = (nick, picture) => dispatch => {
  const data = new FormData();
  data.append("kadi", nick);
  data.append("resim", picture);

  http
    .post("profil_duzenle.php", data)
    .then(res => res.data)
    .then(res => {
      if (res.durum) {
        localStorage.setItem("token", res.token);
        setAuthToken(res.token);
        let user = jwt_decode(res.token).data;
        dispatch(loginUser(user));
        toast.success("Bilgileriniz Güncellendi");
      } else {
        console.log(res);
      }
    })
    .catch(err => console.log(err));
};

export const changeUserPassword = (oldPasswd, newPasswd) => dispatch => {
  http
    .post("profil_dsifre.php", {
      eskiSifre: oldPasswd,
      yeniSifre: newPasswd
    })
    .then(res => res.data)
    .then(res => {
      if (res.durum) {
        dispatch(logout("Güvenliğiniz için tekrardan giriş yapmalısınız.Oturumunuz sonlandırıldı"));
      } else {
        console.log(res);
      }
    })
    .catch(err => console.log(err));
};
