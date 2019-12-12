webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store/actions/postActions.js":
/*!**************************************!*\
  !*** ./store/actions/postActions.js ***!
  \**************************************/
/*! exports provided: FETCHING_POSTS, fetchingPosts, POSTS_FAIL, postsFail, POSTS_SUCCESS, postsSuccess, fetchPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCHING_POSTS", function() { return FETCHING_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchingPosts", function() { return fetchingPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTS_FAIL", function() { return POSTS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postsFail", function() { return postsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTS_SUCCESS", function() { return POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postsSuccess", function() { return postsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPosts", function() { return fetchPosts; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");


var FETCHING_POSTS = "FETCHING_POSTS";
var fetchingPosts = function fetchingPosts() {
  return {
    type: FETCHING_POSTS
  };
};
var POSTS_FAIL = "POSTS_FAIL";
var postsFail = function postsFail(msg) {
  return {
    type: POSTS_FAIL,
    msg: msg
  };
};
var POSTS_SUCCESS = "POSTS_SUCCESS";
var postsSuccess = function postsSuccess(posts, total) {
  return {
    type: POSTS_SUCCESS,
    posts: posts,
    total: total
  };
};
var fetchPosts = function fetchPosts() {
  var group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch, getState, http) {
        var params;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch(fetchingPosts());
                params = {
                  s: page,
                  topluluk: group ? group : null
                };
                _context.next = 4;
                return http.get("postlar.php", {
                  params: params
                }).then(function (res) {
                  return res.data;
                }).then(function (res) {
                  if (res.durum) dispatch(postsSuccess(res.postlar, res.toplam));else dispatch(postsFail(res.mesaj));
                })["catch"](function (err) {
                  return dispatch(postsFail(err));
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ })

})
//# sourceMappingURL=_app.js.99255913bad25cbccaf3.hot-update.js.map