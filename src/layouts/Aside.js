import React from "react";
import { Link } from "react-router-dom";
export default function Aside() {
  return (
    <div className="right-container mt fd-column bg-white" style={{height:"465px"}}>
      <div className="ask-btn-container">
        <button className="default-btn ask-btn">Ask A Question</button>
      </div>
      <div className="aside-tabs">
        <div className="tabs">
          <Link to="/">Popular</Link>
        </div>
        <div className="tab-content">
          <ul className="content-list">
            <li>
              <Link to="/" className="content-user-img">
                <img
                  src="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-4-20x20.jpg"
                  alt="user-resim"
                  width="20"
                  height="20"
                  className=" img-rounded"
                />
              </Link>
              <div className="content-meta">
                <h3>
                  <Link to="/baslik/denek">
                    How to approach applying for a job at a company
                  </Link>
                </h3>
                <div>
                  <Link to="/">
                    <span>
                      <i className="fas fa-comment-alt"></i>{" "}
                      <span className="answer-span"> 7 Answers</span>
                    </span>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="content-user-img">
                <img
                  src="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-4-20x20.jpg"
                  alt="user-resim"
                  width="20"
                  height="20"
                  className=" img-rounded"
                />
              </Link>
              <div className="content-meta">
                <h3>
                  <Link to="/baslik/dene">
                    How to approach applying for a job at a company
                  </Link>
                </h3>
                <div>
                  <Link to="/">
                    <span>
                      <i className="fas fa-comment-alt"></i>{" "}
                      <span className="answer-span"> 7 Answers</span>
                    </span>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="content-user-img">
                <img
                  src="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-4-20x20.jpg"
                  alt="user-resim"
                  width="20"
                  height="20"
                  className=" img-rounded"
                />
              </Link>
              <div className="content-meta">
                <h3>
                  <Link to="/baslik/deneme">
                    How to approach applying for a job at a company
                  </Link>
                </h3>
                <div>
                  <Link to="/">
                    <span>
                      <i className="fas fa-comment-alt"></i>{" "}
                      <span className="answer-span"> 7 Answers</span>
                    </span>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
