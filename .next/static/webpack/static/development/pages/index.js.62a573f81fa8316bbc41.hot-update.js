webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/postHeader.js":
/*!**********************************!*\
  !*** ./components/postHeader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/helper */ "./utils/helper.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function PostHeader(props) {
  return __jsx("ul", {
    className: "post-header ".concat(props["class"])
  }, __jsx("li", null, __jsx(_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: props.picture,
    alt: props.nick
  }), __jsx("div", null, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/u/@".concat(props.nick)
  }, __jsx("a", null, "@", props.nick))), __jsx("span", null, Object(_utils_helper__WEBPACK_IMPORTED_MODULE_3__["timeAgo"])(props.createdAt)))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/n/".concat(props.seo)
  }, __jsx("a", {
    className: "default-btn group-btn",
    style: props.name === "neverfab" ? {
      color: "var(--main-green-color)",
      background: "var(--main-bg-color)"
    } : {}
  }, props.name))), props.children);
}

/***/ })

})
//# sourceMappingURL=index.js.62a573f81fa8316bbc41.hot-update.js.map