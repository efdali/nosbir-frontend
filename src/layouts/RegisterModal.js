import React, { useState } from "react";
import Modal from "../components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  REGISTER_MODAL,
  LOGIN_MODAL,
  showModal
} from "../store/actions/modalAction";
import { register, setRegisterErrors } from "../store/actions/userAction";
import Errors from "../components/Errors";
import FormInput from "../components/FormInput";
import Loading from "../components/Loading";

export default function RegisterModal() {
  const isOpen = useSelector(state => state.modalReducer.registerModal.isOpen);
  const errors = useSelector(state => state.userReducer.registerErrors);
  const dispatch = useDispatch();
  const handleModal = e => {
    dispatch(showModal(LOGIN_MODAL));
    e.preventDefault();
  };
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [passwdTekrar, setPasswdTekrar] = useState("");
  const [termChecked, setTermChecked] = useState(true);
  const [loading, setLoading] = useState(false);
  const formElemans = [
    {
      name: "Kullanıcı Adı",
      icon: "user",
      value: name,
      onChange: e => setName(e.target.value)
    },
    {
      name: "Mail",
      icon: "envelope",
      type: "email",
      value: mail,
      onChange: e => setMail(e.target.value)
    },
    {
      name: "Şifre",
      icon: "unlock",
      type: "password",
      value: passwd,
      onChange: e => setPasswd(e.target.value)
    },
    {
      name: "Şifre Tekrar",
      icon: "lock",
      type: "password",
      value: passwdTekrar,
      onChange: e => setPasswdTekrar(e.target.value)
    }
  ];

  const handleRegister = e => {
    setLoading(true);
    e.preventDefault();
    let errors = [];
    if (!name || !mail || !passwd || !passwdTekrar) {
      errors.push("* Zorunlu alanlar boş.");
    }
    if (name.length >= 15) {
      errors.push("Kullanıcı Adı 14 karakterden uzun olamaz.");
    }
    if (passwd.length <= 6) {
      errors.push("Şifre 6 karakterden uzun olmalı.");
    }
    if (passwd !== passwdTekrar) {
      errors.push("Şifreler eşleşmiyor.");
    }
    if (mail.indexOf("@") === -1) {
      errors.push("Lütfen geçerli mail adresi girin.");
    }
    if (!termChecked) {
      errors.push(
        "Hizmet Şartlarını ve Gizlilik Politikasını kabul etmelisiniz!"
      );
    }

    if (errors.length > 0) {
      dispatch(setRegisterErrors(errors));
      setLoading(false);
      return false;
    } else {
      dispatch(
        register({
          kadi: name,
          sifre: passwd,
          eposta: mail
        })
      );
      setLoading(false);
    }
  };
  return (
    <Modal isOpen={isOpen} modal={REGISTER_MODAL}>
      <div className="form-container">
        <form onSubmit={handleRegister}>
          {formElemans.map((f, index) => (
            <FormInput {...f} key={index} />
          ))}
          <div className="form-footer">
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={termChecked}
                  onChange={e => setTermChecked(e.target.checked)}
                />
                <span className="remember-me">
                  Kayıt yaparak, <Link to="/">Hizmet Şartlarını</Link> ve{" "}
                  <Link to="/">Gizlilik Politikasını</Link> kabul etmiş
                  sayılırsınız<span className="required">*</span>
                </span>
              </label>
            </div>
          </div>
          {loading ? (
            <Loading />
          ) : (
            <button className="default-btn login-btn" onClick={handleRegister}>
              Kaydol
            </button>
          )}
          <Link to="/" className="footer-sign-link" onClick={handleModal}>
            Giriş Yap!
          </Link>
        </form>
        <Errors errors={errors} />
      </div>
    </Modal>
  );
}
