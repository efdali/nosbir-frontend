import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Image from "./Image";
export default function Comment(props) {
  const {comment}=props;
  return (
    <div className="post comment">
      <div className="post-left-side post-user-image">
        <Link to={`/profil/${comment.nick}`} className="post-user-img-link">
          <Image
            src={comment.picture}
            alt={comment.nick}
          />
        </Link>
      </div>
      <div className="post-meta comment-meta">
        <header className="post-header">
          <Link to={`/profil/${comment.nick}`} className="post-user-link">
            {comment.nick}
          </Link>
          <span className="meta-title">
          {/* Added an answer on {comment.created_at} */}
          Cevap {comment.created_at} tarihinde paylaşıldı.
          </span>
        </header>
        <p className="comment-text">
          {comment.text}
        </p>
      </div>
    </div>
  );
}
Comment.propTypes={
  comment:PropTypes.object.isRequired
}