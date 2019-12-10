import React, { useState, useEffect } from "react";
import Head from "next/head";
import http from "../utils/http";
import { default as SearchComponent } from "../components/search";
import Post from "../components/post";
import Error from "../components/error";
const Search = props => {
  const [value, setValue] = useState(props.q);
  const [posts, setPosts] = useState(props.posts);
  const [page, setPage] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", windowListener);
    return () => {
      window.removeEventListener("scroll", windowListener);
    };
  }, []);
  useEffect(() => {
    if (page > 0) {
      http
        .get("arama.php", {
          params: {
            aranan: value,
            s: page
          }
        })
        .then(res => res.data)
        .then(res => setPosts([...posts,...res.postlar]));
    }
    console.log(page,props.total)
  }, [page]);
  const windowListener = () => {
    if (page < props.total - 1) {
      if (
        window.innerHeight + document.documentElement.scrollTop + 200 >=
        document.documentElement.offsetHeight
      ) {
        setPage(page + 1);
      }
    } else window.removeEventListener("scroll", windowListener);
  };
  return (
    <div className="content">
      <Head>
        <title>arama - {props.q}</title>
      </Head>
      <SearchComponent
        value={value}
        onChange={e => setValue(e.target.value)}
        onSubmit={e => {
          e.preventDefault();
          if (value) {
            http
              .get("arama.php", {
                params: {
                  aranan: value
                }
              })
              .then(res => setPosts(res.data.postlar));
          }
        }}
      />
      {posts && posts.map(p => <Post post={p} key={p.post_id} />)}
      {!posts.length && <Error msg="Öyle bir nos yok" />}
      <style jsx>{`
        .content {
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};
Search.getInitialProps = async ({ query }) => {
  const data = await http
    .get("arama.php", {
      params: {
        aranan: query.q
      }
    })
    .then(res => res.data);
  return {
    posts: data.postlar,
    total: data.toplam,
    q: query.q
  };
};

export default Search;
