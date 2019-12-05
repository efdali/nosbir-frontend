import React, { useState } from "react";
import Link from 'next/link';
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import http from "../utils/http";
import Loading from "./loading";
const Vote = props => {
  const { isAuthenticated } = useSelector(state => state.auth);
  const [like, setLike] = useState(parseInt(props.likes ? props.likes : 0));
  const [loading, setLoading] = useState(false);
  function voteHandler(e, type) {
    e.preventDefault();
    setLoading(true);
    if (!isAuthenticated) {
      toast.warn("Oylamak için giriş yapmalısınız.");
      setLoading(false);
      return;
    }

    http
      .post("begeni.php", {
        postId: props.postId,
        tur: type
      })
      .then(res => res.data)
      .then(res => {
        if (res.durum) {
          if (res.begeni) setLike(begeni);
          else setLike(like + parseInt(type));
        } else toast.error(res.mesaj);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        toast.error("Bir hata oluştu. " + err);
      });
  }
  const Icon = ({ type }) => {
    return (
      <img
        src={`/vote-${type}${props.white ? "-white" : ""}-icon.png`}
        alt="post oyla"
      />
    );
  };
  const defaultClass = props.white ? "default-btn" : "";
  return (
    <ul className="post-actions">
      <li className="post-vote">
        <button className={defaultClass} onClick={e => voteHandler(e, 1)}>
          <Icon type="up" />
        </button>
        {loading ? <Loading /> : <span>{like}</span>}
        <button className={defaultClass} onClick={e => voteHandler(e, -1)}>
          <Icon type="down" />
        </button>
      </li>
      <li className="post-comment-number">
        <img
          src={`/comment${props.white ? `-white` : ""}-icon.png`}
          alt="post-yorumları"
        />
        <Link href={`/nos/${props.seo}`}>
          <a>{props.total ? props.total : 0}</a>
        </Link>
      </li>
    </ul>
  );
};
export default Vote;
