import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./loading";
import Error from "./error";
import Comment from './comment';
export default function CommentList() {
  const dispatch = useDispatch();
  const { comments, total, isLoading, isRejected, errorMsg } = useSelector(
    state => state.comments
  );

  if (isLoading) return <Loading />;
  else if (isRejected) return <Error msg={errorMsg} />;
  else if (!comments.length)
    return <Error msg="Henüz Yorum Yapılmamış...İlk yorum yapan sen ol" />;

  return (
    <div className="comment-list">
      {comments.map((c, i) => (
        <Comment comment={c} key={i} />
      ))}
    </div>
  );
}
