import React from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";
import { Link } from "react-router-dom";
import CommentList from "../layouts/CommentList";
export default function PostDetails() {
  const { link } = useParams();
  return (
    <div>
      <div className="post-container post-detail-p">
        <Post />
        <div className="post-actions">
          <div className="post-report">
            <i className="fas fa-exclamation-triangle"></i>
            <span className="report">
              <Link to="/">Report</Link>
            </span>
          </div>
          <div className="post-share">
            <ul>
              <li>
                <i className="fas fa-share-alt"></i>
                <span>Share</span>
              </li>
              <li className="facebook">
                <Link to="/">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li className="twitter">
                <Link to="/">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li className="instagram">
                <Link to="/">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li className="whatsapp">
                <Link to="/">
                  <i className="fab fa-whatsapp"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CommentList />
    </div>
  );
}
