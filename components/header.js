import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Search from "./search";
const Header = () => {
  const { isAuthenticated, user } = useSelector(state => state.auth);
  return (
    <React.Fragment>
      <nav>
        <div className="navbar-brand">
          <Link href="/">
            <a>
              <img
                src="/header-logo.png"
                className="navbar-logo"
                alt="Nosbir"
              />
            </a>
          </Link>
          <h1>
            <Link href="/">
              <a>nosbir</a>
            </Link>
          </h1>
        </div>
        {isAuthenticated ? (
          <ul className="navbar-profile">
            <li>
              <Link href="#">
                <a>
                  <img
                    src="/message-icon.png"
                    className="nav-icon"
                    alt="messages"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <img
                    src="/notification-icon.png"
                    className="nav-icon"
                    alt="notifications"
                  />
                </a>
              </Link>
            </li>
            <li className="profile-item">
              <img src={user.img} alt={user.nick} className="navbar-user-img" />
              <h3>
                <Link href={`@${user.nick}`}>
                  <a>{user.nick}</a>
                </Link>
              </h3>
            </li>
          </ul>
        ) : (
          <ul className="header-btns">
            <li>
              <button className="btn-login">Giriş Yap</button>
            </li>
            <li>
              <button className="btn-register">Kayıt Ol</button>
            </li>
          </ul>
        )}
      </nav>
      <Search/>
    </React.Fragment>
  );
};

export default Header;