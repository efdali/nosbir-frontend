import React from "react";
import { Link } from "react-router-dom";
export default function Comment() {
  return (
    <div className="post comment">
      <div className="post-left-side post-user-image">
        <Link to="/" className="post-user-img-link">
          <img
            src="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-2-42x42.jpg"
            className="img-rounded"
            alt="kullanıcı adı"
            width="42"
            height="42"
          />
        </Link>
      </div>
      <div className="post-meta comment-meta">
        <header className="post-header">
          <Link to="/" className="post-user-link">
            Martin Hope
          </Link>
          <span className="meta-title">
          Added an answer on April 19, 2018 at 2:00 am
          </span>
        </header>
        <p className="comment-text">
          In my local language (Bahasa Indonesia) there are no verb-2 or past
          tense form as time tracker. So, I often forget to use the past form of
          verb when speaking english. I saw him last night (correct) I see him
          last night (incorrect) But i think both has the same meaning and are
          understandable, Isn’t it?
        </p>
      </div>
    </div>
  );
}