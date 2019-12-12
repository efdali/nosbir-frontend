import React, { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  setModalVisibility,
  LOGIN_MODAL,
  REGISTER_MODAL
} from "../store/actions/modalActions";
import { logout } from "../store/actions/authActions";
import NavbarBrand from "./navbarBrand";
import Image from "./image";
import NotificationPanel from "./notificationPanel";
import { toast } from "react-toastify";

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [notifPanelActive, setNotifPanelActive] = useState(false);
  return (
    <nav>
      <div className="navbar-top">
        <NavbarBrand />
        <ul className="navbar-right">
          <li>
            {!showSearch ? (
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  setShowSearch(true);
                }}
              >
                <img src="/search-icon2.png" alt="search on nosbir.com" />
              </a>
            ) : (
              <>
                <form method="GET" action="/arama" className="search-form">
                  <input type="text" placeholder="ne arıyorsun?" name="q" />
                </form>
                <button
                  className="default-btn"
                  onClick={() => setShowSearch(false)}
                >
                  &times;
                </button>
              </>
            )}
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <Link href="#">
                  <a
                    onClick={e => {
                      e.preventDefault();
                      toast.info(
                        "Mesajlaşma aktif değildir. En kısa sürede aktifleştirilecektir..."
                      );
                    }}
                  >
                    <img
                      src="/message-icon.png"
                      className="nav-icon"
                      alt="messages"
                    />
                  </a>
                </Link>
              </li>
              <li onMouseLeave={()=>setNotifPanelActive(false)}>
                <Link href="#">
                  <a
                    onClick={e => {
                      e.preventDefault();
                      setNotifPanelActive(!notifPanelActive);
                    }}
                  >
                    <img
                      src="/notification-icon.png"
                      className="nav-icon"
                      alt="notifications"
                    />
                  </a>
                </Link>
                <NotificationPanel active={notifPanelActive} nick={user.kadi} />
              </li>
              <li
                className="profile-item"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <Image
                  src={user.resim}
                  alt={user.kadi}
                  className="navbar-user-img"
                />
                <h3>
                  <Link href={`/u/@${user.kadi}`}>
                    <a>{user.kadi}</a>
                  </Link>
                </h3>
                <a
                  href="#"
                  className="profile-caret"
                  onClick={e => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                  }}
                >
                  &#9660;
                </a>
                <ul className={`profile-actions ${!isOpen ? "hidden" : ""}`}>
                  <li>
                    <Link href={`/u/@${user.kadi}`}>
                      <a>Profil</a>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        dispatch(logout());
                        router.reload();
                      }}
                    >
                      Çıkış
                    </a>
                  </li>
                </ul>
              </li>
            </>
          ) : (
            <>
              <li>
                <button
                  className="btn-login default-btn"
                  onClick={() =>
                    dispatch(setModalVisibility(LOGIN_MODAL, true))
                  }
                >
                  Giriş Yap
                </button>
              </li>
              <li>
                <button
                  className="btn-register default-btn"
                  onClick={() =>
                    dispatch(setModalVisibility(REGISTER_MODAL, true))
                  }
                >
                  Kayıt Ol
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="mobile-sub-header">
        <form method="get" action="/arama">
          <img src="/search-icon.png" alt="search" />
          <input type="text" name="q" />
        </form>
        <Link href="/">
          <a>
            <img src="/fire-nos-icon.png" alt="nosbir.com" />
          </a>
        </Link>
        <Link href="/gundem">
          <a>
            <img src="/trends-icon.png"></img>
          </a>
        </Link>
        <Link href="/gruplar">
          <a>
            <img src="/flash-icon.png"></img>
          </a>
        </Link>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            if (isAuthenticated) router.push("/yeni-post");
            else dispatch(setModalVisibility(LOGIN_MODAL, true));
          }}
        >
          <img src="/edit-post-icon.png"></img>
        </a>
      </div>
    </nav>
  );
};

export default Header;
