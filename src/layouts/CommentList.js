import React from "react";
import Comment from "../components/Comment";
import LoadMoreButton from "../components/LoadMoreButton";
export default function CommentList() {
  return (
    <div className="comment-list-container">
      <Comment />
      <Comment />
      <Comment />
      <LoadMoreButton text="Daha Fazla Cevap" className="load-more-comment"/>
    </div>
  );
}
