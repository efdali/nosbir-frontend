import React from "react";
import { Link } from "react-router-dom";
export default function Aside() {
  return (
    <div className="right-container mt fd-column bg-white">
      <div className="ask-btn-container">
        <button className="default-btn ask-btn">Ask A Question</button>
      </div>
      <div className="aside-tabs">
        <div className="tabs">
          <ul className="tab-links">
            <li>Popular</li>
            <li>Answers</li>
          </ul>
        </div>
        <div className="tab-content">
          <ul className="content-list">
            <li>
              <Link to="/">
                <img
                  src="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-4-20x20.jpg"
                  alt="user-resim"
                  width="20"
                  height="20"
                  className="content-user-img img-rounded"
                />
              </Link>
              <div className="content-meta">
                <h3>
                  <Link to="/">
                    How to approach applying for a job at a company
                  </Link>
                </h3>
                <ul>
                  <li>
                    <i class="fas fa-comment-alt"></i>
                  </li>
                  <li> 7 Answers </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
