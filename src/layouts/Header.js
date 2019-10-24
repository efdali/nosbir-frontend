import React, { Component } from "react";
import { Link,NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="left-container">
            <Link to="/" className="header-logo" title="Nosbir">
              <img
                src="https://2code.info/demo/themes/Discy/Main/wp-content/themes/discy/images/logo.png"
                className="header-brand"
                alt="Nosbir"
                height="45"
                width="137"
              />
            </Link>
            <div className="mid-container">
              <nav className="nav f_left">
                <ul>
                  <li>
                    <NavLink exact to="/" className="nav-link">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog" className="nav-link">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                  </li>
                </ul>
              </nav>
              <div className="header-search f_right">
                <div className="search-wrapper">
                  <input
                    className="search-input"
                    placeholder="type search words..."
                  />
                  <button className="search-btn">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right-container sign-container">
            <button className="sign-btn sign-in">Sign in</button>
            <button className="sign-btn sign-up">Sign up</button>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
