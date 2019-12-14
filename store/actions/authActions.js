import { toast } from "react-toastify";
import cookie from "js-cookie";
import jwt_decode from "jwt-decode";
import { setModalVisibility, LOGIN_MODAL } from "./modalActions";
export const AUTHENTICATE = "AUTHENTICATE";
export const authenticate = user => ({ type: AUTHENTICATE, user });
export const DEAUTHENTICATE = "DEAUTHENTICATE";
export const deauthenticate = () => ({ type: DEAUTHENTICATE });

export const login = (nick, passwd) => {
  if (!nick || !passwd) return;

  return (dispatch, getState, http) => {
    http
      .post("giris.php", {
        kadi: nick,
        sifre: passwd
      })
      .then(res => res.data)
      .then(res => {
        console.log(res);
        if (res.durum) {
          localStorage.setItem("token", res.token);
          cookie.set("token", res.token, { expires: 1 });
          const data = jwt_decode(res.token);
          dispatch(authenticate(data.data));
          dispatch(setModalVisibility(LOGIN_MODAL, false));
        } else {
          toast.warn(res.mesaj);
        }
      })
      .catch(err => toast.warn(err));
  };
};

export const register = (nick, passwd, email) => {
  if (!nick || !passwd || !email) return;

  return (dispatch, getState, http) => {
    http
      .post("kayit.php", {
        kadi: nick,
        sifre: passwd,
        eposta: email
      })
      .then(res => res.data)
      .then(res => {
        if (res.durum) {
          toast.success(res.mesaj);
          dispatch(setModalVisibility(LOGIN_MODAL, true));
        } else toast.warn(res.mesaj);
      })
      .catch(err => toast.warn(err));
  };
};
export const LOGOUT = "LOGOUT";
export const logout = () => dispatch => {
  localStorage.removeItem("token");
  cookie.remove("token");
  dispatch(deauthenticate());
};

export const changeImage = image => (dispatch, getState, http) => {
  if (!image) return false;
  var formData = new FormData();
  formData.append("resim", image);
  return http
    .post("profil_duzenle.php", formData)
    .then(res => {console.log(res); return res.data;})
    .then(res => {
      if (res.durum) {
        localStorage.setItem("token", res.token);
        cookie.set("token", res.token, { expires: 1 });
        const data = jwt_decode(res.token);
        dispatch(authenticate(data.data));
      }
      return res.durum;
    });
};
