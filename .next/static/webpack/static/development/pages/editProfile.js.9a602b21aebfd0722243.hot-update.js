webpackHotUpdate("static\\development\\pages\\editProfile.js",{

/***/ "./pages/editProfile.js":
/*!******************************!*\
  !*** ./pages/editProfile.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
/* harmony import */ var _components_userContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/userContainer */ "./components/userContainer.js");
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/image */ "./components/image.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function EditProfile() {
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.auth.user;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
    className: "jsx-4105451522"
  }, "Profil D\xFCzenle")), __jsx("div", {
    className: "jsx-4105451522" + " " + "content"
  }, __jsx("div", {
    className: "jsx-4105451522" + " " + "header"
  }, __jsx("h4", {
    className: "jsx-4105451522"
  }, "profil d\xFCzenle")), __jsx("div", {
    className: "jsx-4105451522" + " " + "form-wrapper"
  }, __jsx("div", {
    className: "jsx-4105451522" + " " + "picture-form form-box"
  }, __jsx("form", {
    className: "jsx-4105451522"
  }, __jsx(_components_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: user.resim,
    alt: user.kadi
  }), __jsx("label", {
    className: "jsx-4105451522" + " " + "picture-label"
  }, "yeni resim se\xE7", __jsx("input", {
    type: "file",
    className: "jsx-4105451522" + " " + "picture-btn"
  })), __jsx("button", {
    type: "submit",
    className: "jsx-4105451522" + " " + "form-save-btn"
  }, "kaydet"))), __jsx("div", {
    className: "jsx-4105451522" + " " + "nick-form form-box"
  }, __jsx("form", {
    className: "jsx-4105451522"
  }, __jsx("input", {
    type: "text",
    placeholder: "yeni kullan\u0131c\u0131 ad\u0131",
    readOnly: true,
    className: "jsx-4105451522" + " " + "default-input"
  }), __jsx("button", {
    type: "submit",
    disabled: true,
    title: "kullan\u0131c\u0131 ad\u0131 de\u011Fi\u015Ftirilemez.",
    className: "jsx-4105451522" + " " + "form-save-btn disabled"
  }, "kaydet"))), __jsx("div", {
    className: "jsx-4105451522" + " " + "mail-form form-box"
  }, __jsx("form", {
    className: "jsx-4105451522"
  }, __jsx("input", {
    type: "mail",
    placeholder: "yeni mail gir",
    readOnly: true,
    className: "jsx-4105451522" + " " + "default-input"
  }), __jsx("button", {
    type: "submit",
    disabled: true,
    title: "mail adresi de\u011Fi\u015Ftirme hakk\u0131n\u0131z yok",
    className: "jsx-4105451522" + " " + "form-save-btn disabled"
  }, "kaydet"))), __jsx("div", {
    className: "jsx-4105451522" + " " + "passwd-form form-box"
  }, __jsx("form", {
    className: "jsx-4105451522"
  }, __jsx("input", {
    type: "password",
    placeholder: "yeni \u015Fifre",
    className: "jsx-4105451522" + " " + "default-input"
  }), __jsx("input", {
    type: "password",
    placeholder: "yeni \u015Fifre tekrar",
    className: "jsx-4105451522" + " " + "default-input"
  }), __jsx("input", {
    type: "password",
    placeholder: "mevcut \u015Fifre",
    className: "jsx-4105451522" + " " + "default-input old-passwd"
  }), __jsx("button", {
    className: "jsx-4105451522" + " " + "form-save-btn"
  }, "kaydet"))))), __jsx("aside", {
    className: "jsx-4105451522" + " " + "right-sidebar user-sidebar"
  }, __jsx(_components_userContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    nick: user.kadi,
    picture: user.resim,
    userId: user.id
  }), __jsx("h1", {
    className: "jsx-4105451522"
  }, "Right side")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4105451522"
  }, ".content.jsx-4105451522{-webkit-flex:1;-ms-flex:1;flex:1;background-color:var(--main-dark-gray-color);color:#fff;}.header.jsx-4105451522{width:100%;height:40px;border-bottom:1px solid var(--main-gray-color);}.header.jsx-4105451522 h4.jsx-4105451522{font-size:var(--big-font-size);height:40px;line-height:39px;margin-left:15px;font-family:Tekton-pro,sans-serif;font-weight:bold;}.form-wrapper.jsx-4105451522{margin-top:50px;padding-bottom:50px;}.form-box.jsx-4105451522{width:80%;margin:0 auto;margin-top:45px;background:var(--main-gray-color);height:60px;position:relative;}.form-box.jsx-4105451522 form.jsx-4105451522{width:100%;height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.form-box img{width:90px;height:90px;border-radius:50%;position:relative;left:-30px;}.picture-btn.jsx-4105451522{display:none;}.picture-label.jsx-4105451522{border:1px solid #000;padding:4px 12px;background-color:#000;cursor:pointer;}.form-box.jsx-4105451522 input.jsx-4105451522{margin:0 0 0 15px;width:40%;padding:4px;}.old-passwd.jsx-4105451522{margin-right:15px !important;}button.form-save-btn.jsx-4105451522{margin-left:auto;background-color:var(--main-red-color);border:none;outline:none;padding:8px 22px;font-size:var(--small-font-size);color:#fff;margin-right:10px;cursor:pointer;}button.form-save-btn.disabled.jsx-4105451522{cursor:no-drop;background-color:#000;}@media(max-width:1320px){.passwd-form.jsx-4105451522{height:120px;}.passwd-form.jsx-4105451522 form.jsx-4105451522{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:120px;}.passwd-form.jsx-4105451522 button.jsx-4105451522{margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxwcm9qZWN0c1xcbm9zYmlyLWZyb250ZW5kXFxwYWdlc1xcZWRpdFByb2ZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkZTLEFBR29CLEFBS0ksQUFLb0IsQUFRZixBQUlOLEFBUUMsQUFNQSxBQU9FLEFBR1MsQUFNSixBQUtXLEFBR1osQUFXRixBQUtELEFBR0UsQUFJTixTQUNWLENBN0RjLENBakJGLEFBeUJBLEFBTUEsRUFPZCxBQWlDRSxFQUxzQixDQXJESCxDQTBDb0IsQ0FSN0IsSUFOTyxDQXhDOEIsQUF5QmxDLEFBTUssQ0FkRixJQThCSixDQUlkLEVBL0NjLEVBVmlDLEdBbUIvQyxDQXFEQSxFQXpCd0IsQ0F2QlksQUE4QnBDLENBaEJvQixFQTNCRCxhQWtETCxDQWtCRSxFQXhDSCxDQTNCTSxDQW9DRixPQWNGLEVBdkRmLEFBaUNBLEFBd0NFLElBdkRZLEVBd0JkLENBcENxQyxDQVp4QixHQThETSxLQXJDQyxHQXhCcEIsUUE4QnFCLENBZ0NjLE1BckNuQyxPQWJtQixpQkFDbkIsR0FrRGEsV0FDTyxrQkFDSCxlQUNqQixlQW5DQSIsImZpbGUiOiJFOlxccHJvamVjdHNcXG5vc2Jpci1mcm9udGVuZFxccGFnZXNcXGVkaXRQcm9maWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHdpdGhBdXRoIH0gZnJvbSBcIi4uL3V0aWxzL2F1dGhcIjtcclxuaW1wb3J0IFVzZXJDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdXNlckNvbnRhaW5lclwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuZnVuY3Rpb24gRWRpdFByb2ZpbGUoKSB7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmF1dGgudXNlcik7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Qcm9maWwgRMO8emVubGU8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICA8aDQ+cHJvZmlsIGTDvHplbmxlPC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWN0dXJlLWZvcm0gZm9ybS1ib3hcIj5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17dXNlci5yZXNpbX0gYWx0PXt1c2VyLmthZGl9IC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInBpY3R1cmUtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgIHllbmkgcmVzaW0gc2XDp1xyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPVwicGljdHVyZS1idG5cIiAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiZm9ybS1zYXZlLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAga2F5ZGV0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuaWNrLWZvcm0gZm9ybS1ib3hcIj5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWZhdWx0LWlucHV0XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieWVuaSBrdWxsYW7EsWPEsSBhZMSxXCJcclxuICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2F2ZS1idG4gZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwia3VsbGFuxLFjxLEgYWTEsSBkZcSfacWfdGlyaWxlbWV6LlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAga2F5ZGV0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWlsLWZvcm0gZm9ybS1ib3hcIj5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibWFpbFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWZhdWx0LWlucHV0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieWVuaSBtYWlsIGdpclwiXHJcbiAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNhdmUtYnRuIGRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIm1haWwgYWRyZXNpIGRlxJ9pxZ90aXJtZSBoYWtrxLFuxLF6IHlva1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAga2F5ZGV0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXNzd2QtZm9ybSBmb3JtLWJveFwiPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWZhdWx0LWlucHV0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieWVuaSDFn2lmcmVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVmYXVsdC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInllbmkgxZ9pZnJlIHRla3JhclwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWZhdWx0LWlucHV0IG9sZC1wYXNzd2RcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJtZXZjdXQgxZ9pZnJlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZm9ybS1zYXZlLWJ0blwiPmtheWRldDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJyaWdodC1zaWRlYmFyIHVzZXItc2lkZWJhclwiPlxyXG4gICAgICAgIDxVc2VyQ29udGFpbmVyIG5pY2s9e3VzZXIua2FkaX0gcGljdHVyZT17dXNlci5yZXNpbX0gdXNlcklkPXt1c2VyLmlkfSAvPlxyXG4gICAgICAgIDxoMT5SaWdodCBzaWRlPC9oMT5cclxuICAgICAgPC9hc2lkZT5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWRhcmstZ3JheS1jb2xvcik7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tYWluLWdyYXktY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRlciBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tYmlnLWZvbnQtc2l6ZSk7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM5cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogVGVrdG9uLXBybywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS13cmFwcGVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206NTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLWJveCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWdyYXktY29sb3IpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLWJveCBmb3JtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDpnbG9iYWwoLmZvcm0tYm94IGltZykge1xyXG4gICAgICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbGVmdDogLTMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGljdHVyZS1idG4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBpY3R1cmUtbGFiZWwge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tYm94IGlucHV0IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAxNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub2xkLXBhc3N3ZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9uLmZvcm0tc2F2ZS1idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1yZWQtY29sb3IpO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQtc2l6ZSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbi5mb3JtLXNhdmUtYnRuLmRpc2FibGVkIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBuby1kcm9wO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhKG1heC13aWR0aDoxMzIwcHgpe1xyXG4gICAgICAgICAgICAucGFzc3dkLWZvcm17XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OjEyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wYXNzd2QtZm9ybSBmb3Jte1xyXG4gICAgICAgICAgICAgIGZsZXgtd3JhcDp3cmFwO1xyXG4gICAgICAgICAgICAgIGhlaWdodDoxMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGFzc3dkLWZvcm0gYnV0dG9ue1xyXG4gICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoRWRpdFByb2ZpbGUsIHRydWUpO1xyXG4iXX0= */\n/*@ sourceURL=E:\\projects\\nosbir-frontend\\pages\\editProfile.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_auth__WEBPACK_IMPORTED_MODULE_3__["withAuth"])(EditProfile, true));

/***/ })

})
//# sourceMappingURL=editProfile.js.9a602b21aebfd0722243.hot-update.js.map