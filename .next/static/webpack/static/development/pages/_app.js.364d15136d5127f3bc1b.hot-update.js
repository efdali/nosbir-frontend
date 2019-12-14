webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/image.js":
/*!*****************************!*\
  !*** ./components/image.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Image(props) {
  if (props.withoutUrl) return __jsx("img", {
    src: props.src,
    className: props.className,
    alt: props.alt
  });
  return __jsx("img", {
    src: !props.group ? "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["IMAGE_URL"]).concat(props.src) : "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["GROUP_IMAGE_URL"]).concat(props.src),
    className: props.className,
    alt: props.alt
  });
}

/***/ })

})
//# sourceMappingURL=_app.js.364d15136d5127f3bc1b.hot-update.js.map