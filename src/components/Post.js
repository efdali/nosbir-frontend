import React from "react";
import { Link } from "react-router-dom";
export default function Post() {
  return (
    <div className="post">
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
        <div className="post-vote-container">
          <ul className="post-vote">
            <li className="vote-up">
              <Link to="/">
                <i className="fa fa-sort-up"></i>
              </Link>
            </li>
            <li className="vote-count">33</li>
            <li className="vote-down">
              <Link to="/">
                <i className="fa fa-sort-down"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="post-meta">
        <header className="post-header">
          <Link to="/profil/martin" className="post-user-link">
            Martin Hope
          </Link>
          <span className="meta-title">
            Asked:<span className="meta-content">April 19,2018</span>
          </span>
          <span className="meta-title">
            In:<span className="meta-content">Nofab</span>
          </span>
        </header>
      </div>
      <h2 className="post-title">
        <Link to="/baslik/nofab-sureci-4526">
          Is this statement, “i see him last night” can be understood as “I saw
          him last night”?
        </Link>
      </h2>
      <div className="post-content">
        <p>
          In my local language (Bahasa Indonesia) there are no verb-2 or past
          tense form as time tracker. So, I often forget to use the past form of
          verb when speaking english. I saw him last night (correct) I see him
          last night (incorrect) But i think both has the same meaning and are
          understandable, Isn’t it?
        </p>
        <footer className="post-footer">
          <Link to="/" className="post-comment">
            <i className="fas fa-comment-alt"></i>
            <span> 4</span> Answers
          </Link>
          <Link to="/" className="post-answer-btn">
            Answer
          </Link>
        </footer>
      </div>
    </div>
  );
}
