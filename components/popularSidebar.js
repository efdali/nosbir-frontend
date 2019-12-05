import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./loading";
import Error from "./error";
import Link from "next/link";
import { fetchPopulars } from "../store/actions/popularActions";

export default function PopularSidebar() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (document.documentElement.offsetWidth > 620) {
      dispatch(fetchPopulars());
    } else {
      window.addEventListener("resize", resizeHandler);
    }
    return ()=>{
      window.removeEventListener("resize",resizeHandler);
    }
  }, []);

  const resizeHandler = () => {
    if (document.documentElement.offsetWidth > 620 && posts.length <= 0) {
      window.removeEventListener("resize",resizeHandler);
      dispatch(fetchPopulars());
    }
  };

  const { posts, isLoading, isRejected, errorMsg } = useSelector(
    state => state.populars
  );
  const renderContent = () => {
    if (isLoading) return <Loading />;
    else if (isRejected) return <Error msg={errorMsg} />;
    else if (!posts.length) return <Error msg="Popüler post bulunamadı." />;
    else
      return (
        <ul className="popular-list">
          {posts.map((p, i) => (
            <li key={i}>
              <Link href={`/nos/${p.seo}`}>
                <a>
                  <p>{p.title}</p>
                </a>
              </Link>
              <div className="go-btn-wrapper">
                <Link href={`/nos/${p.seo}`}>
                  <a>
                    <img src="/go-post-icon.png" alt={p.seo} />
                  </a>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      );
  };

  return <aside className="right-sidebar">{renderContent()}</aside>;
}
