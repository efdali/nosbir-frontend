webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/notificationPanel.js":
/*!*****************************************!*\
  !*** ./components/notificationPanel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotificationPanel; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/http */ "./utils/http.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading */ "./components/loading.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function NotificationPanel(_ref) {
  var active = _ref.active,
      nick = _ref.nick;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      notifications = _useState[0],
      setNotifications = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var notViewed = notifications.filter(function (n) {
    return n.is_viewed == 0;
  }).length;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (notifications.length === 0 && active) {
      setLoading(true);
      _utils_http__WEBPACK_IMPORTED_MODULE_3__["default"].get("bildirimler.php").then(function (res) {
        return res.data;
      }).then(function (res) {
        console.log(res);
        if (res.durum) setNotifications(res.bildirimler);
        setLoading(false);
      })["catch"](function (err) {
        return setLoading(false);
      });
    }
  }, [active]);
  return __jsx("div", {
    className: "jsx-1843945030" + " " + "notification-panel ".concat(active ? "active" : "")
  }, __jsx("ul", {
    className: "jsx-1843945030"
  }, notViewed > 0 && __jsx("li", {
    className: "jsx-1843945030" + " " + "not-viewed-number"
  }, __jsx("img", {
    src: "/notification-icon.png",
    alt: "bildirimler",
    className: "jsx-1843945030"
  }), notViewed, " adet okunmam\u0131\u015F bildiriminiz var."), isLoading && __jsx(_loading__WEBPACK_IMPORTED_MODULE_4__["default"], null), notifications.length > 0 && notifications.map(function (n, i) {
    return __jsx("li", {
      key: i,
      className: "jsx-1843945030" + " " + ((n.is_viewed ? "not-viewed" : "") || "")
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/".concat(n.url)
    }, __jsx("a", {
      className: "jsx-1843945030"
    }, n.content)));
  }), notifications.length === 0 && !isLoading && __jsx("li", {
    className: "jsx-1843945030"
  }, "Bildiriminiz yok.")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/u/@".concat(nick, "/bildirimler")
  }, __jsx("a", {
    className: "jsx-1843945030"
  }, "B\xFCt\xFCn bildirimleri g\xF6r")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1843945030"
  }, ".notification-panel.jsx-1843945030{position:absolute;top:100%;width:300px;height:260px;background-color:#fff;z-index:999;display:none;overflow-y:auto;}.notification-panel.active.jsx-1843945030{display:block;}.notification-panel.jsx-1843945030 ul.jsx-1843945030{list-style:initial;list-style-position:inside;margin-bottom:10px;}.notification-panel.jsx-1843945030 ul.jsx-1843945030 li.jsx-1843945030{padding:5px;border-bottom:1px solid #ddd;font-family:Tekton-pro;font-weight:bold;height:35px;line-height:24px;overflow:hidden;}.notification-panel.jsx-1843945030 ul.jsx-1843945030 li.not-viewed-number.jsx-1843945030{list-style:none;font-weight:200;font-size:var(--small-font-size);}.notification-panel.jsx-1843945030 ul.jsx-1843945030 li.not-viewed-number.jsx-1843945030 img.jsx-1843945030{width:25px;height:25px;background-color:#000;margin-right:10px;}.notification-panel.jsx-1843945030 ul.jsx-1843945030 li.not-viewed.jsx-1843945030,.notification-panel.jsx-1843945030 ul.jsx-1843945030 li.not-viewed.jsx-1843945030>a.jsx-1843945030{background-color:var(--main-gray-color);color:#fff;}.notification-panel.jsx-1843945030>a.jsx-1843945030{position:absolute;bottom:0;background-color:var(--main-red-color);color:#fff;width:100%;padding:8px 0;text-align:center;z-index:99;font-size:var(--small-font-size);-webkit-text-decoration:underline;text-decoration:underline;}@media(max-width:740px){.notification-panel.jsx-1843945030{right:-120px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxwcm9qZWN0c1xcbm9zYmlyLWZyb250ZW5kXFxjb21wb25lbnRzXFxub3RpZmljYXRpb25QYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q2tCLEFBRzZCLEFBVUosQUFHSyxBQUtQLEFBU0ksQUFLTixBQU84QixBQUl0QixBQWFKLFdBdkJILENBZGtCLENBc0M3QixDQTlDRixFQWlCa0IsRUEzQlAsQUEyQ0EsQ0E5QmtCLElBb0JOLElBaENULEFBMkMyQixLQWhCTixPQTFCcEIsQ0FxQ0YsQ0FwQlksSUFlTixDQXBCRSxLQTBCckIsQ0FyQ3dCLFdBZ0N4QixDQWZtQixDQUxuQixBQWNBLENBZ0JhLFFBekNDLEdBMENELElBekJDLEtBaEJDLEVBMENDLEtBekJHLE1BaEJELEdBMENFLFFBekJGLEtBaEJsQixLQTBDYSxNQXpCYixLQTBCbUMsaUNBQ1AsNERBQzVCIiwiZmlsZSI6IkU6XFxwcm9qZWN0c1xcbm9zYmlyLWZyb250ZW5kXFxjb21wb25lbnRzXFxub3RpZmljYXRpb25QYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGh0dHAgZnJvbSBcIi4uL3V0aWxzL2h0dHBcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vbG9hZGluZ1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RpZmljYXRpb25QYW5lbCh7IGFjdGl2ZSwgbmljayB9KSB7XHJcbiAgY29uc3QgW25vdGlmaWNhdGlvbnMsIHNldE5vdGlmaWNhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG5vdFZpZXdlZD1ub3RpZmljYXRpb25zLmZpbHRlcihuPT5uLmlzX3ZpZXdlZD09MCkubGVuZ3RoO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobm90aWZpY2F0aW9ucy5sZW5ndGggPT09IDAgJiYgYWN0aXZlKSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIGh0dHBcclxuICAgICAgICAuZ2V0KFwiYmlsZGlyaW1sZXIucGhwXCIpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgaWYgKHJlcy5kdXJ1bSkgc2V0Tm90aWZpY2F0aW9ucyhyZXMuYmlsZGlyaW1sZXIpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH1cclxuICB9LCBbYWN0aXZlXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbm90aWZpY2F0aW9uLXBhbmVsICR7YWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bm90Vmlld2VkID4gMCAmJiAoXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibm90LXZpZXdlZC1udW1iZXJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbm90aWZpY2F0aW9uLWljb24ucG5nXCIgYWx0PVwiYmlsZGlyaW1sZXJcIiAvPlxyXG4gICAgICAgICAgICB7bm90Vmlld2VkfSBhZGV0IG9rdW5tYW3EscWfIGJpbGRpcmltaW5peiB2YXIuXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2lzTG9hZGluZyAmJiA8TG9hZGluZyAvPn1cclxuICAgICAgICB7bm90aWZpY2F0aW9ucy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICBub3RpZmljYXRpb25zLm1hcCgobiwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtuLmlzX3ZpZXdlZCA/IFwibm90LXZpZXdlZFwiIDogXCJcIn0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7bi51cmx9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT57bi5jb250ZW50fTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICB7bm90aWZpY2F0aW9ucy5sZW5ndGggPT09IDAgJiYgIWlzTG9hZGluZyAmJiA8bGk+QmlsZGlyaW1pbml6IHlvay48L2xpPn1cclxuICAgICAgPC91bD5cclxuICAgICAgPExpbmsgaHJlZj17YC91L0Ake25pY2t9L2JpbGRpcmltbGVyYH0+XHJcbiAgICAgICAgPGE+QsO8dMO8biBiaWxkaXJpbWxlcmkgZ8O2cjwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1wYW5lbCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubm90aWZpY2F0aW9uLXBhbmVsLmFjdGl2ZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1wYW5lbCB1bCB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBpbml0aWFsO1xyXG4gICAgICAgICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1wYW5lbCB1bCBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBUZWt0b24tcHJvO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ub3RpZmljYXRpb24tcGFuZWwgdWwgbGkubm90LXZpZXdlZC1udW1iZXIge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQtc2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ub3RpZmljYXRpb24tcGFuZWwgdWwgbGkubm90LXZpZXdlZC1udW1iZXIgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6MjVweDtcclxuICAgICAgICAgIGhlaWdodDoyNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDAwO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ub3RpZmljYXRpb24tcGFuZWwgdWwgbGkubm90LXZpZXdlZCxcclxuICAgICAgICAubm90aWZpY2F0aW9uLXBhbmVsIHVsIGxpLm5vdC12aWV3ZWQgPiBhIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZ3JheS1jb2xvcik7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1wYW5lbCA+IGEge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1yZWQtY29sb3IpO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQtc2l6ZSk7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDo3NDBweCl7XHJcbiAgICAgICAgICAubm90aWZpY2F0aW9uLXBhbmVse1xyXG4gICAgICAgICAgICByaWdodDotMTIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=E:\\projects\\nosbir-frontend\\components\\notificationPanel.js */"));
}

/***/ })

})
//# sourceMappingURL=_app.js.8bf598d35b17f6d56fa1.hot-update.js.map