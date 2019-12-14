webpackHotUpdate("static\\development\\pages\\newPost.js",{

/***/ "./pages/newPost.js":
/*!**************************!*\
  !*** ./pages/newPost.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
/* harmony import */ var _store_actions_groupActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store/actions/groupActions */ "./store/actions/groupActions.js");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/loading */ "./components/loading.js");
/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/error */ "./components/error.js");
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/http */ "./utils/http.js");
/* harmony import */ var _store_actions_shareActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../store/actions/shareActions */ "./store/actions/shareActions.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;












var NewPost =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(NewPost, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NewPost, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var asyncGroups;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _utils_http__WEBPACK_IMPORTED_MODULE_17__["default"].get("gruplar.php").then(function (res) {
                  return res.data;
                }).then(function (res) {
                  if (res.durum) {
                    return res.gruplar;
                  } else {
                    return [];
                  }
                })["catch"](function (err) {
                  return [];
                });

              case 2:
                asyncGroups = _context.sent;
                return _context.abrupt("return", {
                  asyncGroups: asyncGroups
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function NewPost(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, NewPost);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(NewPost).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "RenderGroups", function () {
      var _this$props$groups = _this.props.groups,
          groups = _this$props$groups.groups,
          isLoading = _this$props$groups.isLoading,
          isRejected = _this$props$groups.isRejected,
          errorMsg = _this$props$groups.errorMsg;
      if (isLoading) return __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_15__["default"], null);else if (isRejected) return __jsx(_components_error__WEBPACK_IMPORTED_MODULE_16__["default"], {
        msg: errorMsg
      });else if (groups.length <= 0) return __jsx(_components_error__WEBPACK_IMPORTED_MODULE_16__["default"], {
        msg: "Payla\u015F\u0131m yapabilece\u011Finiz grup bulunamad\u0131.L\xFCtfen sonra tekrar deneyin"
      });else {
        return __jsx("ul", null, __jsx("li", null, __jsx("a", {
          className: _this.state.groupValue == 9 ? "active" : "",
          onClick: function onClick(e) {
            return _this.changeGroup(e, 9);
          }
        }, "neverfab")), groups.map(function (g, i) {
          return __jsx("li", {
            key: i
          }, __jsx("a", {
            className: _this.state.groupValue === g.group_id ? "active" : "",
            onClick: function onClick(e) {
              return _this.changeGroup(e, g.group_id);
            }
          }, g.name.toLowerCase()));
        }));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "changeGroup", function (e, id) {
      e.preventDefault();

      _this.setState({
        groupValue: id
      });

      console.log(_this.state.groupValue === id);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "shareHandler", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          active = _this$state.active,
          title = _this$state.title,
          text = _this$state.text,
          groupValue = _this$state.groupValue,
          picture = _this$state.picture;
      if (!_this.props.isAuthenticated) return false;

      if (active === "state") {
        _this.shareText();
      } else if (active === "picture") {
        _this.shareImage();
      } else if (active === "link") {}
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "shareText", function () {
      var _this$state2 = _this.state,
          title = _this$state2.title,
          text = _this$state2.text,
          groupValue = _this$state2.groupValue;
      if (!title || !text || groupValue === 0) return false;
      Object(_store_actions_shareActions__WEBPACK_IMPORTED_MODULE_18__["shareTextPost"])(title, text, groupValue).then(function (res) {
        if (res.durum) {
          _this.props.router.push("/nos/" + res.baslik);
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_19__["toast"].error(res.mesaj);
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "shareImage", function () {
      var _this$state3 = _this.state,
          title = _this$state3.title,
          image = _this$state3.image,
          groupValue = _this$state3.groupValue;
      if (!title || !image || !groupValue) return false;
      Object(_store_actions_shareActions__WEBPACK_IMPORTED_MODULE_18__["shareImagePost"])(title, image, groupValue).then(function (res) {
        if (res.durum) {
          _this.props.router.push("/nos/" + res.baslik);
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_19__["toast"].error(res.mesaj);
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onImageChange", function (e) {
      if (e.target.files && e.target.files[0]) {
        _this.setState({
          image: e.target.files[0]
        });

        var reader = new FileReader();

        reader.onload = function (event) {
          _this.setState({
            picture: event.target.result
          });
        };

        reader.readAsDataURL(e.target.files[0]);
      }
    });

    if (props.asyncGroups.length <= 0) {
      props.fetchGroups();
    } else {
      props.groupsSuccess(props.asyncGroups);
    }

    _this.state = {
      active: "state",
      title: "",
      text: "",
      groupValue: 0,
      image: "",
      picture: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NewPost, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, null, __jsx("title", null, "Yeni Post")), __jsx("div", {
        className: "content new-post-content"
      }, __jsx("div", null, __jsx("a", {
        onClick: function onClick() {
          return _this2.props.router.back();
        }
      }, __jsx("img", {
        src: "/go-back-icon.png",
        alt: "geri git"
      }))), __jsx("form", null, __jsx("input", {
        type: "text",
        placeholder: "ba\u015Fl\u0131k",
        className: "post-title",
        value: this.state.title,
        onChange: function onChange(e) {
          return _this2.setState({
            title: e.target.value
          });
        },
        required: true
      }), __jsx("div", {
        className: "new-post-form"
      }, __jsx("div", {
        className: "tab state-tab ".concat(this.state.active !== "state" ? "hidden" : "")
      }, __jsx("textarea", {
        className: "post-content",
        placeholder: "ne d\xFC\u015F\xFCn\xFCyorsun?",
        value: this.state.text,
        onChange: function onChange(e) {
          return _this2.setState({
            text: e.target.value
          });
        }
      })), __jsx("div", {
        className: "tab picture-tab ".concat(this.state.active !== "picture" ? "hidden" : "")
      }, this.state.image ? __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("img", {
        src: this.state.picture,
        alt: "post resim"
      }), __jsx("div", {
        className: "picture-tab-footer"
      }, __jsx("button", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.setState({
            image: "",
            picture: ""
          });
        }
      }, __jsx("img", {
        src: "/delete-icon.png",
        alt: "resmi sil"
      })))) : __jsx("label", {
        className: "custom-file-input"
      }, __jsx("span", null, "G\xF6zat"), "Payla\u015Fmak istedi\u011Fin resmi se\xE7", __jsx("input", {
        type: "file",
        value: this.state.image,
        onChange: this.onImageChange,
        className: "file-input"
      }))), __jsx("div", {
        className: "tab link-tab ".concat(this.state.active !== "link" ? "hidden" : "")
      }, "link"), __jsx("ul", {
        className: "button-container"
      }, __jsx("li", null, __jsx("button", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.setState({
            active: "state"
          });
        }
      }, "durum"), __jsx("img", {
        src: "/status-icon.png",
        alt: "post"
      })), __jsx("li", null, __jsx("button", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.setState({
            active: "picture"
          });
        }
      }, "g\xF6rsel"), __jsx("img", {
        src: "/post-picture.png",
        alt: "post"
      })), __jsx("li", null, __jsx("button", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.setState({
            active: "link"
          });
        }
      }, "link"), __jsx("img", {
        src: "/post-link.png",
        alt: "post"
      })), __jsx("li", null, __jsx("button", {
        className: "default-btn share-btn",
        onClick: this.shareHandler
      }, "payla\u015F"))))), __jsx("div", {
        className: "groups-input-container"
      }, __jsx("h4", null, "topluluk se\xE7"), __jsx(this.RenderGroups, null))), __jsx("aside", {
        className: "right-sidebar new-post-sidebar"
      }, __jsx("p", null, "unutma her yazd\u0131\u011F\u0131n yaz\u0131y\u0131 bundan y\u0131llar sonra \xE7ocuklar\u0131n hatta torunlar\u0131n okuyabilir bunun i\xE7in yazd\u0131klar\u0131n\u0131 senden y\u0131llar sonraki torunlar\u0131na \xF6\u011F\xFCt veriyormu\u015F\xE7as\u0131na yaz. Ne kendini utand\u0131r ne de torunlar\u0131n\u0131 yazd\u0131klar\u0131ndan dolay\u0131 utand\u0131r. Senin yazd\u0131klar\u0131ndan etkilenip hayat\u0131nda radikal kararlar alabilecek insanlar var onlara iyi \xF6rnek ol.")));
    }
  }]);

  return NewPost;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    groups: state.groups,
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, {
  fetchGroups: _store_actions_groupActions__WEBPACK_IMPORTED_MODULE_14__["fetchGroups"],
  groupsSuccess: _store_actions_groupActions__WEBPACK_IMPORTED_MODULE_14__["groupsSuccess"]
})(Object(next_router__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(Object(_utils_auth__WEBPACK_IMPORTED_MODULE_13__["withAuth"])(NewPost, true))));

/***/ })

})
//# sourceMappingURL=newPost.js.1ae335d42c893e001848.hot-update.js.map