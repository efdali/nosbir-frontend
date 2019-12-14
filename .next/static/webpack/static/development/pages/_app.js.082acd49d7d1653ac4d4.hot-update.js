webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store/actions/authActions.js":
/*!**************************************!*\
  !*** ./store/actions/authActions.js ***!
  \**************************************/
/*! exports provided: AUTHENTICATE, authenticate, DEAUTHENTICATE, deauthenticate, login, register, LOGOUT, logout, changeImage */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeImage", function() { return changeImage; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modalActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalActions */ "./store/actions/modalActions.js");




var AUTHENTICATE = "AUTHENTICATE";
var authenticate = function authenticate(user) {
  return {
    type: AUTHENTICATE,
    user: user
  };
};
var DEAUTHENTICATE = "DEAUTHENTICATE";
var deauthenticate = function deauthenticate() {
  return {
    type: DEAUTHENTICATE
  };
};
var login = function login(nick, passwd) {
  if (!nick || !passwd) return;
  return function (dispatch, getState, http) {
    http.post("giris.php", {
      kadi: nick,
      sifre: passwd
    }).then(function (res) {
      return res.data;
    }).then(function (res) {
      console.log(res);

      if (res.durum) {
        localStorage.setItem("token", res.token);
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("token", res.token, {
          expires: 1
        });
        var data = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(res.token);
        dispatch(authenticate(data.data));
        dispatch(Object(_modalActions__WEBPACK_IMPORTED_MODULE_3__["setModalVisibility"])(_modalActions__WEBPACK_IMPORTED_MODULE_3__["LOGIN_MODAL"], false));
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].warn(res.mesaj);
      }
    })["catch"](function (err) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].warn(err);
    });
  };
};
var register = function register(nick, passwd, email) {
  if (!nick || !passwd || !email) return;
  return function (dispatch, getState, http) {
    http.post("kayit.php", {
      kadi: nick,
      sifre: passwd,
      eposta: email
    }).then(function (res) {
      return res.data;
    }).then(function (res) {
      if (res.durum) {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].success(res.mesaj);
        dispatch(Object(_modalActions__WEBPACK_IMPORTED_MODULE_3__["setModalVisibility"])(_modalActions__WEBPACK_IMPORTED_MODULE_3__["LOGIN_MODAL"], true));
      } else react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].warn(res.mesaj);
    })["catch"](function (err) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].warn(err);
    });
  };
};
var LOGOUT = "LOGOUT";
var logout = function logout() {
  return function (dispatch) {
    localStorage.removeItem("token");
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("token");
    dispatch(deauthenticate());
  };
};
var changeImage = function changeImage(image) {
  return function (dispatch, getState, http) {
    if (!image) return false;
    var formData = new FormData();
    formData.append("resim", image);
    return http.post("profil_duzenle.php", formData).then(function (res) {
      return res.data;
    }).then(function (res) {
      if (res.durum) {
        localStorage.setItem("token", res.token);
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("token", res.token, {
          expires: 1
        });
        var data = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(res.token);
        dispatch(authenticate(data.data));
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].warn(res.mesaj);
      }
    });
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.082acd49d7d1653ac4d4.hot-update.js.map