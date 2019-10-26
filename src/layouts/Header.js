import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  showModal,
  REGISTER_MODAL,
  LOGIN_MODAL
} from "../store/actions/modalAction";
class Header extends Component {
  handleModal = (e, modelType) => {
    this.props.openModal(modelType);
    e.preventDefault();
  };
  render() {
    return (
      <div>
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
              <button
                className="sign-btn sign-in"
                onClick={e => this.handleModal(e, LOGIN_MODAL)}
              >
                Giriş Yap
              </button>
              <button
                className="sign-btn sign-up"
                onClick={e => this.handleModal(e, REGISTER_MODAL)}
              >
                Kayıt Ol
              </button>
              <button
                className="mobile-sign-btn"
                onClick={e => this.handleModal(e, LOGIN_MODAL)}
              >
                <i className="fas fa-lock" />
              </button>
            </div>
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
            <Link to="/">
              <i className="fas fa-question-circle"></i>
              Ask a question
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  openModal: modalType => dispatch(showModal(modalType))
});
export default connect(
  null,
  mapDispatchToProps
)(Header);
