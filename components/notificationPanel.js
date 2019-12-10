import React, { useEffect, useState } from "react";
import Link from "next/link";
import http from "../utils/http";
import Loading from "./loading";
export default function NotificationPanel({ active, nick }) {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const notViewed=notifications.filter(n=>n.is_viewed==0).length;
  useEffect(() => {
    if (notifications.length === 0 && active) {
      setLoading(true);
      http
        .get("bildirimler.php")
        .then(res => res.data)
        .then(res => {
          console.log(res);
          if (res.durum) setNotifications(res.bildirimler);
          setLoading(false);
        })
        .catch(err => setLoading(false));
    }
  }, [active]);
  return (
    <div className={`notification-panel ${active ? "active" : ""}`}>
      <ul>
        {notViewed > 0 && (
          <li className="not-viewed-number">
            <img src="/notification-icon.png" alt="bildirimler" />
            {notViewed} adet okunmamış bildiriminiz var.
          </li>
        )}
        {isLoading && <Loading />}
        {notifications.length > 0 &&
          notifications.map((n, i) => (
            <li className={n.is_viewed ? "not-viewed" : ""} key={i}>
              <Link href={`/${n.url}`}>
                <a>{n.content}</a>
              </Link>
            </li>
          ))}
        {notifications.length === 0 && !isLoading && <li>Bildiriminiz yok.</li>}
      </ul>
      <Link href={`/u/@${nick}/bildirimler`}>
        <a>Bütün bildirimleri gör</a>
      </Link>
      <style jsx>{`
        .notification-panel {
          position: absolute;
          top: 100%;
          width: 300px;
          height: 260px;
          background-color: #fff;
          z-index: 999;
          display: none;
          overflow-y: auto;
        }
        .notification-panel.active {
          display: block;
        }
        .notification-panel ul {
          list-style: initial;
          list-style-position: inside;
          margin-bottom: 10px;
        }
        .notification-panel ul li {
          padding: 5px;
          border-bottom: 1px solid #ddd;
          font-family: Tekton-pro;
          font-weight: bold;
          height: 35px;
          line-height: 24px;
          overflow: hidden;
        }
        .notification-panel ul li.not-viewed-number {
          list-style: none;
          font-weight: 200;
          font-size: var(--small-font-size);
        }
        .notification-panel ul li.not-viewed-number img{
          width:25px;
          height:25px;
          background-color:#000;
          margin-right:10px;
        }
        .notification-panel ul li.not-viewed,
        .notification-panel ul li.not-viewed > a {
          background-color: var(--main-gray-color);
          color: #fff;
        }
        .notification-panel > a {
          position: absolute;
          bottom: 0;
          background-color: var(--main-red-color);
          color: #fff;
          width: 100%;
          padding: 8px 0;
          text-align: center;
          z-index: 99;
          font-size: var(--small-font-size);
          text-decoration: underline;
        }
        @media(max-width:740px){
          .notification-panel{
            width:250px;
            height:220px;
          }
        }
        @media(max-width:490px){
          .notification-panel a{
            background-color:#000;
          }
        }
      `}</style>
    </div>
  );
}
