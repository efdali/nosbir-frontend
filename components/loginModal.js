import React, { useState } from "react";
import Link from "next/link";
import Router, { useRouter } from 'next/router';
import Modal from "./modal";
import { useDispatch, useSelector } from "react-redux";
import {
  LOGIN_MODAL,
  setModalVisibility,
  REGISTER_MODAL
} from "../store/actions/modalActions";
import { login } from "../store/actions/authActions";
export default function LoginModal() {
  const dispatch = useDispatch();
  const router=useRouter();
  const { isLoginOpen } = useSelector(state => state.modal);
  const [nick, setNick] = useState("");
  const [passwd, setPasswd] = useState("");
  const loginHandle = async e => {
    e.preventDefault();

    if (!nick || !passwd) {
      return;
    }
    dispatch(login(nick, passwd));
  };
  return (
    <Modal isOpen={isLoginOpen} modal={LOGIN_MODAL}>
      <div className="login-modal modal-content">
        <div className="form-wrapper">
          <form>
            <input
              type="text"
              value={nick}
              onChange={e => setNick(e.target.value)}
              className="default-input"
              placeholder="kullanıcı adınızı giriniz"
              required
            />
            <input
              type="password"
              value={passwd}
              onChange={e => setPasswd(e.target.value)}
              className="default-input"
              placeholder="şifrenizi giriniz"
              required
            />
            <button className="default-btn btn-login" onClick={loginHandle}>
              giriş yap
            </button>
          </form>
        </div>
        <p className="not-member">
          üye değil misin?
          <button
            className="default-btn"
            onClick={() => dispatch(setModalVisibility(REGISTER_MODAL, true))}
          >
            üye ol
          </button>
        </p>
        <ul className="login-footer">
          <li>
            <Link href="/">
              <a>şifremi unuttum</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>kullanıcı adımı unuttum</a>
            </Link>
          </li>
        </ul>
      </div>
    </Modal>
  );
}
