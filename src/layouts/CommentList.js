import React from "react";
import Comment from "../components/Comment";
import { Link } from "react-router-dom";
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
        <p className="comment-user-detail">
          <Link to="/">
            <i className="fas fa-user"></i>
            <h6>efdali</h6>
          </Link>{" "}
          <span>olarak oturum açıldı.</span>
          <Link to="/">
            <i class="fas fa-sign-out-alt"></i>Çıkış yap
          </Link>
        </p>
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
