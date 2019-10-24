import React from "react";
import { NavLink } from "react-router-dom";
import Post from "../components/Post";

export default function PostList() {
  return (
    <div className="left-container mt fd-column bg-white">
      <div className="sort-list-container">
        <ul className="sort-list">
          <li className="sort-list-item">
            <NavLink to="/" className="sort-list-item-link">
              Recent Question
            </NavLink>
            <div className="sort-list-scroll"></div>
          </li>
          <li className="sort-list-item">
            <NavLink to="/seg" className="sort-list-item-link">
              Most Answered
            </NavLink>
            <div className="sort-list-scroll"></div>
          </li>
          <li className="sort-list-item">
            <NavLink to="/segg" className="sort-list-item-link">
              Question Bump
            </NavLink>
            <div className="sort-list-scroll"></div>
          </li>
          <li className="sort-list-item">
            <NavLink to="/segseg" className="sort-list-item-link">
              Answers
            </NavLink>
            <div className="sort-list-scroll"></div>
          </li>
          <li className="sort-list-item">
            <NavLink to="/segseg" className="sort-list-item-link">
              Most Visited
            </NavLink>
            <div className="sort-list-scroll"></div>
          </li>
        </ul>
      </div>
      <div className="post-container">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <div className="post-container-footer mt-2">
          <span className="load-span">
            <span className="loader"></span>
          </span>
          <button className="default-btn load-more-btn">Load More Questions</button>
        </div>
      </div>
    </div>
  );
}
