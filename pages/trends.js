import React from "react";
import Head from 'next/head';
import GroupSidebar from '../components/groupSidebar';
import Post from '../components/post';
import http from '../utils/http';
export default function Trends(props) {
  return (
    <>
      <Head>
        <title>Nosbir | Sosyal Paylaşım Diyarı</title>
      </Head>
      <GroupSidebar />
      <div className="content">
          <h1>Bugünün Popüler Nosları</h1>
        {
            props.posts.map((p,i)=>(
                <Post post={p} key={i}/>
            ))
        }
      </div>
    </>
  );
}

Trends.getInitialProps = async ctx => {
  const posts=await http.get("populerler.php")
  .then(res=>res.data)
  .then(res=>{
      if(res.durum){
          return res.post;
      }
      return [];
  })
  .catch(err=>[]);
  return {
      posts
  };
};
