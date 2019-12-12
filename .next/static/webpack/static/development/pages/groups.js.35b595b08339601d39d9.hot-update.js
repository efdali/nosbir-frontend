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
    className: "jsx-210573158" + " " + "content"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("title", {
    className: "jsx-210573158"
  }, "T\xFCm Gruplar")), __jsx(_components_search__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  }), __jsx("div", {
    className: "jsx-210573158" + " " + "group-container"
  }, groups && groups.filter(function (g) {
    return g.name.toLowerCase().includes(value);
  }).map(function (g) {
    return __jsx("div", {
      key: g.group_id,
      className: "jsx-210573158" + " " + "group-card"
    }, __jsx("div", {
      className: "jsx-210573158" + " " + "left-img-container"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: g.group_seo
    }, __jsx("a", {
      className: "jsx-210573158"
    }, __jsx(_components_image__WEBPACK_IMPORTED_MODULE_7__["default"], {
      src: g.logo,
      alt: g.name,
      className: "group-icon",
      group: true
    }))), __jsx("h2", {
      className: "jsx-210573158" + " " + "group-name"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/".concat(g.group_seo)
    }, __jsx("a", {
      className: "jsx-210573158"
    }, g.name)))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "210573158"
  }, ".content.jsx-210573158{-webkit-flex:1;-ms-flex:1;flex:1;}.group-container.jsx-210573158{width:100%;margin:40px auto 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.group-card.jsx-210573158{width:45%;height:240px;margin-bottom:20px;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.left-img-container.jsx-210573158{-webkit-flex-basis:20%;-ms-flex-preferred-size:20%;flex-basis:20%;padding:6px;height:inherit;text-align:center;background-color:var(--main-red-color);}.left-img-container.jsx-210573158 a.jsx-210573158{display:block;position:relative;top:35%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.group-icon{width:100px;height:100px;margin:0 auto;}h2.group-name.jsx-210573158{font-size:var(--big-font-size);text-align:center;font-family:Tekton-pro,sans-serif;margin:40px 0 10px;font-weight:bolder;}h2.group-name.jsx-210573158>a.jsx-210573158{color:#fff;}.right-container.jsx-210573158{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5px;height:240px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;}.right-container.jsx-210573158>div.jsx-210573158{padding:5px;width:50%;height:inherit;}.right-container.jsx-210573158>div.jsx-210573158:first-child{border-right:1px solid var(--main-gray-color);}.right-container.jsx-210573158>div.jsx-210573158:nth-child(2){margin-left:5px;}.right-container.jsx-210573158 h5.jsx-210573158{font-size:var(--normal-font-size);text-align:center;margin-bottom:8px;font-family:Tekton-pro,sans-serif;}.right-container.jsx-210573158 p.jsx-210573158{overflow:hidden;max-height:200px;}.right-container.jsx-210573158 p.jsx-210573158:hover{overflow-y:auto;}@media screen and (max-width:850px){.group-container.jsx-210573158{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.group-card.jsx-210573158{-webkit-flex:1;-ms-flex:1;flex:1;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxwcm9qZWN0c1xcbm9zYmlyLWZyb250ZW5kXFxwYWdlc1xcZ3JvdXBzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEUyxBQUdvQixBQUdJLEFBUUQsQUFPSyxBQU9ELEFBTUYsQUFLbUIsQUFPcEIsQUFHSixBQVFLLEFBS2tDLEFBRzlCLEFBR2tCLEFBTWxCLEFBSUEsQUFJUSxBQUdmLFVBdEVJLENBUk0sQUF3Q3JCLENBWmUsQUF1QkgsRUE3QlEsRUFxQ3BCLEFBU21CLEFBSW5CLE1BcEJpQixDQTNDSSxFQW9CTCxLQTVCRCxDQWdDSyxDQVZWLENBMUJWLEFBOENlLEFBMEJmLEFBVWUsQ0FqQkssR0FUcEIsRUF2QkEsQ0FONkIsRUFkTCxFQXNFdEIsRUF4QkYsR0F0QnFDLEdBNkJqQixZQXBETCxFQUlELElBaUR1QixRQWhEcEIsQUE0RGYsS0F6Q21CLFVBbEJELFNBbUJDLEVBbENVLEFBK0QvQixHQXJCYyxJQTFCMkIsUUEyQjFCLEVBUmYsV0FTcUIsQ0FyQnJCLEtBYkEsWUFPQSwyRUE0QmtCLEVBNUNHLGNBNkNyQiwrRUE1Q2lCLHlEQUNqQiIsImZpbGUiOiJFOlxccHJvamVjdHNcXG5vc2Jpci1mcm9udGVuZFxccGFnZXNcXGdyb3Vwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWFyY2hcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL2ltYWdlXCI7XHJcbmltcG9ydCBodHRwIGZyb20gXCIuLi91dGlscy9odHRwXCI7XHJcbmltcG9ydCB7IHdpdGhBdXRoIH0gZnJvbSBcIi4uL3V0aWxzL2F1dGhcIjtcclxuY29uc3QgR3JvdXBzID0gKHsgZ3JvdXBzIH0pID0+IHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGdyb3Vwcy5sZW5naHQgPD0gMCkge1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJlZmZlY3RcIik7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Uw7xtIEdydXBsYXI8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxTZWFyY2ggdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17ZSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtncm91cHMgJiZcclxuICAgICAgICAgIGdyb3Vwc1xyXG4gICAgICAgICAgICAuZmlsdGVyKGcgPT4gZy5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUpKVxyXG4gICAgICAgICAgICAubWFwKGcgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtY2FyZFwiIGtleT17Zy5ncm91cF9pZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtnLmdyb3VwX3Nlb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtnLmxvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17Zy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cC1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXA9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZ3JvdXAtbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtnLmdyb3VwX3Nlb31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPntnLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+SGFra8SxbmRhPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncm91cC1zdW1tYXJ5XCI+e2cuc3VtbWFyeX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5LdXJhbGxhcjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3JvdXAtcnVsZXNcIj57Zy5ydWxlc308L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4qL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmdyb3VwLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDQwcHggYXV0byAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmdyb3VwLWNhcmQge1xyXG4gICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxlZnQtaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDIwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1yZWQtY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxlZnQtaW1nLWNvbnRhaW5lciBhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAzNSU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDpnbG9iYWwoLmdyb3VwLWljb24pIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgyLmdyb3VwLW5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWJpZy1mb250LXNpemUpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBUZWt0b24tcHJvLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDQwcHggMCAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDIuZ3JvdXAtbmFtZSA+IGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yaWdodC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmlnaHQtY29udGFpbmVyID4gZGl2IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmlnaHQtY29udGFpbmVyID4gZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tbWFpbi1ncmF5LWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yaWdodC1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yaWdodC1jb250YWluZXIgaDUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFRla3Rvbi1wcm8sIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmlnaHQtY29udGFpbmVyIHAge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yaWdodC1jb250YWluZXIgcDpob3ZlciB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgICAgICAgICAuZ3JvdXAtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ncm91cC1jYXJkIHtcclxuICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKEdyb3Vwcyk7XHJcbkdyb3Vwcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xyXG4gIGNvbnN0IGdyb3VwcyA9IGF3YWl0IGh0dHBcclxuICAgIC5nZXQoXCJ0dW1fZ3J1cGxhci5waHBcIilcclxuICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuZ3J1cGxhcik7XHJcblxyXG4gIHJldHVybiB7IGdyb3VwcyB9O1xyXG59O1xyXG4iXX0= */\n/*@ sourceURL=E:\\projects\\nosbir-frontend\\pages\\groups.js */"));
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
//# sourceMappingURL=groups.js.35b595b08339601d39d9.hot-update.js.map