webpackHotUpdate("static\\development\\pages\\groups.js",{

/***/ "./components/search.js":
/*!******************************!*\
  !*** ./components/search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Search(props) {
  return __jsx("div", {
    className: "jsx-1836578340" + " " + "header-search"
  }, __jsx("img", {
    src: "/search-icon.png",
    alt: "nosbir-search",
    className: "jsx-1836578340" + " " + "search-icon"
  }), __jsx("form", {
    method: "GET",
    action: "/arama",
    onSubmit: props.onSubmit,
    className: "jsx-1836578340"
  }, __jsx("input", {
    value: props.value,
    onChange: props.onChange,
    type: "text",
    name: "q",
    placeholder: "ne ar\u0131yorsun?",
    className: "jsx-1836578340" + " " + "search-input"
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1836578340"
  }, "div.header-search.jsx-1836578340{width:40%;margin:0 auto;position:relative;margin-top:15px;margin-bottom:15px;border-bottom:2px solid var(--main-gray-color);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:4px;}div.header-search.jsx-1836578340 img.search-icon.jsx-1836578340{width:26px;height:26px;}div.header-search.jsx-1836578340 form.jsx-1836578340{-webkit-flex:1;-ms-flex:1;flex:1;margin-left:8px;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;}div.header-search.jsx-1836578340 form.jsx-1836578340 input.search-input.jsx-1836578340{width:100%;border:none;outline:none;font-size:var(--normal-font-size);font-family:tekton-pro,sans-serif;font-weight:bold;color:#fff;background-color:inherit;}@media(max-width:850px){div.header-search.jsx-1836578340{width:90%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxwcm9qZWN0c1xcbm9zYmlyLWZyb250ZW5kXFxjb21wb25lbnRzXFxzZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLEFBR3FCLEFBV0MsQUFJSixBQUtJLEFBV0EsVUE5QkUsQUErQmIsQ0FwQlksQUFTQSxZQVJkLEFBU2UsQ0FwQkssU0FjRixHQU9rQixNQXBCbEIsT0FjRCxTQWJJLFlBb0JnQixPQW5CWSwyQkFvQjlCLE9BUG5CLFVBUWEsR0FwQkUsUUFxQlkseUJBQzNCLHlDQXJCcUIsNkZBQ0EsbUJBQ3JCIiwiZmlsZSI6IkU6XFxwcm9qZWN0c1xcbm9zYmlyLWZyb250ZW5kXFxjb21wb25lbnRzXFxzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zZWFyY2hcIj5cclxuICAgICAgPGltZyBzcmM9XCIvc2VhcmNoLWljb24ucG5nXCIgY2xhc3NOYW1lPVwic2VhcmNoLWljb25cIiBhbHQ9XCJub3NiaXItc2VhcmNoXCIgLz5cclxuICAgICAgPGZvcm0gbWV0aG9kPVwiR0VUXCIgYWN0aW9uPVwiL2FyYW1hXCIgb25TdWJtaXQ9e3Byb3BzLm9uU3VibWl0fT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJxXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5lIGFyxLF5b3JzdW4/XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBkaXYuaGVhZGVyLXNlYXJjaCB7XHJcbiAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW1haW4tZ3JheS1jb2xvcik7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdi5oZWFkZXItc2VhcmNoIGltZy5zZWFyY2gtaWNvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2LmhlYWRlci1zZWFyY2ggZm9ybSB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGVuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2LmhlYWRlci1zZWFyY2ggZm9ybSBpbnB1dC5zZWFyY2gtaW5wdXQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtZm9udC1zaXplKTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiB0ZWt0b24tcHJvLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6ODUwcHgpe1xyXG4gICAgICAgICAgZGl2LmhlYWRlci1zZWFyY2h7XHJcbiAgICAgICAgICAgIHdpZHRoOjkwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=E:\\projects\\nosbir-frontend\\components\\search.js */"));
}

/***/ })

})
//# sourceMappingURL=groups.js.3805f2963b3b69a08652.hot-update.js.map