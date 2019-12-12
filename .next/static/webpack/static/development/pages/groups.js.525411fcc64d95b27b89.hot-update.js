webpackHotUpdate("static\\development\\pages\\groups.js",{

/***/ "./pages/groups.js":
/*!*************************!*\
  !*** ./pages/groups.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/search */ "./components/search.js");
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/image */ "./components/image.js");
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/http */ "./utils/http.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var Groups = function Groups(_ref) {
  var groups = _ref.groups;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      value = _useState[0],
      setValue = _useState[1];

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if (groups.lenght <= 0) {}

    console.log("effect");
  }, []);
  return __jsx("div", {
    className: "jsx-3022093424" + " " + "content"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("title", {
    className: "jsx-3022093424"
  }, "T\xFCm Gruplar")), __jsx(_components_search__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  }), __jsx("div", {
    className: "jsx-3022093424" + " " + "group-container"
  }, groups && groups.filter(function (g) {
    return g.name.toLowerCase().includes(value);
  }).map(function (g) {
    return __jsx("div", {
      key: g.group_id,
      className: "jsx-3022093424" + " " + "group-card"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/n/".concat(g.group_seo)
    }, __jsx("a", {
      className: "jsx-3022093424"
    }, __jsx(_components_image__WEBPACK_IMPORTED_MODULE_7__["default"], {
      src: g.logo,
      alt: g.name,
      className: "group-icon",
      group: true
    }))), __jsx("h2", {
      className: "jsx-3022093424" + " " + "group-name"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/".concat(g.group_seo)
    }, __jsx("a", {
      className: "jsx-3022093424"
    }, g.name))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3022093424"
  }, ".content.jsx-3022093424{-webkit-flex:1;-ms-flex:1;flex:1;}.group-container.jsx-3022093424{width:100%;margin:40px auto 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.group-card.jsx-3022093424{width:20%;height:240px;margin-bottom:20px;margin-left:15px;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:var(--main-red-color);}.group-card.jsx-3022093424 a.jsx-3022093424{display:block;position:relative;top:35%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);text-;}.group-icon{width:100px;height:100px;margin:0 auto;}h2.group-name.jsx-3022093424{font-size:var(--big-font-size);text-align:center;font-family:Tekton-pro,sans-serif;margin:40px 0 10px;font-weight:bolder;}h2.group-name.jsx-3022093424>a.jsx-3022093424{color:#fff;}@media screen and (max-width:850px){.group-container.jsx-3022093424{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.group-card.jsx-3022093424{-webkit-flex:1;-ms-flex:1;flex:1;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxwcm9qZWN0c1xcbm9zYmlyLWZyb250ZW5kXFxwYWdlc1xcZ3JvdXBzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEUyxBQUdvQixBQUdJLEFBUUQsQUFVSSxBQU9GLEFBS21CLEFBT3BCLEFBSWEsQUFHZixVQW5DSSxDQVJNLEFBcUNyQixDQVplLEVBUEssU0FUQyxFQWlCTCxLQXpCRCxDQTZCSyxDQVhWLENBdEJWLEFBK0NlLE1BakJmLENBUDZCLEVBVlgsRUFtQ2hCLEtBZG1DLFVBcEJiLG1CQThCdEIsR0E3QmEsRUFvQk0sbUJBQ0EsRUEvQlUsaUJBZ0MvQixZQVpELE1BQUMsZ0JBVHVCLHdFQVZGLE1BV2EsaUNBQ2xDLHNEQVhpQix5REFDakIiLCJmaWxlIjoiRTpcXHByb2plY3RzXFxub3NiaXItZnJvbnRlbmRcXHBhZ2VzXFxncm91cHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VhcmNoXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbWFnZVwiO1xyXG5pbXBvcnQgaHR0cCBmcm9tIFwiLi4vdXRpbHMvaHR0cFwiO1xyXG5pbXBvcnQgeyB3aXRoQXV0aCB9IGZyb20gXCIuLi91dGlscy9hdXRoXCI7XHJcbmNvbnN0IEdyb3VwcyA9ICh7IGdyb3VwcyB9KSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChncm91cHMubGVuZ2h0IDw9IDApIHtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiZWZmZWN0XCIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VMO8bSBHcnVwbGFyPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8U2VhcmNoIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2UgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1jb250YWluZXJcIj5cclxuICAgICAgICB7Z3JvdXBzICYmXHJcbiAgICAgICAgICBncm91cHNcclxuICAgICAgICAgICAgLmZpbHRlcihnID0+IGcubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlKSlcclxuICAgICAgICAgICAgLm1hcChnID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLWNhcmRcIiBrZXk9e2cuZ3JvdXBfaWR9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9uLyR7Zy5ncm91cF9zZW99YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtnLmxvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2cubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZ3JvdXA9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImdyb3VwLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke2cuZ3JvdXBfc2VvfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPntnLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZ3JvdXAtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNDBweCBhdXRvIDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZ3JvdXAtY2FyZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDp2YXIoLS1tYWluLXJlZC1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZ3JvdXAtY2FyZCBhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAzNSU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgdGV4dC1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDpnbG9iYWwoLmdyb3VwLWljb24pIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgyLmdyb3VwLW5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWJpZy1mb250LXNpemUpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBUZWt0b24tcHJvLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDQwcHggMCAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDIuZ3JvdXAtbmFtZSA+IGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAgICAgICAgIC5ncm91cC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmdyb3VwLWNhcmQge1xyXG4gICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoR3JvdXBzKTtcclxuR3JvdXBzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XHJcbiAgY29uc3QgZ3JvdXBzID0gYXdhaXQgaHR0cFxyXG4gICAgLmdldChcInR1bV9ncnVwbGFyLnBocFwiKVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5ncnVwbGFyKTtcclxuXHJcbiAgcmV0dXJuIHsgZ3JvdXBzIH07XHJcbn07XHJcbiJdfQ== */\n/*@ sourceURL=E:\\projects\\nosbir-frontend\\pages\\groups.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_auth__WEBPACK_IMPORTED_MODULE_9__["withAuth"])(Groups));

Groups.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var groups;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _utils_http__WEBPACK_IMPORTED_MODULE_8__["default"].get("tum_gruplar.php").then(function (res) {
              return res.data;
            }).then(function (res) {
              return res.gruplar;
            });

          case 2:
            groups = _context.sent;
            return _context.abrupt("return", {
              groups: groups
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=groups.js.525411fcc64d95b27b89.hot-update.js.map