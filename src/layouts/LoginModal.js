import React from "react";
import Modal from "../components/Modal";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LOGIN_MODAL, showModal, REGISTER_MODAL } from "../store/actions/modalAction";
import FormInput from "../components/FormInput";

const formElemans=[
  {name:"Kullanıcı Adı",icon:"user"},
  {name:"Şifre",icon:"unlock",type:"password"}
]

export default function LoginModal() {
  const isOpen = useSelector(state => state.modalReducer.loginModal.isOpen);
  const dispatch=useDispatch();
  const handleModal=(e)=>{
    dispatch(showModal(REGISTER_MODAL));
    e.preventDefault();
  }
  return (
    <Modal isOpen={isOpen} modal={LOGIN_MODAL}>
      <div className="form-container">
        <form>
          {
            formElemans.map((f,index)=>(
              <FormInput {...f} key={index}/>
            ))
          }
          <div className="form-footer">
            <div>
              <label>
                <input type="checkbox" defaultChecked/>
                <span className="remember-me">Beni Hatırla!</span>
              </label>
            </div>
            <div>
              <Link to="/" className="forget-password">
                Şifremi Unuttum?
              </Link>
            </div>
          </div>
          <button className="default-btn login-btn">Giriş Yap</button>
          <Link to="/" className="footer-sign-link" onClick={handleModal}>Kayıt Ol!</Link>
        </form>
      </div>
    </Modal>
  );
}
