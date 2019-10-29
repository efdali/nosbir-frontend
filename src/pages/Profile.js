import React from "react";
import PostList from "../layouts/PostList";
import { Link, Switch, Route, NavLink, useParams } from "react-router-dom";
import CommentList from "../layouts/CommentList";
import Notifications from "./Notifications";
import { useSelector } from "react-redux";

export default function Profile() {
  const { username } = useParams();
  const kadi = useSelector(state => state.userReducer.user.kadi);
  let isAuthenticated = kadi === username;
  return (
    <React.Fragment>
      <div className="profile-top-panel">
        <div className="profile-top-panel-left">
          <img
            src="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-2-84x84.jpg"
            alt="username"
            width="50"
            height="50"
            className="img-rounded f_left"
          />
          <h3>Martin Hope</h3>
        </div>
        <ul className="profile-top-panel-right">
          <li>
            <button className="default-btn">
              <i className="fas fa-fire"></i> 3 Nos
            </button>
          </li>
          <li>
            <Link to="/" className="default-btn profile-default-btn">
              Mesaj
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link
                to="/profil-duzenle"
                className="default-btn profile-default-btn profile-edit-btn"
              >
                <i className="fas fa-user-edit"></i> Profili Düzenle
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="profile-route">
        <ul>
          <li>
            <NavLink exact to="/profil/martin" activeClassName="active">
              <i className="fas fa-fire-alt"></i> Noslar
            </NavLink>
          </li>
          <li>
            <NavLink to="/profil/martin/cevaplar">
              <i className="fas fa-fire-extinguisher"></i> Cevaplar
            </NavLink>
          </li>
          <li>
            <NavLink to="/profil/martin/begeniler">
              <i className="fas fa-dragon"></i> Beğeniler
            </NavLink>
          </li>
          {isAuthenticated && (
            <li>
              <NavLink to="/profil/martin/bildirimler">
                <i className="fas fa-bell"></i> Bildirimler
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <Switch>
        <Route path={`/profil/${username}/cevaplar`} component={CommentList} />
        <Route path={`/profil/${username}/begeniler`} component={PostList} />
        <Route
          path={`/profil/${username}/bildirimler`}
          component={Notifications}
        />
        <Route component={PostList} />
      </Switch>
    </React.Fragment>
  );
}
