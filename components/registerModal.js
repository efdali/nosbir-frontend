import React, { useState } from "react";
import Modal from "./modal";
import { useDispatch, useSelector } from "react-redux";
import {
  REGISTER_MODAL,
  setModalVisibility,
  LOGIN_MODAL
} from "../store/actions/modalActions";
import { register } from "../store/actions/authActions";
import { toast } from "react-toastify";
export default function RegisterModal() {
  const dispatch = useDispatch();
  const { isRegisterOpen } = useSelector(state => state.modal);
  const [nick, setNick] = useState("");
  const [passwd, setPasswd] = useState("");
  const [passwdAgain, setPasswdAgain] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const registerHandle = e => {
    e.preventDefault();

    const errors = [];
    if (!nick || !passwd || !passwdAgain || !email)
      errors.push("Boş alan bırakmayın.");

    if (nick.length > 15) errors.push("Nick 15 karakterden fazla olamaz.");

    if (passwd !== passwdAgain) errors.push("Şifreler uyuşmuyor.");

    if (!email.includes("@")) errors.push("Geçerli eposta adresi girin");

    setErrors(errors);
    if (errors.length > 0) {
      return;
    }

    dispatch(register(nick, passwd, email));
  };
  return (
    <Modal isOpen={isRegisterOpen} modal={REGISTER_MODAL}>
      <div className="register-modal modal-content">
        <ul>
          {errors.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
        <div className="form-wrapper">
          <form>
            <input
              type="text"
              value={nick}
              onChange={e => setNick(e.target.value)}
              className="default-input"
              placeholder="kullanıcı adı giriniz"
              required
              maxLength={15}
            />
            <input
              type="password"
              value={passwd}
              onChange={e => setPasswd(e.target.value)}
              className="default-input"
              placeholder="şifre giriniz"
              required
              minLength={6}
            />
            <input
              type="password"
              value={passwdAgain}
              onChange={e => setPasswdAgain(e.target.value)}
              className="default-input"
              placeholder="tekrar şifre giriniz"
              required
            />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="default-input"
              placeholder="eposta adresi giriniz"
              required
            />
            <button
              className="default-btn btn-register"
              onClick={registerHandle}
            >
              kayıt ol
            </button>
          </form>
        </div>
        <p className="already-member">
          zaten hesabın var mı?
          <button
            className="default-btn"
            onClick={() => dispatch(setModalVisibility(LOGIN_MODAL, true))}
          >
            giriş yap
          </button>
        </p>
        <p>Kayıt olarak kullanıcı sözleşmesini kabul etmiş olursunuz.</p>
      </div>
    </Modal>
  );
}
