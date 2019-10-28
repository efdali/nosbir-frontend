import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  showModal,
  REGISTER_MODAL,
  LOGIN_MODAL
} from "../store/actions/modalAction";
export default function HeaderUser() {
  const dispatch = useDispatch();
  const handleModal = (e, modelType) => {
    dispatch(showModal(modelType));
    e.preventDefault();
  };
  const [isNotifShow, setIsNotifShow] = useState(false);
  const [isUserShow, setIsUserShow] = useState(false);
  const toggleNotificationDropdown = () => {
    setIsUserShow(false);
    setIsNotifShow(!isNotifShow);
  };
  const toggleUserDropdown = () => {
    setIsNotifShow(false);
    setIsUserShow(!isUserShow);
  };
  return (
    <Fragment>
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
      <div
        className="right-container header-signed-container"
        style={{ display: "none" }}
      >
        <div className="signed-user-info">
          <Link to="/" onClick={toggleUserDropdown}>
            <img
              src="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-2-42x42.jpg"
              className="img-rounded"
              width="30"
              height="30"
              alt="userimage"
            />
          </Link>
          <div className="signed-user">
            <span>Hoşgeldin</span>
            <h3>
              <Link to="/profil/efdali">efdali</Link>
            </h3>
          </div>
          <div className="header-user-dropdown">
            <i
              className="fas fa-caret-square-down dropdown-icon"
              onClick={toggleUserDropdown}
            ></i>
          </div>
          <div
            className={
              (!isUserShow ? "hidden " : "") + "user-menu-dropdown dropdown"
            }
          >
            <ul>
              <li>
                <Link to="/profil/efdali">
                  <i className="fas fa-user"></i>Profil
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fas fa-pen"></i>Profil Düzenle
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fas fa-envelope"></i>Mesajlar
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fas fa-sign-out-alt"></i>Çıkış
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-notification">
          <i
            className="fas fa-bell notification-icon"
            onClick={toggleNotificationDropdown}
          ></i>
        </div>
        <div
          className={
            (!isNotifShow ? "hidden" : "") + " notification-dropdown dropdown"
          }
        >
          <ul>
            <li>
              <Link to="/">
                <i className="fas fa-bell f_left"></i>
                <p>
                  Gift of the site - 20 Points.Gift of the site - 20 Points.
                </p>
                <p className="notification-date">October 16, 2019 at 1:47 pm</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fas fa-bell f_left"></i>
                <p>Gift of the site - 20 Points.</p>
                <p className="notification-date">October 16, 2019 at 1:47 pm</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fas fa-bell f_left"></i>
                <p>Gift of the site - 20 Points.</p>
                <p className="notification-date">October 16, 2019 at 1:47 pm</p>
              </Link>
            </li>
          </ul>
          <div className="notification-show-all">
            <Link to="/">Bütün Bildirimleri Gör</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
