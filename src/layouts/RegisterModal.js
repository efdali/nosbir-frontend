import React from "react";
import Modal from "../components/Modal";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { REGISTER_MODAL,LOGIN_MODAL,showModal } from "../store/actions/modalAction";
import FormInput from "../components/FormInput";

const formElemans = [
    {name:"Kullanıcı Adı",icon:"user"},
    {name:"Mail",icon:"envelope",type:"email"},
    {name:"Şifre",icon:"unlock",type:"password"},
    {name:"Şifre Tekrar",icon:"lock",type:"password"},
];

export default function RegisterModal() {
  const isOpen = useSelector(state => state.modalReducer.registerModal.isOpen);
  const dispatch=useDispatch();
  const handleModal=e=>{
        dispatch(showModal(LOGIN_MODAL));
        e.preventDefault();
  }
  return (
    <Modal isOpen={isOpen} modal={REGISTER_MODAL}>
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
                <span className="remember-me">
                  Kayıt yaparak, <Link to="/">Hizmet Şartlarını</Link> ve{" "}
                  <Link to="/">Gizlilik Politikasını</Link> kabul etmiş
                  sayılırsınız<span className="required">*</span>
                </span>
              </label>
            </div>
          </div>
          <button className="default-btn login-btn">Kaydol</button>
          <Link to="/" className="footer-sign-link" onClick={handleModal}>
              Giriş Yap!
          </Link>
        </form>
      </div>
    </Modal>
  );
}
