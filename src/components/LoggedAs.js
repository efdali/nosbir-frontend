import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function LoggedAs() {
  const kadi = useSelector(
    state => state.userReducer.user.kadi
  );
  if(!kadi){
    return false;
  }
  return (
    <div className="logged-user-detail">
      <Link to="/profil/efdali">
        <i className="fas fa-user"></i>
        <h6>{kadi}</h6>
      </Link>
      <span>olarak oturum açıldı.</span>
      {/* <Link to="/">
            <i className="fas fa-sign-out-alt"></i>Çıkış yap
          </Link> */}
    </div>
  );
}
