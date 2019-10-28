import React from 'react'
import {Link} from 'react-router-dom';
export default function LoggedAs() {
    return (
        <div className="logged-user-detail">
          <Link to="/profil/efdali">
            <i className="fas fa-user"></i>
            <h6>efdali</h6>
          </Link>
          <span>olarak oturum açıldı.</span>
          <Link to="/">
            <i className="fas fa-sign-out-alt"></i>Çıkış yap
          </Link>
        </div>
       
    )
}
