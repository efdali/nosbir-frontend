import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { withAuth } from "../utils/auth";
import http from "../utils/http";
import Loading from "../components/loading";
function Notifications({ data }) {
  const [notifications, setNotifications] = useState(data);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (data.length === 0) {
      setLoading(true);
      http
        .get("bildirimler.php", { params: { howMany: "all" } })
        .then(res => setNotifications(res.data.bildirimler))
        .then(() => setLoading(false))
        .catch(err => setLoading(false));
    }
  }, []);
  return (
    <>
      <Head>
        <title>Bildirimlerim</title>
      </Head>
      <div className="content">
        {isLoading && <Loading />}
        {notifications.length > 0 && !isLoading && (
          <ul>
            {notifications.map((n, i) => (
              <li key={i}>
                <Link href={`/${n.link}`}>
                  <a>{n.content}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
Notifications.getInitialProps = async ctx => {
  const data = await http
    .get("bildirimler.php", {
      params: {
        howMany: "all"
      }
    })
    .then(res => {
      if (res.durum) return res.data.bildirimler;
      else return [];
    });

  return {
    data
  };
};
export default withAuth(Notifications);
