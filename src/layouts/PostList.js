import React from "react";
import { NavLink } from "react-router-dom";
import Post from "../components/Post";

export default function PostList() {
  return (
    <div>
      <div className="sort-list-container">
        <ul className="sort-list">
          <li className="sort-list-item">
            <NavLink to="/" className="sort-list-item-link">
              <i className="fas fa-home homepage-icon"></i>
            </NavLink>
            {/* <div className="sort-list-scroll"></div> */}
          </li>
          <li className="sort-list-item">
            <NavLink to="/seg" className="sort-list-item-link">
              Dünya Halleri
            </NavLink>
            {/* <div className="sort-list-scroll"></div> */}
          </li>
          <li className="sort-list-item">
            <NavLink to="/segg" className="sort-list-item-link">
              Sıcak Gündem
            </NavLink>
            {/* <div className="sort-list-scroll"></div> */}
          </li>
          <li className="sort-list-item">
            <NavLink to="/segseg" className="sort-list-item-link">
              Nofab
            </NavLink>
            {/* <div className="sort-list-scroll"></div> */}
          </li>
          <li className="sort-list-item">
            <NavLink to="/segseg" className="sort-list-item-link">
              Teknoloji
            </NavLink>
            {/* <div className="sort-list-scroll"></div> */}
          </li>
          <li className="sort-list-item">
            <NavLink to="/segseg" className="sort-list-item-link">
              Programlama
            </NavLink>
            {/* <div className="sort-list-scroll"></div> */}
          </li>
          <li className="sort-list-item">
            <NavLink to="/segseg" className="sort-list-item-link">
              Kültür
            </NavLink>
            {/* <div className="sort-list-scroll"></div> */}
          </li>
          <li className="sort-list-item">
            <NavLink to="/segseg" className="sort-list-item-link">
              Spor
            </NavLink>
            {/* <div className="sort-list-scroll"></div> */}
          </li>
        </ul>
        <ul className="mobile-sort-list">
          <li><NavLink to="/" className="sort-list-item-link">
            <i className="fas fa-home homepage-icon"></i>
          </NavLink>
          </li>
          <li>
            <select className="mobile-group-select">
              <option>Gruplar</option>
              <option>Dünya Halleri</option>
              <option>Sıcak Gündem</option>
              <option>Nofab</option>
              <option>Teknoloji</option>
              <option>Programlama</option>
              <option>Kültür</option>
              <option>Spor</option>
            </select>
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
          <button className="default-btn load-more-btn">
            Load More Questions
          </button>
        </div>
      </div>
    </div>
  );
}
