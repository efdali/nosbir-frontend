import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderUser from "../components/HeaderUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer autoClose={5000} position={toast.POSITION.TOP_RIGHT} />

        <header className="header">
          <div className="container header-container">
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
                <nav className="nav">
                  <ul>
                    <li>
                      <NavLink exact to="/" className="nav-link">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" className="nav-link">
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog" className="nav-link">
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact" className="nav-link">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                <div className="header-search">
                  <div className="search-wrapper">
                    <form method="GET" action="/arama">
                      <input
                        className="search-input"
                        placeholder="type search words..."
                        name="q"
                      />
                      <button className="search-btn">
                        <i className="fas fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <HeaderUser />
          </div>
        </header>
        <div className="container container2">
          <div className="left-container bg-white mobile-header">
            <div className="mobile-search-wrapper">
              <input type="text" placeholder="seach..." />
              <button>
                <i className="fas fa-search" />
              </button>
            </div>
            <Link to="/yeni-nos">
              <i className="fas fa-question-circle"></i>
              Ask a question
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Header;
