import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="navbar-brand-wrapper">
          <Link to="/" className="nav-brand-link">
            <img
              src="https://2code.info/demo/themes/Discy/Main/wp-content/themes/discy/images/logo.png"
              className="navbar-brand"
              alt="navbar-brand"
              height="50"
            />
          </Link>
        </div>
        <div className="nav-link-wrapper">
          <ul>
            <li>
              <NavLink to="/" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="nav-link" activeClassName="active">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <div className="input-wrapper">
                <input
                  className="search-input"
                  placeholder="type search words..."
                />
                <i class="fas fa-search"></i>
              </div>
            </li>
          </ul>
        </div>
        <div className="nav-btn-wrapper">
          <button className="sign-btn sign-in">Sign in</button>
          <button className="sign-btn sign-up">Sign up</button>
        </div>
        <div className="offset"></div>
      </nav>
    );
  }
}
