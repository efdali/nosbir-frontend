import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showModal,
  REGISTER_MODAL,
  LOGIN_MODAL
} from "../store/actions/modalAction";
import AuthenticatedHeader from "./AuthenticatedHeader";
export default function HeaderUser() {
  const userStore = useSelector(
    state => state.userReducer
  );
  const dispatch = useDispatch();
  const handleModal = (e, modelType) => {
    dispatch(showModal(modelType));
    e.preventDefault();
  };
  return (
    <Fragment>
      {userStore.isAuthenticated ? (
        <AuthenticatedHeader user={userStore.user}/>
      ) : (
        <div className="right-container sign-container">
          <button
            className="sign-btn sign-in"
            onClick={e => handleModal(e, LOGIN_MODAL)}
          >
            Giriş Yap
          </button>
          <button
            className="sign-btn sign-up"
            onClick={e => handleModal(e, REGISTER_MODAL)}
          >
            Kayıt Ol
          </button>
          <button
            className="mobile-sign-btn"
            onClick={e => handleModal(e, LOGIN_MODAL)}
          >
            <i className="fas fa-lock" />
          </button>
        </div>
      )}
    </Fragment>
  );
}
