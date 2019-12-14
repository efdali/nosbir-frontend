webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/groupSidebar.js":
/*!************************************!*\
  !*** ./components/groupSidebar.js ***!
  \************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loading */ "./components/loading.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error */ "./components/error.js");
/* harmony import */ var _store_actions_groupActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/actions/groupActions */ "./store/actions/groupActions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








var GroupSidebar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(GroupSidebar, _React$Component);

  function GroupSidebar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GroupSidebar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GroupSidebar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "resizeHandler", function () {
      if (document.documentElement.offsetWidth >= 490 && _this.props.groups.length <= 0) {
        window.removeEventListener("resize", _this.resizeHandler);

        _this.props.fetchGroups();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderComponent", function () {
      var slug = _this.props.router.query.slug;
      var _this$props = _this.props,
          groups = _this$props.groups,
          isLoading = _this$props.isLoading,
          isRejected = _this$props.isRejected,
          msg = _this$props.msg;

      if (isLoading) {
        return __jsx(_loading__WEBPACK_IMPORTED_MODULE_10__["default"], null);
      } else if (isRejected) {
        return __jsx(_error__WEBPACK_IMPORTED_MODULE_11__["default"], {
          msg: msg
        });
      } else if (!groups.length) {
        return __jsx(_error__WEBPACK_IMPORTED_MODULE_11__["default"], {
          msg: "Grup Bulunamad\u0131"
        });
      } else {
        return __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/gruplar"
        }, __jsx("a", {
          className: "all-groups"
        }, "T\xFCm Gruplar \u2192"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/anasayfa"
        }, __jsx("a", {
          className: slug === undefined ? "active" : "",
          style: {
            color: "var(--second-red-color)"
          }
        }, "anasayfa"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/gundem"
        }, __jsx("a", {
          className: slug === "gundem" ? "active" : "",
          style: {
            color: "var(--second-red-color)"
          }
        }, "g\xFCndem"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/n/neverfab"
        }, __jsx("a", {
          className: slug === "neverfab" ? "active " : "",
          style: {
            color: "var(--main-green-color"
          }
        }, "neverfab"))), groups.map(function (g) {
          return __jsx("li", {
            key: g.group_id
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: "/n/".concat(g.group_seo)
          }, __jsx("a", {
            className: slug === g.group_seo ? "active" : ""
          }, g.name.toLowerCase())));
        }));
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GroupSidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (document.documentElement.offsetWidth >= 490) {
        this.props.fetchGroups();
      } else {
        window.addEventListener("resize", this.resizeHandler);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.resizeHandler);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("aside", {
        className: "left-sidebar"
      }, this.renderComponent());
    }
  }]);

  return GroupSidebar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var groups = _ref.groups,
      posts = _ref.posts;
  return {
    isLoading: groups.group_loading,
    isRejected: groups.group_reject,
    msg: groups.group_msg,
    groups: groups.groups
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, {
  fetchGroups: _store_actions_groupActions__WEBPACK_IMPORTED_MODULE_12__["fetchGroups"]
})(Object(next_router__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(GroupSidebar)));

/***/ })

})
//# sourceMappingURL=index.js.56def73ee315bce92843.hot-update.js.map