import React from "react";
import { Link } from "react-router-dom";
export default function User() {
  return (
    <div className="user-container">
      <img
        src="https://secure.gravatar.com/avatar/b948e8ff0c4594e227d11473adb0c752?s=96&d=mm&r=g"
        alt="user"
        className="img-rounded edit-profile-img"
        width="50"
        height="50"
      />
      <h2>
        <Link to="/profil/efdali">efdali</Link>
      </h2>

      <ul className="user-meta-container">
        <li>
          <i className="fas fa-fire-alt"></i> 0 Nos
        </li>
        <li>
          <i className="fas fa-fire-extinguisher"></i> 0 Cevap
        </li>
        <li>
          <i className="fas fa-calendar-day"></i> 20 günlük üye
        </li>
      </ul>
      <Link to="/profil/efdali" className="default-btn default-btn2 mt-2 mb-2">Profili Görüntüle</Link>
    </div>
  );
}
