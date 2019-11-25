import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./loading";
import Error from "./error";
import Link from 'next/link';
import { fetchPopulars } from "../store/actions/popularActions";

export default function PopularSidebar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopulars());
  }, []);

  const { posts, isLoading, isRejected, errorMsg } = useSelector(
    state => state.populars
  );
  const renderContent = () => {
    if (isLoading) return <Loading />;
    else if (isRejected) return <Error msg={errorMsg} />;
    else if (!posts.length) return <Error msg="Popüler post bulunamadı." />;
    else
      return (
        <ul>
          {posts.map(p => (
            <li key={p.post_id}>
              <Link href="/">
                <a>
                  <p className="max-three-line">{p.title}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      );
  };

  return <aside className="right-sidebar">{renderContent()}</aside>;
}
