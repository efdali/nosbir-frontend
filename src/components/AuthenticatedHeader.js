import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
export default function AuthenticatedHeader(props) {
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
  const {user} =props;
  return (
    <div className="right-container header-signed-container">
      <div className="signed-user-info">
          <img
          onClick={toggleUserDropdown}
            src={user.resim}
            className="img-rounded"
            width="30"
            height="30"
            alt={user.kadi}
          />
        <div className="signed-user">
          <span>Hoşgeldin</span>
          <h3>
            <Link to={`/profil/${user.kadi}`}>{user.kadi}</Link>
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
              <Link to={`/profil/${user.kadi}`}>
                <i className="fas fa-user"></i>Profil
              </Link>
            </li>
            <li>
              <Link to="/profil-duzenle">
                <i className="fas fa-pen"></i>Profil Düzenle
              </Link>
            </li>
            <li>
              <Link to={`/profil/${user.kadi}/mesajlar`}>
                <i className="fas fa-envelope"></i>Mesajlar
              </Link>
            </li>
            <li>
              <Link to="/cikis">
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
              <p>Gift of the site - 20 Points.Gift of the site - 20 Points.</p>
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
          <Link to={`/profil/${user.kadi}/bildirimler`}>Bütün Bildirimleri Gör</Link>
        </div>
      </div>
    </div>
  );
}

AuthenticatedHeader.propTypes={
    user:PropTypes.object.isRequired
}