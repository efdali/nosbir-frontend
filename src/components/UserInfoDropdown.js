import React, { useState } from "react";
import { Link } from "react-router-dom";
import onClickOutside from "react-onclickoutside";
function UserInfoDropdown(props) {
  const [isUserShow, setIsUserShow] = useState(false);
  const { kadi } = props;
  UserInfoDropdown.handleClickOutside = () => alert("çık")
  return (
    <React.Fragment>
      <div className="header-user-dropdown">
        <i
          className="fas fa-caret-square-down dropdown-icon"
          onClick={() => setIsUserShow(!isUserShow)}
        ></i>
      </div>
      <div
        className={
          (!isUserShow ? "hidden " : "") + "user-menu-dropdown dropdown"
        }
      >
        <ul>
          <li>
            <Link to={`/profil/${kadi}`}>
              <i className="fas fa-user"></i>Profil
            </Link>
          </li>
          <li>
            <Link to="/profil-duzenle">
              <i className="fas fa-pen"></i>Profil Düzenle
            </Link>
          </li>
          <li>
            <Link to={`/profil/${kadi}/mesajlar`}>
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
    </React.Fragment>
  );
}
const clickOutsideConfig = {
  handleClickOutside: () => UserInfoDropdown.handleClickOutside
};
export default onClickOutside(UserInfoDropdown, clickOutsideConfig);
