webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/postList.js":
/*!********************************!*\
  !*** ./components/postList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post */ "./components/post.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loading */ "./components/loading.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error */ "./components/error.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_postActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/actions/postActions */ "./store/actions/postActions.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;







var PostList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PostList, _React$Component);

  function PostList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostList).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onScrollHandle", function (e) {
      // inner görünen alan
      // scrollTop ne kadar aşağıda olduğu
      // offsetHeight sayfanın toplam yüksekliği
      var _this$props = _this.props,
          total = _this$props.total,
          group = _this$props.group,
          fetchPosts = _this$props.fetchPosts;

      if (_this.state.page < total - 1) {
        if (window.innerHeight + document.documentElement.scrollTop + 200 >= document.documentElement.offsetHeight) {
          _this.setState(function (oldState) {
            return {
              page: oldState.page + 1
            };
          }, function () {
            fetchPosts(group, _this.state.page);
          });
        }
      } else window.removeEventListener("scroll", _this.onScrollHandle);
    });

    _this.state = {
      page: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.posts <= 0) this.props.fetchPosts(this.props.group, this.state.page);
      window.addEventListener("scroll", this.onScrollHandle);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener(scroll, this.onScrollHandle);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          posts = _this$props2.posts,
          isLoading = _this$props2.isLoading,
          isRejected = _this$props2.isRejected,
          msg = _this$props2.msg,
          total = _this$props2.total;
      if (isLoading) return __jsx(_loading__WEBPACK_IMPORTED_MODULE_9__["default"], null);else if (isRejected) return __jsx(_error__WEBPACK_IMPORTED_MODULE_10__["default"], {
        msg: msg
      });else if (!posts.length) return __jsx(_error__WEBPACK_IMPORTED_MODULE_10__["default"], {
        msg: "Post Bulunamad\u0131."
      });
      return __jsx("div", {
        className: "post-list"
      }, posts.map(function (p, i) {
        return __jsx(_post__WEBPACK_IMPORTED_MODULE_8__["default"], {
          post: p,
          key: i
        });
      }), this.state.page !== 0 && this.state.page >= total - 1 ? __jsx(_error__WEBPACK_IMPORTED_MODULE_10__["default"], {
        msg: "B\xFCt\xFCn postlar bu kadard\u0131.Hepsini g\xF6rd\xFCn."
      }) : "");
    }
  }]);

  return PostList;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var posts = _ref.posts;
  return {
    posts: posts.posts,
    isLoading: posts.post_loading,
    isRejected: posts.post_reject,
    msg: posts.post_error_msg,
    total: posts.total
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, {
  fetchPosts: _store_actions_postActions__WEBPACK_IMPORTED_MODULE_12__["fetchPosts"]
})(PostList));

/***/ })

})
//# sourceMappingURL=index.js.48b1392db05fcf19f2aa.hot-update.js.map