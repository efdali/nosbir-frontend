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
    className: "jsx-963979012" + " " + "content"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("title", {
    className: "jsx-963979012"
  }, "T\xFCm Gruplar")), __jsx(_components_search__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  }), __jsx("div", {
    className: "jsx-963979012" + " " + "group-container"
  }, groups && groups.filter(function (g) {
    return g.name.toLowerCase().includes(value);
  }).map(function (g) {
    return __jsx("div", {
      key: g.group_id,
      className: "jsx-963979012" + " " + "group-card"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/n/".concat(g.group_seo)
    }, __jsx("a", {
      className: "jsx-963979012"
    }, __jsx(_components_image__WEBPACK_IMPORTED_MODULE_7__["default"], {
      src: g.logo,
      alt: g.name,
      className: "group-icon",
      group: true
    }))), __jsx("h2", {
      className: "jsx-963979012" + " " + "group-name"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/".concat(g.group_seo)
    }, __jsx("a", {
      className: "jsx-963979012"
    }, g.name))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "963979012"
  }, ".content.jsx-963979012{-webkit-flex:1;-ms-flex:1;flex:1;}.group-container.jsx-963979012{width:100%;margin:40px auto 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.group-card.jsx-963979012{width:20%;height:240px;margin-bottom:20px;margin-left:15px;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:var(--main-red-color);}.group-card.jsx-963979012 a.jsx-963979012{display:block;position:relative;top:35%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);text-align:center;}.group-icon{width:100px;height:100px;margin:0 auto;}h2.group-name.jsx-963979012{font-size:var(--big-font-size);text-align:center;font-family:Tekton-pro,sans-serif;margin:40px 0 10px;font-weight:bolder;}h2.group-name.jsx-963979012>a.jsx-963979012{color:#fff;}@media screen and (max-width:850px){.group-container.jsx-963979012{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.group-card.jsx-963979012{-webkit-flex:1;-ms-flex:1;flex:1;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxwcm9qZWN0c1xcbm9zYmlyLWZyb250ZW5kXFxwYWdlc1xcZ3JvdXBzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEUyxBQUdvQixBQUdJLEFBUUQsQUFVSSxBQU9GLEFBS21CLEFBT3BCLEFBSWEsQUFHZixVQW5DSSxDQVJNLEFBcUNyQixDQVplLEVBUEssU0FUQyxFQWlCTCxLQXpCRCxDQTZCSyxDQVhWLENBdEJWLEFBK0NlLE1BakJmLENBUDZCLEVBVlgsRUFtQ2hCLEtBZG1DLFVBcEJiLG1CQThCdEIsR0E3QmEsRUFvQk0sbUJBQ0EsRUEvQlUsaUJBZ0MvQixZQWJtQixrQkFDbkIsSUFUdUIsd0VBVkYsTUFXYSxpQ0FDbEMsc0RBWGlCLHlEQUNqQiIsImZpbGUiOiJFOlxccHJvamVjdHNcXG5vc2Jpci1mcm9udGVuZFxccGFnZXNcXGdyb3Vwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWFyY2hcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL2ltYWdlXCI7XHJcbmltcG9ydCBodHRwIGZyb20gXCIuLi91dGlscy9odHRwXCI7XHJcbmltcG9ydCB7IHdpdGhBdXRoIH0gZnJvbSBcIi4uL3V0aWxzL2F1dGhcIjtcclxuY29uc3QgR3JvdXBzID0gKHsgZ3JvdXBzIH0pID0+IHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGdyb3Vwcy5sZW5naHQgPD0gMCkge1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJlZmZlY3RcIik7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Uw7xtIEdydXBsYXI8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxTZWFyY2ggdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17ZSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtncm91cHMgJiZcclxuICAgICAgICAgIGdyb3Vwc1xyXG4gICAgICAgICAgICAuZmlsdGVyKGcgPT4gZy5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUpKVxyXG4gICAgICAgICAgICAubWFwKGcgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtY2FyZFwiIGtleT17Zy5ncm91cF9pZH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL24vJHtnLmdyb3VwX3Nlb31gfT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2cubG9nb31cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17Zy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAtaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBncm91cD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZ3JvdXAtbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7Zy5ncm91cF9zZW99YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+e2cubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ncm91cC1jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiA0MHB4IGF1dG8gMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ncm91cC1jYXJkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnZhcigtLW1haW4tcmVkLWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ncm91cC1jYXJkIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDM1JTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDpnbG9iYWwoLmdyb3VwLWljb24pIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgyLmdyb3VwLW5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWJpZy1mb250LXNpemUpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBUZWt0b24tcHJvLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDQwcHggMCAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDIuZ3JvdXAtbmFtZSA+IGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAgICAgICAgIC5ncm91cC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmdyb3VwLWNhcmQge1xyXG4gICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoR3JvdXBzKTtcclxuR3JvdXBzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XHJcbiAgY29uc3QgZ3JvdXBzID0gYXdhaXQgaHR0cFxyXG4gICAgLmdldChcInR1bV9ncnVwbGFyLnBocFwiKVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5ncnVwbGFyKTtcclxuXHJcbiAgcmV0dXJuIHsgZ3JvdXBzIH07XHJcbn07XHJcbiJdfQ== */\n/*@ sourceURL=E:\\projects\\nosbir-frontend\\pages\\groups.js */"));
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
//# sourceMappingURL=groups.js.807cf28487641d8738cf.hot-update.js.map