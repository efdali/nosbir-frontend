import React from "react";
import Head from "next/head";
import GroupSidebar from "../components/groupSidebar";
import Post from "../components/post";
import http from "../utils/http";
import Loading from "../components/loading";
import { withAuth } from "../utils/auth";
function Trends(props) {
  return (
    <>
      <Head>
        <title>Nosbir | Sosyal Paylaşım Diyarı</title>
      </Head>
      <GroupSidebar />
      <div className="content">
        <h1>Bugünün Popüler Nosları</h1>
        {props.posts && props.posts.map((p, i) => <Post post={p} key={i} />)}
        {!props.posts && <Loading />}
      </div>
      <style jsx>{`
        :global(.page-content) {
          justify-content: normal !important;
        }
        h1 {
          color: var(--main-red-color);
          padding: 0 0 20px;
          font-size: var(--big-font-size);
          text-align: center;
          font-family: Tekton-pro, sans-serif;
        }
      `}</style>
    </>
  );
}
export default withAuth(Trends);

Trends.getInitialProps = async ctx => {
  const posts = await http
    .get("populerler.php")
    .then(res => res.data)
    .then(res => {
      if (res.durum) {
        return res.post;
      }
      return [];
    })
    .catch(err => []);
  return {
    posts
  };
};
