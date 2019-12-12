module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/error.js":
/*!*****************************!*\
  !*** ./components/error.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Error = props => __jsx("div", {
  className: "error-container"
}, __jsx("p", null, __jsx("img", {
  src: "/single-error-icon.svg",
  alt: "upps! crash",
  height: "40"
}), props.msg ? props.msg : 'Oppps..! Bir Hata Oluştu.'));

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./components/loading.js":
/*!*******************************!*\
  !*** ./components/loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Loading = () => __jsx("div", {
  className: "loading-container"
}, __jsx("img", {
  src: "/loading.gif",
  width: "50",
  height: "50",
  alt: "Nosbir"
}));

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/newPost.js":
/*!**************************!*\
  !*** ./pages/newPost.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
/* harmony import */ var _store_actions_groupActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/groupActions */ "./store/actions/groupActions.js");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/loading */ "./components/loading.js");
/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/error */ "./components/error.js");
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/http */ "./utils/http.js");
/* harmony import */ var _store_actions_shareActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/actions/shareActions */ "./store/actions/shareActions.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_11__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












class NewPost extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  static async getInitialProps() {
    const asyncGroups = await _utils_http__WEBPACK_IMPORTED_MODULE_9__["default"].get("gruplar.php").then(res => res.data).then(res => {
      if (res.durum) {
        return res.gruplar;
      } else {
        return [];
      }
    }).catch(err => []);
    return {
      asyncGroups
    };
  }

  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "RenderGroups", () => {
      const {
        groups,
        isLoading,
        isRejected,
        errorMsg
      } = this.props.groups;
      if (isLoading) return __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_7__["default"], null);else if (isRejected) return __jsx(_components_error__WEBPACK_IMPORTED_MODULE_8__["default"], {
        msg: errorMsg
      });else if (groups.length <= 0) return __jsx(_components_error__WEBPACK_IMPORTED_MODULE_8__["default"], {
        msg: "Payla\u015F\u0131m yapabilece\u011Finiz grup bulunamad\u0131.L\xFCtfen sonra tekrar deneyin"
      });else {
        return __jsx("ul", null, groups.map((g, i) => __jsx("li", {
          key: i
        }, __jsx("a", {
          className: this.state.groupValue === g.group_id ? "active" : "",
          onClick: e => this.changeGroup(e, g.group_id)
        }, g.name.toLowerCase()))));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "changeGroup", (e, id) => {
      e.preventDefault();
      this.setState({
        groupValue: id
      });
      console.log(this.state.groupValue === id);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "shareHandler", e => {
      e.preventDefault();
      const {
        active,
        title,
        text,
        groupValue,
        picture
      } = this.state;
      if (!this.props.isAuthenticated) return false;

      if (active === "state") {
        this.shareText();
      } else if (active === "picture") {
        this.shareImage();
      } else if (active === "link") {}
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "shareText", () => {
      const {
        title,
        text,
        groupValue
      } = this.state;
      if (!title || !text || groupValue === 0) return false;
      Object(_store_actions_shareActions__WEBPACK_IMPORTED_MODULE_10__["shareTextPost"])(title, text, groupValue).then(res => {
        if (res.durum) {
          this.props.router.push("/nos/" + res.baslik);
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].error(res.mesaj);
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "shareImage", () => {
      const {
        title,
        image,
        groupValue
      } = this.state;
      if (!title || !image || !groupValue) return false;
      Object(_store_actions_shareActions__WEBPACK_IMPORTED_MODULE_10__["shareImagePost"])(title, image, groupValue).then(res => {
        if (res.durum) {
          this.props.router.push("/nos/" + res.baslik);
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].error(res.mesaj);
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onImageChange", e => {
      if (e.target.files && e.target.files[0]) {
        this.setState({
          image: e.target.files[0]
        });
        let reader = new FileReader();

        reader.onload = event => {
          this.setState({
            picture: event.target.result
          });
        };

        reader.readAsDataURL(e.target.files[0]);
      }
    });

    if (props.asyncGroups.length <= 0) {
      props.fetchGroups();
    } else {
      props.groupsSuccess(props.asyncGroups);
    }

    this.state = {
      active: "state",
      title: "",
      text: "",
      groupValue: 0,
      image: "",
      picture: ""
    };
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "Yeni Post")), __jsx("div", {
      className: "content new-post-content"
    }, __jsx("div", null, __jsx("a", {
      onClick: () => this.props.router.back()
    }, __jsx("img", {
      src: "/go-back-icon.png",
      alt: "geri git"
    }))), __jsx("form", null, __jsx("input", {
      type: "text",
      placeholder: "ba\u015Fl\u0131k",
      className: "post-title",
      value: this.state.title,
      onChange: e => this.setState({
        title: e.target.value
      }),
      required: true
    }), __jsx("div", {
      className: "new-post-form"
    }, __jsx("div", {
      className: `tab state-tab ${this.state.active !== "state" ? "hidden" : ""}`
    }, __jsx("textarea", {
      className: "post-content",
      placeholder: "ne d\xFC\u015F\xFCn\xFCyorsun?",
      value: this.state.text,
      onChange: e => this.setState({
        text: e.target.value
      })
    })), __jsx("div", {
      className: `tab picture-tab ${this.state.active !== "picture" ? "hidden" : ""}`
    }, this.state.image ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("img", {
      src: this.state.picture,
      alt: "post resim"
    }), __jsx("div", {
      className: "picture-tab-footer"
    }, __jsx("button", {
      onClick: e => {
        e.preventDefault();
        this.setState({
          image: "",
          picture: ""
        });
      }
    }, __jsx("img", {
      src: "/delete-icon.png",
      alt: "resmi sil"
    })))) : __jsx("label", {
      className: "custom-file-input"
    }, __jsx("span", null, "G\xF6zat"), "Payla\u015Fmak istedi\u011Fin resmi se\xE7", __jsx("input", {
      type: "file",
      value: this.state.image,
      onChange: this.onImageChange,
      className: "file-input"
    }))), __jsx("div", {
      className: `tab link-tab ${this.state.active !== "link" ? "hidden" : ""}`
    }, "link"), __jsx("ul", {
      className: "button-container"
    }, __jsx("li", null, __jsx("button", {
      onClick: e => {
        e.preventDefault();
        this.setState({
          active: "state"
        });
      }
    }, "durum"), __jsx("img", {
      src: "/status-icon.png",
      alt: "post"
    })), __jsx("li", null, __jsx("button", {
      onClick: e => {
        e.preventDefault();
        this.setState({
          active: "picture"
        });
      }
    }, "g\xF6rsel"), __jsx("img", {
      src: "/post-picture.png",
      alt: "post"
    })), __jsx("li", null, __jsx("button", {
      onClick: e => {
        e.preventDefault();
        this.setState({
          active: "link"
        });
      }
    }, "link"), __jsx("img", {
      src: "/post-link.png",
      alt: "post"
    })), __jsx("li", null, __jsx("button", {
      className: "default-btn share-btn",
      onClick: this.shareHandler
    }, "payla\u015F"))))), __jsx("div", {
      className: "groups-input-container"
    }, __jsx("h4", null, "topluluk se\xE7"), __jsx(this.RenderGroups, null))), __jsx("aside", {
      className: "right-sidebar new-post-sidebar"
    }, __jsx("p", null, "unutma her yazd\u0131\u011F\u0131n yaz\u0131y\u0131 bundan y\u0131llar sonra \xE7ocuklar\u0131n hatta torunlar\u0131n okuyabilir bunun i\xE7in yazd\u0131klar\u0131n\u0131 senden y\u0131llar sonraki torunlar\u0131na \xF6\u011F\xFCt veriyormu\u015F\xE7as\u0131na yaz. Ne kendini utand\u0131r ne de torunlar\u0131n\u0131 yazd\u0131klar\u0131ndan dolay\u0131 utand\u0131r. Senin yazd\u0131klar\u0131ndan etkilenip hayat\u0131nda radikal kararlar alabilecek insanlar var onlara iyi \xF6rnek ol.")));
  }

}

const mapStateToProps = state => ({
  groups: state.groups,
  isAuthenticated: state.auth.isAuthenticated
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  fetchGroups: _store_actions_groupActions__WEBPACK_IMPORTED_MODULE_6__["fetchGroups"],
  groupsSuccess: _store_actions_groupActions__WEBPACK_IMPORTED_MODULE_6__["groupsSuccess"]
})(Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Object(_utils_auth__WEBPACK_IMPORTED_MODULE_5__["withAuth"])(NewPost, true))));

/***/ }),

/***/ "./store/actions/authActions.js":
/*!**************************************!*\
  !*** ./store/actions/authActions.js ***!
  \**************************************/
/*! exports provided: AUTHENTICATE, authenticate, DEAUTHENTICATE, deauthenticate, login, register, LOGOUT, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATE", function() { return AUTHENTICATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEAUTHENTICATE", function() { return DEAUTHENTICATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deauthenticate", function() { return deauthenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modalActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalActions */ "./store/actions/modalActions.js");




const AUTHENTICATE = "AUTHENTICATE";
const authenticate = user => ({
  type: AUTHENTICATE,
  user
});
const DEAUTHENTICATE = "DEAUTHENTICATE";
const deauthenticate = () => ({
  type: DEAUTHENTICATE
});
const login = (nick, passwd) => {
  if (!nick || !passwd) return;
  return (dispatch, getState, http) => {
    http.post("giris.php", {
      kadi: nick,
      sifre: passwd
    }).then(res => res.data).then(res => {
      if (res.durum) {
        localStorage.setItem("token", res.token);
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("token", res.token, {
          expires: 1
        });
        const data = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(res.token);
        dispatch(authenticate(data.data));
        dispatch(Object(_modalActions__WEBPACK_IMPORTED_MODULE_3__["setModalVisibility"])(_modalActions__WEBPACK_IMPORTED_MODULE_3__["LOGIN_MODAL"], false));
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].warn(res.mesaj);
      }
    }).catch(err => react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].warn(err));
  };
};
const register = (nick, passwd, email) => {
  if (!nick || !passwd || !email) return;
  return (dispatch, getState, http) => {
    http.post("kayit.php", {
      kadi: nick,
      sifre: passwd,
      eposta: email
    }).then(res => res.data).then(res => {
      if (res.durum) {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].success(res.mesaj);
        dispatch(Object(_modalActions__WEBPACK_IMPORTED_MODULE_3__["setModalVisibility"])(_modalActions__WEBPACK_IMPORTED_MODULE_3__["LOGIN_MODAL"], true));
      } else react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].warn(res.mesaj);
    }).catch(err => react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].warn(err));
  };
};
const LOGOUT = "LOGOUT";
const logout = () => dispatch => {
  localStorage.removeItem("token");
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("token");
  dispatch(deauthenticate());
};

/***/ }),

/***/ "./store/actions/groupActions.js":
/*!***************************************!*\
  !*** ./store/actions/groupActions.js ***!
  \***************************************/
/*! exports provided: FETCHING_GROUPS, fetchingGroups, GROUPS_FAIL, groupsFail, GROUPS_SUCCESS, groupsSuccess, fetchGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCHING_GROUPS", function() { return FETCHING_GROUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchingGroups", function() { return fetchingGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUPS_FAIL", function() { return GROUPS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupsFail", function() { return groupsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUPS_SUCCESS", function() { return GROUPS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupsSuccess", function() { return groupsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroups", function() { return fetchGroups; });
const FETCHING_GROUPS = "FETCHING_GROUPS";
const fetchingGroups = () => ({
  type: FETCHING_GROUPS
});
const GROUPS_FAIL = "GROUPS_FAIL";
const groupsFail = msg => ({
  type: GROUPS_FAIL,
  msg
});
const GROUPS_SUCCESS = "GROUPS_SUCCESS";
const groupsSuccess = groups => ({
  type: GROUPS_SUCCESS,
  groups
});
const fetchGroups = () => (dispatch, getState, http) => {
  dispatch(fetchingGroups());
  http.get("gruplar.php").then(res => res.data).then(res => {
    if (res.durum) dispatch(groupsSuccess(res.gruplar));else dispatch(groupsFail(res.mesaj));
  }).catch(err => dispatch(groupsFail(err)));
};

/***/ }),

/***/ "./store/actions/modalActions.js":
/*!***************************************!*\
  !*** ./store/actions/modalActions.js ***!
  \***************************************/
/*! exports provided: LOGIN_MODAL, REGISTER_MODAL, SET_LOGIN_MODAL, setLoginModal, SET_REGISTER_MODAL, setRegisterModal, setModalVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_MODAL", function() { return LOGIN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_MODAL", function() { return REGISTER_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOGIN_MODAL", function() { return SET_LOGIN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoginModal", function() { return setLoginModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REGISTER_MODAL", function() { return SET_REGISTER_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRegisterModal", function() { return setRegisterModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setModalVisibility", function() { return setModalVisibility; });
const LOGIN_MODAL = "LOGIN_MODAL";
const REGISTER_MODAL = "REGISTER_MODAL";
const SET_LOGIN_MODAL = "SET_LOGIN_MODAL";
const setLoginModal = isOpen => ({
  type: SET_LOGIN_MODAL,
  isOpen
});
const SET_REGISTER_MODAL = "SET_REGISTER_MODAL";
const setRegisterModal = isOpen => ({
  type: SET_REGISTER_MODAL,
  isOpen
});
const setModalVisibility = (modal, isOpen) => dispatch => {
  if (modal === LOGIN_MODAL) dispatch(setLoginModal(isOpen));else dispatch(setRegisterModal(isOpen));
};

/***/ }),

/***/ "./store/actions/shareActions.js":
/*!***************************************!*\
  !*** ./store/actions/shareActions.js ***!
  \***************************************/
/*! exports provided: shareTextPost, shareImagePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shareTextPost", function() { return shareTextPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shareImagePost", function() { return shareImagePost; });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/http */ "./utils/http.js");

const shareTextPost = (title, text, groupId) => {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__["default"].post("post_olustur.php", {
    baslik: title,
    icerik: text,
    toplulukId: groupId
  }).then(res => res.data);
};
const shareImagePost = (title, picture, groupId) => {
  let formData = new FormData();
  formData.append("resim", picture);
  formData.append("baslik", title);
  formData.append("toplulukId", groupId);
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__["default"].post("post_resim_olustur.php", formData).then(res => res.data);
};

/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/*! exports provided: auth, withAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuth", function() { return withAuth; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _store_actions_authActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/actions/authActions */ "./store/actions/authActions.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






const auth = async ctx => {
  const {
    token
  } = next_cookies__WEBPACK_IMPORTED_MODULE_9___default()(ctx);

  if (token) {
    const decode = jwt_decode__WEBPACK_IMPORTED_MODULE_10___default()(token);

    if (_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_7___default()() < decode.exp * 1000) {
      ctx.store.dispatch(Object(_store_actions_authActions__WEBPACK_IMPORTED_MODULE_12__["authenticate"])(decode.data));
    } else ctx.store.dispatch(Object(_store_actions_authActions__WEBPACK_IMPORTED_MODULE_12__["deauthenticate"])());

    return true;
  } else return false;
};
const withAuth = (WrappedComponent, require = false) => {
  const Wrapper = props => {
    react__WEBPACK_IMPORTED_MODULE_8___default.a.useEffect(() => {
      if (props.redirect) next_router__WEBPACK_IMPORTED_MODULE_11___default.a.back();
    }, []);
    return __jsx(WrappedComponent, props);
  };

  Wrapper.getInitialProps = async ctx => {
    const isLogged = await auth(ctx);
    const redirect = require && !isLogged;
    const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
    return _objectSpread({}, componentProps, {
      redirect
    });
  };

  return Wrapper;
};

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: API_URL, IMAGE_URL, GROUP_IMAGE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_URL", function() { return IMAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUP_IMAGE_URL", function() { return GROUP_IMAGE_URL; });
const BASE_URL =  false ? undefined : "http://localhost/nosbir-backend";
const API_URL = `${BASE_URL}/v0/`;
const IMAGE_URL = `${BASE_URL}/resimler/`;
const GROUP_IMAGE_URL = `${BASE_URL}/gruplar/`; //export const API_URL = 'http://localhost/nosbir-backend/v0/';

/***/ }),

/***/ "./utils/http.js":
/*!***********************!*\
  !*** ./utils/http.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./utils/constants.js");


const http = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: _constants__WEBPACK_IMPORTED_MODULE_1__["API_URL"]
});
/* harmony default export */ __webpack_exports__["default"] = (http);
http.interceptors.request.use(config => {
  config.headers.common['Authorization'] = true ? '' : undefined;
  return config;
});

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/newPost.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\projects\nosbir-frontend\pages\newPost.js */"./pages/newPost.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ })

/******/ });
//# sourceMappingURL=newPost.js.map