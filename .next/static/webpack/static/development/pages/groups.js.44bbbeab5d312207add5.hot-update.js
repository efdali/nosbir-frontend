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
    className: "jsx-1110242732" + " " + "content"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("title", {
    className: "jsx-1110242732"
  }, "T\xFCm Gruplar")), __jsx(_components_search__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  }), __jsx("div", {
    className: "jsx-1110242732" + " " + "group-container"
  }, groups && groups.filter(function (g) {
    return g.name.toLowerCase().includes(value);
  }).map(function (g) {
    return __jsx("div", {
      key: g.group_id,
      className: "jsx-1110242732" + " " + "group-card"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/n/".concat(g.group_seo)
    }, __jsx("a", {
      className: "jsx-1110242732"
    }, __jsx(_components_image__WEBPACK_IMPORTED_MODULE_7__["default"], {
      src: g.logo,
      alt: g.name,
      className: "group-icon",
      group: true
    }))), __jsx("h2", {
      className: "jsx-1110242732" + " " + "group-name"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/".concat(g.group_seo)
    }, __jsx("a", {
      className: "jsx-1110242732"
    }, g.name))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1110242732"
  }, ".content.jsx-1110242732{-webkit-flex:1;-ms-flex:1;flex:1;}.group-container.jsx-1110242732{width:100%;margin:40px auto 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.group-card.jsx-1110242732{width:20%;height:240px;margin-bottom:20px;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:var(--main-red-color);}.left-img-container.jsx-1110242732{-webkit-flex-basis:20%;-ms-flex-preferred-size:20%;flex-basis:20%;padding:6px;height:inherit;text-align:center;background-color:var(--main-red-color);}.left-img-container.jsx-1110242732 a.jsx-1110242732{display:block;position:relative;top:35%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.group-icon{width:100px;height:100px;margin:0 auto;}h2.group-name.jsx-1110242732{font-size:var(--big-font-size);text-align:center;font-family:Tekton-pro,sans-serif;margin:40px 0 10px;font-weight:bolder;}h2.group-name.jsx-1110242732>a.jsx-1110242732{color:#fff;}@media screen and (max-width:850px){.group-container.jsx-1110242732{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.group-card.jsx-1110242732{-webkit-flex:1;-ms-flex:1;flex:1;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxwcm9qZWN0c1xcbm9zYmlyLWZyb250ZW5kXFxwYWdlc1xcZ3JvdXBzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEUyxBQUdvQixBQUdJLEFBUUQsQUFRSyxBQU9ELEFBTUYsQUFLbUIsQUFPcEIsQUFJYSxBQUdmLFVBdkNJLENBUk0sQUF5Q3JCLENBWmUsRUFOSyxTQWRDLEVBcUJMLEtBN0JELENBaUNLLENBVlYsQ0EzQlYsQUFtRGUsTUFqQmYsQ0FONkIsRUFmTCxFQXVDdEIsS0FkbUMsZUF4QnRCLEVBS0QsWUFDRyxBQTRCZixLQVRtQixVQWxCRCxTQW1CQyxFQW5DVSxPQWlCVSxVQW1CekMsWUFaQSxLQWRrQyxZQVFsQyxxQkFQQSx3REFWcUIsNkZBQ0oseURBQ2pCIiwiZmlsZSI6IkU6XFxwcm9qZWN0c1xcbm9zYmlyLWZyb250ZW5kXFxwYWdlc1xcZ3JvdXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL3NlYXJjaFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW1hZ2VcIjtcclxuaW1wb3J0IGh0dHAgZnJvbSBcIi4uL3V0aWxzL2h0dHBcIjtcclxuaW1wb3J0IHsgd2l0aEF1dGggfSBmcm9tIFwiLi4vdXRpbHMvYXV0aFwiO1xyXG5jb25zdCBHcm91cHMgPSAoeyBncm91cHMgfSkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZ3JvdXBzLmxlbmdodCA8PSAwKSB7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcImVmZmVjdFwiKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlTDvG0gR3J1cGxhcjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFNlYXJjaCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtlID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtY29udGFpbmVyXCI+XHJcbiAgICAgICAge2dyb3VwcyAmJlxyXG4gICAgICAgICAgZ3JvdXBzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZyA9PiBnLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZSkpXHJcbiAgICAgICAgICAgIC5tYXAoZyA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1jYXJkXCIga2V5PXtnLmdyb3VwX2lkfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avbi8ke2cuZ3JvdXBfc2VvfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17Zy5sb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtnLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cC1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGdyb3VwPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJncm91cC1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtnLmdyb3VwX3Nlb31gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT57Zy5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmdyb3VwLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDQwcHggYXV0byAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmdyb3VwLWNhcmQge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnZhcigtLW1haW4tcmVkLWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sZWZ0LWltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAyMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tcmVkLWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sZWZ0LWltZy1jb250YWluZXIgYSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogMzUlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA6Z2xvYmFsKC5ncm91cC1pY29uKSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMi5ncm91cC1uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1iaWctZm9udC1zaXplKTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogVGVrdG9uLXBybywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDAgMTBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgyLmdyb3VwLW5hbWUgPiBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgICAgICAgICAuZ3JvdXAtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ncm91cC1jYXJkIHtcclxuICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKEdyb3Vwcyk7XHJcbkdyb3Vwcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xyXG4gIGNvbnN0IGdyb3VwcyA9IGF3YWl0IGh0dHBcclxuICAgIC5nZXQoXCJ0dW1fZ3J1cGxhci5waHBcIilcclxuICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuZ3J1cGxhcik7XHJcblxyXG4gIHJldHVybiB7IGdyb3VwcyB9O1xyXG59O1xyXG4iXX0= */\n/*@ sourceURL=E:\\projects\\nosbir-frontend\\pages\\groups.js */"));
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
//# sourceMappingURL=groups.js.44bbbeab5d312207add5.hot-update.js.map