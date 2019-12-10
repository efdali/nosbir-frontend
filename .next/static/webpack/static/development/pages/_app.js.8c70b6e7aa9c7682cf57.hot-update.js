webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions_modalActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/modalActions */ "./store/actions/modalActions.js");
/* harmony import */ var _store_actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions/authActions */ "./store/actions/authActions.js");
/* harmony import */ var _navbarBrand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbarBrand */ "./components/navbarBrand.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* harmony import */ var _notificationPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notificationPanel */ "./components/notificationPanel.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var Header = function Header() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.auth;
  }),
      isAuthenticated = _useSelector.isAuthenticated,
      user = _useSelector.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showSearch = _useState2[0],
      setShowSearch = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      notifPanelActive = _useState3[0],
      setNotifPanelActive = _useState3[1];

  return __jsx("nav", null, __jsx("div", {
    className: "navbar-top"
  }, __jsx(_navbarBrand__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx("ul", {
    className: "navbar-right"
  }, __jsx("li", null, !showSearch ? __jsx("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      setShowSearch(true);
    }
  }, __jsx("img", {
    src: "/search-icon2.png",
    alt: "search on nosbir.com"
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    method: "GET",
    action: "/arama",
    className: "search-form"
  }, __jsx("input", {
    type: "text",
    placeholder: "ne ar\u0131yorsun?",
    name: "q"
  })), __jsx("button", {
    className: "default-btn",
    onClick: function onClick() {
      return setShowSearch(false);
    }
  }, "\xD7"))), isAuthenticated ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#"
  }, __jsx("a", {
    onClick: function onClick(e) {
      e.preventDefault();
      react_toastify__WEBPACK_IMPORTED_MODULE_9__["toast"].info("Mesajlaşma aktif değildir. En kısa sürede aktifleştirilecektir...");
    }
  }, __jsx("img", {
    src: "/message-icon.png",
    className: "nav-icon",
    alt: "messages"
  })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#"
  }, __jsx("a", {
    onClick: function onClick(e) {
      e.preventDefault();
      setNotifPanelActive(!notifPanelActive);
    },
    onMouseLeave: function onMouseLeave() {
      return setNotifPanelActive(false);
    }
  }, __jsx("img", {
    src: "/notification-icon.png",
    className: "nav-icon",
    alt: "notifications"
  }))), __jsx(_notificationPanel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    active: notifPanelActive,
    nick: user.kadi
  })), __jsx("li", {
    className: "profile-item",
    onMouseEnter: function onMouseEnter() {
      return setIsOpen(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsOpen(false);
    }
  }, __jsx(_image__WEBPACK_IMPORTED_MODULE_7__["default"], {
    src: user.resim,
    alt: user.kadi,
    className: "navbar-user-img"
  }), __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/u/@".concat(user.kadi)
  }, __jsx("a", null, user.kadi))), __jsx("a", {
    href: "#",
    className: "profile-caret",
    onClick: function onClick(e) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  }, "\u25BC"), __jsx("ul", {
    className: "profile-actions ".concat(!isOpen ? "hidden" : "")
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/u/@".concat(user.kadi)
  }, __jsx("a", null, "Profil"))), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      dispatch(Object(_store_actions_authActions__WEBPACK_IMPORTED_MODULE_5__["logout"])());
      router.reload();
    }
  }, "\xC7\u0131k\u0131\u015F"))))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", null, __jsx("button", {
    className: "btn-login default-btn",
    onClick: function onClick() {
      return dispatch(Object(_store_actions_modalActions__WEBPACK_IMPORTED_MODULE_4__["setModalVisibility"])(_store_actions_modalActions__WEBPACK_IMPORTED_MODULE_4__["LOGIN_MODAL"], true));
    }
  }, "Giri\u015F Yap")), __jsx("li", null, __jsx("button", {
    className: "btn-register default-btn",
    onClick: function onClick() {
      return dispatch(Object(_store_actions_modalActions__WEBPACK_IMPORTED_MODULE_4__["setModalVisibility"])(_store_actions_modalActions__WEBPACK_IMPORTED_MODULE_4__["REGISTER_MODAL"], true));
    }
  }, "Kay\u0131t Ol"))))), __jsx("div", {
    className: "mobile-sub-header"
  }, __jsx("form", {
    method: "get",
    action: "/arama"
  }, __jsx("img", {
    src: "/search-icon.png",
    alt: "search"
  }), __jsx("input", {
    type: "text",
    name: "q"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/gruplar"
  }, __jsx("a", null, __jsx("img", {
    src: "/fire-nos-icon.png",
    alt: "nosbir.com"
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/gundem"
  }, __jsx("a", null, __jsx("img", {
    src: "/trends-icon.png"
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", null, __jsx("img", {
    src: "/flash-icon.png"
  }))), __jsx("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      if (isAuthenticated) router.push("/yeni-post");else dispatch(Object(_store_actions_modalActions__WEBPACK_IMPORTED_MODULE_4__["setModalVisibility"])(_store_actions_modalActions__WEBPACK_IMPORTED_MODULE_4__["LOGIN_MODAL"], true));
    }
  }, __jsx("img", {
    src: "/edit-post-icon.png"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.8c70b6e7aa9c7682cf57.hot-update.js.map