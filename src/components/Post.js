import React,{useState} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import stripHtml from "string-strip-html";
import Image from "./Image";
import http from "../utils/http";
import { toast } from "react-toastify";
export default function Post(props) {
  const { post, showHtml } = props;
  let result = post.content;
  if (!showHtml) {
    result = stripHtml(post.content);
  }
  const voteHandler = (e, type) => {
    e.preventDefault();
    const {
      post: { post_id }
    } = props;
    http
      .post("begeni.php", {
        postId: post_id,
        tur: type
      })
      .then(res => res.data)
      .then(res => {
        if (res.durum) {
          toast.success(res.mesaj);
          setLike(like+Number(type));
        } else {
          toast.warn(res.mesaj);
        }
      })
      .catch(err => toast.error(err));
  };
  const [like,setLike]=useState(Number(post.begeni));
  return (
    <div className="post">
      <div className="post-left-side post-user-image">
        <Link to="/" className="post-user-img-link">
          <Image src={post.picture} alt={post.nick} />
        </Link>
        <div className="post-vote-container">
          <ul className="post-vote">
            <li className="vote-up">
              <Link to="/" onClick={e => voteHandler(e, 1)}>
                <i className="fa fa-sort-up"></i>
              </Link>
            </li>
            <li className="vote-count">
              {like}
            </li>
            <li className="vote-down">
              <Link to="/" onClick={e => voteHandler(e, -1)}>
                <i className="fa fa-sort-down"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="post-meta">
        <header className="post-header">
          <Link to={`/profil/${post.nick}`} className="post-user-link">
            {post.nick}
          </Link>
          <span className="meta-title">
            Asked:<span className="meta-content">{post.created_at}</span>
          </span>
          <span className="meta-title">
            In:
            <span className="meta-content">
              <Link to={`/grup/${post.group_seo}`}>{post.name}</Link>
            </span>
          </span>
        </header>
      </div>
      <h2 className="post-title">
        <Link to={`/baslik/${post.seo}`}>{post.title}</Link>
      </h2>
      <div className="post-content">
        <p dangerouslySetInnerHTML={{ __html: result }}></p>
        <footer className="post-footer">
          <Link to={`/baslik/${post.seo}`} className="post-comment">
            <i className="fas fa-comment-alt"></i>
            <span> {post.toplam === null ? "0" : post.toplam}</span> Answers
          </Link>
          <Link to={`/baslik/${post.seo}`} className="post-answer-btn">
            Answer
          </Link>
        </footer>
      </div>
    </div>
  );
}
Post.protoTypes = {
  post: PropTypes.object.isRequired,
  showHtml: PropTypes.bool
};
Post.defaultProps = {
  showHtml: false
};
