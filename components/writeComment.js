import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shareComment } from "../store/actions/commentActions";
export default function WriteComment(props) {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.auth);
  const [comment, setComment] = useState("");
  const shareCommentHandler = e => {
    e.preventDefault();
    if (!isAuthenticated) return false;
    else if (comment.length < 1) return false;

    dispatch(shareComment(comment, props.postId));
    setComment("");
  };

  return (
    <div className="write-comment">
      <form onSubmit={shareCommentHandler}>
        <textarea
          placeholder="bir yorum yaz"
          onChange={e => {
            setComment(e.target.value);
          }}
          readOnly={!isAuthenticated}
          value={isAuthenticated ? comment : 'Yorum yapmak için oturum açmalısınız!...'}
        ></textarea>
        <button className="default-btn" onClick={shareCommentHandler}>
          <img src="/edit-post-icon.png" alt="yorum yaz" />
        </button>
      </form>
    </div>
  );
}
