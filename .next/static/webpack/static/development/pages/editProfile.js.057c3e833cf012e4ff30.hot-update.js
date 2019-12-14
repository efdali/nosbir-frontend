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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(user.resim),
      image = _useState[0],
      setImage = _useState[1];

  var changeImageHandler = function changeImageHandler(e) {
    e.preventDefault();
    alert(e.target.files[0]);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
    className: "jsx-788352345"
  }, "Profil D\xFCzenle")), __jsx("div", {
    className: "jsx-788352345" + " " + "content"
  }, __jsx("div", {
    className: "jsx-788352345" + " " + "header"
  }, __jsx("h4", {
    className: "jsx-788352345"
  }, "profil d\xFCzenle")), __jsx("div", {
    className: "jsx-788352345" + " " + "form-wrapper"
  }, __jsx("div", {
    className: "jsx-788352345" + " " + "picture-form form-box"
  }, __jsx("form", {
    onSubmit: changeImageHandler,
    className: "jsx-788352345"
  }, __jsx(_components_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: image,
    alt: user.kadi
  }), __jsx("label", {
    className: "jsx-788352345" + " " + "picture-label"
  }, "yeni resim se\xE7", __jsx("input", {
    type: "file",
    className: "jsx-788352345" + " " + "picture-btn"
  })), __jsx("button", {
    type: "submit",
    onClick: changeImageHandler,
    className: "jsx-788352345" + " " + "form-save-btn"
  }, "kaydet"))), __jsx("div", {
    className: "jsx-788352345" + " " + "nick-form form-box"
  }, __jsx("form", {
    className: "jsx-788352345"
  }, __jsx("input", {
    type: "text",
    placeholder: "yeni kullan\u0131c\u0131 ad\u0131",
    readOnly: true,
    className: "jsx-788352345" + " " + "default-input"
  }), __jsx("button", {
    type: "submit",
    disabled: true,
    title: "kullan\u0131c\u0131 ad\u0131 de\u011Fi\u015Ftirilemez.",
    className: "jsx-788352345" + " " + "form-save-btn disabled"
  }, "kaydet"))), __jsx("div", {
    className: "jsx-788352345" + " " + "mail-form form-box"
  }, __jsx("form", {
    className: "jsx-788352345"
  }, __jsx("input", {
    type: "mail",
    placeholder: "yeni mail gir",
    readOnly: true,
    className: "jsx-788352345" + " " + "default-input"
  }), __jsx("button", {
    type: "submit",
    disabled: true,
    title: "mail adresi de\u011Fi\u015Ftirme hakk\u0131n\u0131z yok",
    className: "jsx-788352345" + " " + "form-save-btn disabled"
  }, "kaydet"))), __jsx("div", {
    className: "jsx-788352345" + " " + "passwd-form form-box"
  }, __jsx("form", {
    className: "jsx-788352345"
  }, __jsx("input", {
    type: "password",
    placeholder: "yeni \u015Fifre",
    className: "jsx-788352345" + " " + "default-input"
  }), __jsx("input", {
    type: "password",
    placeholder: "yeni \u015Fifre tekrar",
    className: "jsx-788352345" + " " + "default-input"
  }), __jsx("input", {
    type: "password",
    placeholder: "mevcut \u015Fifre",
    className: "jsx-788352345" + " " + "default-input old-passwd"
  }), __jsx("button", {
    className: "jsx-788352345" + " " + "form-save-btn"
  }, "kaydet"))))), __jsx("aside", {
    className: "jsx-788352345" + " " + "right-sidebar user-sidebar"
  }, __jsx(_components_userContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    nick: user.kadi,
    picture: user.resim,
    userId: user.id
  }), __jsx("h1", {
    className: "jsx-788352345"
  }, "Right side")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "788352345"
  }, ".content.jsx-788352345{-webkit-flex:1;-ms-flex:1;flex:1;background-color:var(--main-dark-gray-color);color:#fff;}.header.jsx-788352345{width:100%;height:40px;border-bottom:1px solid var(--main-gray-color);}.header.jsx-788352345 h4.jsx-788352345{font-size:var(--big-font-size);height:40px;line-height:39px;margin-left:15px;font-family:Tekton-pro,sans-serif;font-weight:bold;}.form-wrapper.jsx-788352345{margin-top:50px;padding-bottom:50px;}.form-box.jsx-788352345{width:80%;margin:0 auto;margin-top:45px;background:var(--main-gray-color);height:60px;position:relative;}.form-box.jsx-788352345 form.jsx-788352345{width:100%;height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.form-box img{width:90px;height:90px;border-radius:50%;position:relative;left:-30px;}.picture-btn.jsx-788352345{display:none;}.picture-label.jsx-788352345{border:1px solid #000;padding:4px 12px;background-color:#000;cursor:pointer;}.form-box.jsx-788352345 input.jsx-788352345{margin:0 0 0 15px;width:40%;padding:4px;}.old-passwd.jsx-788352345{margin-right:15px !important;}button.form-save-btn.jsx-788352345{margin-left:auto;background-color:var(--main-red-color);border:none;outline:none;padding:8px 22px;font-size:var(--small-font-size);color:#fff;margin-right:10px;cursor:pointer;}button.form-save-btn.disabled.jsx-788352345{cursor:no-drop;background-color:#000;}@media (max-width:1320px){.passwd-form.jsx-788352345{height:120px;}.passwd-form.jsx-788352345 form.jsx-788352345{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:120px;}.passwd-form.jsx-788352345 button.jsx-788352345{margin:0;}.picture-label.jsx-788352345{margin-left:-15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxwcm9qZWN0c1xcbm9zYmlyLWZyb250ZW5kXFxwYWdlc1xcZWRpdFByb2ZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0dTLEFBR29CLEFBS0ksQUFLb0IsQUFRZixBQUlOLEFBUUMsQUFNQSxBQU9FLEFBR1MsQUFNSixBQUtXLEFBR1osQUFXRixBQUtBLEFBR0UsQUFJTixBQUdRLFNBRm5CLENBN0RjLENBakJGLEFBeUJBLEFBTUEsRUFPZCxBQWlDRSxFQUxzQixDQXJERixDQTBDbUIsQ0FSN0IsQUFrQ1YsSUF4Q2lCLENBeEM4QixBQXlCbEMsQUFNSyxDQWRGLElBOEJKLENBSWQsRUEvQ2MsRUFWaUMsR0FtQi9DLENBcURBLEVBekJ3QixDQXZCWSxBQThCcEMsQ0FoQm9CLEVBM0JELGFBa0RMLENBa0JHLEVBeENKLENBM0JNLENBb0NGLE9BY0YsRUF2RGYsQUFpQ0EsQUF3Q0UsSUF2RFksRUF3QmQsQ0FwQ3FDLENBWnhCLEdBOERNLEtBckNDLEdBeEJwQixRQThCcUIsQ0FnQ2MsTUFyQ25DLE9BYm1CLGlCQUNuQixHQWtEYSxXQUNPLGtCQUNILGVBQ2pCLGVBbkNBIiwiZmlsZSI6IkU6XFxwcm9qZWN0c1xcbm9zYmlyLWZyb250ZW5kXFxwYWdlc1xcZWRpdFByb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB3aXRoQXV0aCB9IGZyb20gXCIuLi91dGlscy9hdXRoXCI7XHJcbmltcG9ydCBVc2VyQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL3VzZXJDb250YWluZXJcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmZ1bmN0aW9uIEVkaXRQcm9maWxlKCkge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hdXRoLnVzZXIpO1xyXG4gIGNvbnN0IFtpbWFnZSxzZXRJbWFnZV09dXNlU3RhdGUodXNlci5yZXNpbSk7XHJcbiAgY29uc3QgY2hhbmdlSW1hZ2VIYW5kbGVyPWU9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGFsZXJ0KGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Qcm9maWwgRMO8emVubGU8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICA8aDQ+cHJvZmlsIGTDvHplbmxlPC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWN0dXJlLWZvcm0gZm9ybS1ib3hcIj5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2NoYW5nZUltYWdlSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD17dXNlci5rYWRpfSAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJwaWN0dXJlLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICB5ZW5pIHJlc2ltIHNlw6dcclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzTmFtZT1cInBpY3R1cmUtYnRuXCIgLz5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImZvcm0tc2F2ZS1idG5cIiBvbkNsaWNrPXtjaGFuZ2VJbWFnZUhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAga2F5ZGV0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuaWNrLWZvcm0gZm9ybS1ib3hcIj5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWZhdWx0LWlucHV0XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieWVuaSBrdWxsYW7EsWPEsSBhZMSxXCJcclxuICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2F2ZS1idG4gZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwia3VsbGFuxLFjxLEgYWTEsSBkZcSfacWfdGlyaWxlbWV6LlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAga2F5ZGV0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWlsLWZvcm0gZm9ybS1ib3hcIj5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibWFpbFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWZhdWx0LWlucHV0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieWVuaSBtYWlsIGdpclwiXHJcbiAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNhdmUtYnRuIGRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIm1haWwgYWRyZXNpIGRlxJ9pxZ90aXJtZSBoYWtrxLFuxLF6IHlva1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAga2F5ZGV0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXNzd2QtZm9ybSBmb3JtLWJveFwiPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWZhdWx0LWlucHV0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieWVuaSDFn2lmcmVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVmYXVsdC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInllbmkgxZ9pZnJlIHRla3JhclwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWZhdWx0LWlucHV0IG9sZC1wYXNzd2RcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJtZXZjdXQgxZ9pZnJlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZm9ybS1zYXZlLWJ0blwiPmtheWRldDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJyaWdodC1zaWRlYmFyIHVzZXItc2lkZWJhclwiPlxyXG4gICAgICAgIDxVc2VyQ29udGFpbmVyIG5pY2s9e3VzZXIua2FkaX0gcGljdHVyZT17dXNlci5yZXNpbX0gdXNlcklkPXt1c2VyLmlkfSAvPlxyXG4gICAgICAgIDxoMT5SaWdodCBzaWRlPC9oMT5cclxuICAgICAgPC9hc2lkZT5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWRhcmstZ3JheS1jb2xvcik7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tYWluLWdyYXktY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRlciBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tYmlnLWZvbnQtc2l6ZSk7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM5cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogVGVrdG9uLXBybywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS13cmFwcGVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1ib3gge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1ncmF5LWNvbG9yKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1ib3ggZm9ybSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA6Z2xvYmFsKC5mb3JtLWJveCBpbWcpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0zMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBpY3R1cmUtYnRuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5waWN0dXJlLWxhYmVsIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLWJveCBpbnB1dCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm9sZC1wYXNzd2Qge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbi5mb3JtLXNhdmUtYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tcmVkLWNvbG9yKTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMjJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250LXNpemUpO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b24uZm9ybS1zYXZlLWJ0bi5kaXNhYmxlZCB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzIwcHgpIHtcclxuICAgICAgICAgICAgLnBhc3N3ZC1mb3JtIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wYXNzd2QtZm9ybSBmb3JtIHtcclxuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGFzc3dkLWZvcm0gYnV0dG9uIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBpY3R1cmUtbGFiZWx7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6LTE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChFZGl0UHJvZmlsZSwgdHJ1ZSk7XHJcbiJdfQ== */\n/*@ sourceURL=E:\\projects\\nosbir-frontend\\pages\\editProfile.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_auth__WEBPACK_IMPORTED_MODULE_3__["withAuth"])(EditProfile, true));

/***/ })

})
//# sourceMappingURL=editProfile.js.057c3e833cf012e4ff30.hot-update.js.map