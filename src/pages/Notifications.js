import React from "react";
import { Link,useHistory } from "react-router-dom";
import {useSelector} from 'react-redux';
export default function Notifications() {
  const history=useHistory();
  const isAuthenticated=useSelector(state=>state.userReducer.isAuthenticated);
  if(!isAuthenticated){
    history.goBack();
    return false;
  }
  return (
    <div className="notification-panel notification-dropdown">
      <h1 className="padding-h1"><i className="far fa-bell"></i> Tüm Bildirimler</h1>
      <ul>
        <li>
          <Link to="/">
            <i className="fas fa-bell f_left"></i>
            <p>
              Gift of the site - 20 Points.Gift of the site - 20 Points. Gift of
              the site - 20 Points.Gift of the site - 20 Points.Gift of the site
              - 20 Points.Gift of the site - 20 Points.Gift of the site - 20
              Points.Gift of the site - 20 Points.Gift of the site - 20 Points.Gift of the site - 20 Points. Gift of
              the site - 20 Points.Gift of the site - 20 Points.Gift of the site
              - 20 Points.Gift of the site - 20 Points.Gift of the site - 20
              Points.Gift of the site - 20 Points.
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
    </div>
  );
}
