import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnClickOutside from 'use-onclickoutside'
function NotificationDropdown(props) {
  const [isNotifShow, setIsNotifShow] = useState(false);
  const ref = React.useRef(null)
  useOnClickOutside(ref, isNotifShow)
  const { kadi } = props;
  return (
    <div ref={ref} >
      <div className="header-notification">
        <i
          className="fas fa-bell notification-icon"
          onClick={() => setIsNotifShow(!isNotifShow)}
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
          <Link to={`/profil/${kadi}/bildirimler`}>Bütün Bildirimleri Gör</Link>
        </div>
      </div>
    </div>
  );
}
export default NotificationDropdown;
