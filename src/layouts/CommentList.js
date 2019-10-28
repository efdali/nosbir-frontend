import React from "react";
import Comment from "../components/Comment";
import LoggedAs from "../components/LoggedAs";
export default function CommentList() {
  return (
    <div className="comment-list-container">
      <Comment />
      <Comment />
      <Comment />
      <div className="post-container-footer mt-2 mb-2">
        <span className="load-span">
          <span className="loader"></span>
        </span>
        <button className="default-btn load-more-btn load-more-comment">
          Daha Fazla Cevap
        </button>
      </div>
      <div className="comment-form">
        <p>Cevap Yaz</p>
        <LoggedAs/>
         <form>
          <div className="textarea">
              <p>Cevabınız <span>(Uygunsuz içerik sahipleri süresiz olarak banlanacaktır.)</span></p>
            <textarea className="comment-text"></textarea>
          </div>
          <button className="default-btn comment-submit-btn">Gönder</button>
        </form>
      </div>
    </div>
  );
}
