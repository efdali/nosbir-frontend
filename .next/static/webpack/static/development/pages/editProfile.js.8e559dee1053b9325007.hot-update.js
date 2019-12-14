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
    className: "jsx-2491452844"
  }, "Profil D\xFCzenle")), __jsx("div", {
    className: "jsx-2491452844" + " " + "content"
  }, __jsx("div", {
    className: "jsx-2491452844" + " " + "header"
  }, __jsx("h4", {
    className: "jsx-2491452844"
  }, "profil d\xFCzenle")), __jsx("div", {
    className: "jsx-2491452844" + " " + "form-wrapper"
  }, __jsx("div", {
    className: "jsx-2491452844" + " " + "picture-form form-box"
  }, __jsx("form", {
    className: "jsx-2491452844"
  }, __jsx(_components_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: user.resim,
    alt: user.kadi
  }), __jsx("label", {
    className: "jsx-2491452844" + " " + "picture-label"
  }, "yeni resim se\xE7", __jsx("input", {
    type: "file",
    className: "jsx-2491452844" + " " + "picture-btn"
  })), __jsx("button", {
    type: "submit",
    className: "jsx-2491452844" + " " + "form-save-btn"
  }, "kaydet"))), __jsx("div", {
    className: "jsx-2491452844" + " " + "nick-form form-box"
  }, __jsx("form", {
    className: "jsx-2491452844"
  }, __jsx("input", {
    type: "text",
    placeholder: "yeni kullan\u0131c\u0131 ad\u0131",
    readOnly: true,
    className: "jsx-2491452844" + " " + "default-input"
  }), __jsx("button", {
    type: "submit",
    disabled: true,
    title: "kullan\u0131c\u0131 ad\u0131 de\u011Fi\u015Ftirilemez.",
    className: "jsx-2491452844" + " " + "form-save-btn disabled"
  }, "kaydet"))), __jsx("div", {
    className: "jsx-2491452844" + " " + "mail-form form-box"
  }, __jsx("form", {
    className: "jsx-2491452844"
  }, __jsx("input", {
    type: "mail",
    placeholder: "yeni mail gir",
    readOnly: true,
    className: "jsx-2491452844" + " " + "default-input"
  }), __jsx("button", {
    type: "submit",
    disabled: true,
    title: "mail adresi de\u011Fi\u015Ftirme hakk\u0131n\u0131z yok",
    className: "jsx-2491452844" + " " + "form-save-btn disabled"
  }, "kaydet"))), __jsx("div", {
    className: "jsx-2491452844" + " " + "passwd-form form-box"
  }, __jsx("form", {
    className: "jsx-2491452844"
  }, __jsx("input", {
    type: "password",
    placeholder: "yeni \u015Fifre",
    className: "jsx-2491452844" + " " + "default-input"
  }), __jsx("input", {
    type: "password",
    placeholder: "yeni \u015Fifre tekrar",
    className: "jsx-2491452844" + " " + "default-input"
  }), __jsx("input", {
    type: "password",
    placeholder: "mevcut \u015Fifre",
    className: "jsx-2491452844" + " " + "default-input old-passwd"
  }), __jsx("button", {
    className: "jsx-2491452844" + " " + "form-save-btn"
  }, "kaydet"))))), __jsx("aside", {
    className: "jsx-2491452844" + " " + "right-sidebar user-sidebar"
  }, __jsx(_components_userContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    nick: user.kadi,
    picture: user.resim,
    userId: user.id
  }), __jsx("h1", {
    className: "jsx-2491452844"
  }, "Right side")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2491452844"
  }, ".content.jsx-2491452844{-webkit-flex:1;-ms-flex:1;flex:1;background-color:var(--main-dark-gray-color);color:#fff;}.header.jsx-2491452844{width:100%;height:40px;border-bottom:1px solid var(--main-gray-color);}.header.jsx-2491452844 h4.jsx-2491452844{font-size:var(--big-font-size);height:40px;line-height:39px;margin-left:15px;font-family:Tekton-pro,sans-serif;font-weight:bold;}.form-wrapper.jsx-2491452844{margin-top:50px;padding-bottom:50px;}.form-box.jsx-2491452844{width:80%;margin:0 auto;margin-top:45px;background:var(--main-gray-color);height:60px;position:relative;}.form-box.jsx-2491452844 form.jsx-2491452844{width:100%;height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.form-box img{width:90px;height:90px;border-radius:50%;position:relative;left:-30px;}.picture-btn.jsx-2491452844{display:none;}.picture-label.jsx-2491452844{border:1px solid #000;padding:4px 12px;background-color:#000;cursor:pointer;}.form-box.jsx-2491452844 input.jsx-2491452844{margin:0 0 0 15px;width:40%;padding:4px;}.old-passwd.jsx-2491452844{margin-right:15px !important;}button.form-save-btn.jsx-2491452844{margin-left:auto;background-color:var(--main-red-color);border:none;outline:none;padding:8px 22px;font-size:var(--small-font-size);color:#fff;margin-right:10px;cursor:pointer;}button.form-save-btn.disabled.jsx-2491452844{cursor:no-drop;background-color:#000;}@media(max-width:1320px){.passwd-form.jsx-2491452844{height:120px;}.passwd-form.jsx-2491452844 form.jsx-2491452844{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:120px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxwcm9qZWN0c1xcbm9zYmlyLWZyb250ZW5kXFxwYWdlc1xcZWRpdFByb2ZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkZTLEFBR29CLEFBS0ksQUFLb0IsQUFRZixBQUlOLEFBUUMsQUFNQSxBQU9FLEFBR1MsQUFNSixBQUtXLEFBR1osQUFXRixBQUtELEFBR0UsVUF4REYsQ0FqQkYsQUF5QkEsQUFNQSxFQU9kLEFBaUNFLEVBTHNCLENBckRILENBMENvQixDQVI3QixJQU5PLENBeEM4QixBQXlCbEMsQUFNSyxDQWRGLElBOEJKLENBSWQsRUEvQ2MsRUFWaUMsR0FtQi9DLENBcURBLEVBekJ3QixDQXZCWSxBQThCcEMsQ0FoQm9CLEVBM0JELGFBa0RMLENBa0JFLEVBeENILENBM0JNLENBb0NGLE9BY0YsRUF2RGYsQUFpQ0EsQUF3Q0UsSUF2RFksRUF3QmQsQ0FwQ3FDLENBWnhCLEdBOERNLEtBckNDLEdBeEJwQixRQThCcUIsQ0FnQ2MsTUFyQ25DLE9BYm1CLGlCQUNuQixHQWtEYSxXQUNPLGtCQUNILGVBQ2pCLGVBbkNBIiwiZmlsZSI6IkU6XFxwcm9qZWN0c1xcbm9zYmlyLWZyb250ZW5kXFxwYWdlc1xcZWRpdFByb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgd2l0aEF1dGggfSBmcm9tIFwiLi4vdXRpbHMvYXV0aFwiO1xyXG5pbXBvcnQgVXNlckNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy91c2VyQ29udGFpbmVyXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5mdW5jdGlvbiBFZGl0UHJvZmlsZSgpIHtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXV0aC51c2VyKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlByb2ZpbCBEw7x6ZW5sZTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgIDxoND5wcm9maWwgZMO8emVubGU8L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpY3R1cmUtZm9ybSBmb3JtLWJveFwiPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt1c2VyLnJlc2ltfSBhbHQ9e3VzZXIua2FkaX0gLz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicGljdHVyZS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgeWVuaSByZXNpbSBzZcOnXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9XCJwaWN0dXJlLWJ0blwiIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJmb3JtLXNhdmUtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICBrYXlkZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5pY2stZm9ybSBmb3JtLWJveFwiPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlZmF1bHQtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5ZW5pIGt1bGxhbsSxY8SxIGFkxLFcIlxyXG4gICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zYXZlLWJ0biBkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJrdWxsYW7EsWPEsSBhZMSxIGRlxJ9pxZ90aXJpbGVtZXouXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBrYXlkZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haWwtZm9ybSBmb3JtLWJveFwiPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJtYWlsXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlZmF1bHQtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5ZW5pIG1haWwgZ2lyXCJcclxuICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2F2ZS1idG4gZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwibWFpbCBhZHJlc2kgZGXEn2nFn3Rpcm1lIGhha2vEsW7EsXogeW9rXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBrYXlkZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhc3N3ZC1mb3JtIGZvcm0tYm94XCI+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlZmF1bHQtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5ZW5pIMWfaWZyZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWZhdWx0LWlucHV0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieWVuaSDFn2lmcmUgdGVrcmFyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlZmF1bHQtaW5wdXQgb2xkLXBhc3N3ZFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm1ldmN1dCDFn2lmcmVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmb3JtLXNhdmUtYnRuXCI+a2F5ZGV0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cInJpZ2h0LXNpZGViYXIgdXNlci1zaWRlYmFyXCI+XHJcbiAgICAgICAgPFVzZXJDb250YWluZXIgbmljaz17dXNlci5rYWRpfSBwaWN0dXJlPXt1c2VyLnJlc2ltfSB1c2VySWQ9e3VzZXIuaWR9IC8+XHJcbiAgICAgICAgPGgxPlJpZ2h0IHNpZGU8L2gxPlxyXG4gICAgICA8L2FzaWRlPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZGFyay1ncmF5LWNvbG9yKTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW1haW4tZ3JheS1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVhZGVyIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1iaWctZm9udC1zaXplKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzlweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBUZWt0b24tcHJvLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tYm94IHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tZ3JheS1jb2xvcik7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tYm94IGZvcm0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgOmdsb2JhbCguZm9ybS1ib3ggaW1nKSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBsZWZ0OiAtMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5waWN0dXJlLWJ0biB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGljdHVyZS1sYWJlbCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1ib3ggaW5wdXQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwIDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5vbGQtcGFzc3dkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b24uZm9ybS1zYXZlLWJ0biB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXJlZC1jb2xvcik7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDIycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udC1zaXplKTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9uLmZvcm0tc2F2ZS1idG4uZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBjdXJzb3I6IG5vLWRyb3A7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjEzMjBweCl7XHJcbiAgICAgICAgICAgIC5wYXNzd2QtZm9ybXtcclxuICAgICAgICAgICAgICBoZWlnaHQ6MTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBhc3N3ZC1mb3JtIGZvcm17XHJcbiAgICAgICAgICAgICAgZmxleC13cmFwOndyYXA7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OjEyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoRWRpdFByb2ZpbGUsIHRydWUpO1xyXG4iXX0= */\n/*@ sourceURL=E:\\projects\\nosbir-frontend\\pages\\editProfile.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_auth__WEBPACK_IMPORTED_MODULE_3__["withAuth"])(EditProfile, true));

/***/ })

})
//# sourceMappingURL=editProfile.js.8e559dee1053b9325007.hot-update.js.map