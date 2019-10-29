import React, { useState } from "react";
import Modal from "../components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  LOGIN_MODAL,
  showModal,
  REGISTER_MODAL
} from "../store/actions/modalAction";
import { setLoginError } from "../store/actions/userAction";
import Error from "../components/Error";
import FormInput from "../components/FormInput";
import { login } from "../store/actions/userAction";
import Loading from "../components/Loading";
export default function LoginModal() {
  const isOpen = useSelector(state => state.modalReducer.loginModal.isOpen);
  const dispatch = useDispatch();
  const handleModal = e => {
    dispatch(showModal(REGISTER_MODAL));
    e.preventDefault();
  };
  const [name, setName] = useState("");
  const [passwd, setPasswd] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const error = useSelector(state => state.userReducer.loginError);
  const [loading, setLoading] = useState(false);
  const handleLogin = e => {
    e.preventDefault();
    setLoading(true);
    if (!name || !passwd) {
      dispatch(setLoginError("Kullanıcı Adı veya Şifre Boş Bırakılamaz."));
      setLoading(false);
      return false;
    }
    dispatch(setLoginError());
    setLoading(false);
    dispatch(login({ kadi: name, sifre: passwd }));
  };
  return (
    <Modal isOpen={isOpen} modal={LOGIN_MODAL}>
      <div className="form-container">
        <form onSubmit={handleLogin}>
          <FormInput name="Kullanıcı Adı" icon="user">
            <input
              className="default-input"
              value={name}
              type="text"
              onChange={e => setName(e.target.value)}
            />
          </FormInput>
          <FormInput name="Şifre" icon="unlock">
            <input
              className="default-input"
              value={passwd}
              type="password"
              onChange={e => setPasswd(e.target.value)}
            />
          </FormInput>
          <div className="form-footer">
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                />
                <span className="remember-me">Beni Hatırla!</span>
              </label>
            </div>
            <div>
              <Link to="/" className="forget-password">
                Şifremi Unuttum?
              </Link>
            </div>
          </div>
          {loading ? (
           <Loading/> 
          ) : (
            <button className="default-btn login-btn" onClick={handleLogin}>
              Giriş Yap
            </button>
          )}

          <Link to="/" className="footer-sign-link" onClick={handleModal}>
            Kayıt Ol!
          </Link>
        </form>
        <Error error={error} />
      </div>
    </Modal>
  );
}
