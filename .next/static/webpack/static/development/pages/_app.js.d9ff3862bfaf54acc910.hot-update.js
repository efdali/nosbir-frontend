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

  var notViewed = notifications.length > 0 ? notifications.filter(function (n) {
    return n.is_viewed == 0;
  }).length : [];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (notifications.length === 0 && active) {
      setLoading(true);
      _utils_http__WEBPACK_IMPORTED_MODULE_3__["default"].get("bildirimler.php", {
        headers: {
          contentType: "application/json"
        }
      }).then(function (res) {
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
    className: "jsx-308774592" + " " + "notification-panel ".concat(active ? "active" : "")
  }, __jsx("ul", {
    className: "jsx-308774592"
  }, notViewed > 0 && __jsx("li", {
    className: "jsx-308774592" + " " + "not-viewed-number"
  }, __jsx("img", {
    src: "/notification-icon.png",
    alt: "bildirimler",
    className: "jsx-308774592"
  }), notViewed, " adet okunmam\u0131\u015F bildiriminiz var."), isLoading && __jsx(_loading__WEBPACK_IMPORTED_MODULE_4__["default"], null), notifications.length > 0 && notifications.map(function (n, i) {
    return __jsx("li", {
      key: i,
      className: "jsx-308774592" + " " + ((n.is_viewed ? "not-viewed" : "") || "")
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/".concat(n.url)
    }, __jsx("a", {
      className: "jsx-308774592"
    }, n.content)));
  }), notifications.length === 0 && !isLoading && __jsx("li", {
    className: "jsx-308774592"
  }, "Bildiriminiz yok.")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/u/@".concat(nick, "/bildirimler")
  }, __jsx("a", {
    className: "jsx-308774592"
  }, "B\xFCt\xFCn bildirimleri g\xF6r")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "308774592"
  }, ".notification-panel.jsx-308774592{position:absolute;top:100%;width:300px;height:260px;background-color:#fff;z-index:999;display:none;overflow-y:auto;}.notification-panel.active.jsx-308774592{display:block;}.notification-panel.jsx-308774592 ul.jsx-308774592{list-style:initial;list-style-position:inside;margin-bottom:10px;}.notification-panel.jsx-308774592 ul.jsx-308774592 li.jsx-308774592{padding:5px;border-bottom:1px solid #ddd;font-family:Tekton-pro;font-weight:bold;height:35px;line-height:24px;overflow:hidden;}.notification-panel.jsx-308774592 ul.jsx-308774592 li.not-viewed-number.jsx-308774592{list-style:none;font-weight:200;font-size:var(--small-font-size);}.notification-panel.jsx-308774592 ul.jsx-308774592 li.not-viewed-number.jsx-308774592 img.jsx-308774592{width:25px;height:25px;background-color:#000;margin-right:10px;}.notification-panel.jsx-308774592 ul.jsx-308774592 li.not-viewed.jsx-308774592,.notification-panel.jsx-308774592 ul.jsx-308774592 li.not-viewed.jsx-308774592>a.jsx-308774592{background-color:var(--main-gray-color);color:#fff;}.notification-panel.jsx-308774592>a.jsx-308774592{position:absolute;bottom:0;background-color:var(--main-red-color);color:#fff;width:100%;padding:8px 0;text-align:center;z-index:99;font-size:var(--small-font-size);-webkit-text-decoration:underline;text-decoration:underline;}@media (max-width:740px){.notification-panel.jsx-308774592{width:250px;height:220px;}}@media (max-width:490px){.notification-panel.jsx-308774592 a.jsx-308774592{background-color:#000;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxwcm9qZWN0c1xcbm9zYmlyLWZyb250ZW5kXFxjb21wb25lbnRzXFxub3RpZmljYXRpb25QYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRGtCLEFBRzZCLEFBVUosQUFHSyxBQUtQLEFBU0ksQUFLTCxBQU82QixBQUl0QixBQWFKLEFBTVUsV0E3QlosQ0FkaUIsQUFzQ2QsRUE5Q2pCLEVBaUJrQixFQTNCUCxBQTJDQSxDQTlCa0IsR0FpRDNCLENBN0JzQixFQXdCdEIsRUF4RFksQUEyQzJCLEtBaEJOLE9BMUJwQixDQXFDRixDQXBCWSxJQWVMLENBcEJDLEtBMEJyQixDQXJDd0IsV0FnQ3hCLENBZm1CLENBTG5CLEFBY0EsQ0FnQmEsUUF6Q0MsR0EwQ0QsSUF6QkMsS0FoQkMsRUEwQ0MsS0F6QkcsTUFoQkQsR0EwQ0UsUUF6QkYsS0FoQmxCLEtBMENhLE1BekJiLEtBMEJtQyxpQ0FDUCw0REFDNUIiLCJmaWxlIjoiRTpcXHByb2plY3RzXFxub3NiaXItZnJvbnRlbmRcXGNvbXBvbmVudHNcXG5vdGlmaWNhdGlvblBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgaHR0cCBmcm9tIFwiLi4vdXRpbHMvaHR0cFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9sb2FkaW5nXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGlmaWNhdGlvblBhbmVsKHsgYWN0aXZlLCBuaWNrIH0pIHtcclxuICBjb25zdCBbbm90aWZpY2F0aW9ucywgc2V0Tm90aWZpY2F0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgbm90Vmlld2VkID1cclxuICAgIG5vdGlmaWNhdGlvbnMubGVuZ3RoID4gMFxyXG4gICAgICA/IG5vdGlmaWNhdGlvbnMuZmlsdGVyKG4gPT4gbi5pc192aWV3ZWQgPT0gMCkubGVuZ3RoXHJcbiAgICAgIDogW107XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChub3RpZmljYXRpb25zLmxlbmd0aCA9PT0gMCAmJiBhY3RpdmUpIHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgaHR0cFxyXG4gICAgICAgIC5nZXQoXCJiaWxkaXJpbWxlci5waHBcIiwge1xyXG4gICAgICAgICAgaGVhZGVyczogeyBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgaWYgKHJlcy5kdXJ1bSkgc2V0Tm90aWZpY2F0aW9ucyhyZXMuYmlsZGlyaW1sZXIpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH1cclxuICB9LCBbYWN0aXZlXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbm90aWZpY2F0aW9uLXBhbmVsICR7YWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bm90Vmlld2VkID4gMCAmJiAoXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibm90LXZpZXdlZC1udW1iZXJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbm90aWZpY2F0aW9uLWljb24ucG5nXCIgYWx0PVwiYmlsZGlyaW1sZXJcIiAvPlxyXG4gICAgICAgICAgICB7bm90Vmlld2VkfSBhZGV0IG9rdW5tYW3EscWfIGJpbGRpcmltaW5peiB2YXIuXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2lzTG9hZGluZyAmJiA8TG9hZGluZyAvPn1cclxuICAgICAgICB7bm90aWZpY2F0aW9ucy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICBub3RpZmljYXRpb25zLm1hcCgobiwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtuLmlzX3ZpZXdlZCA/IFwibm90LXZpZXdlZFwiIDogXCJcIn0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7bi51cmx9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT57bi5jb250ZW50fTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICB7bm90aWZpY2F0aW9ucy5sZW5ndGggPT09IDAgJiYgIWlzTG9hZGluZyAmJiA8bGk+QmlsZGlyaW1pbml6IHlvay48L2xpPn1cclxuICAgICAgPC91bD5cclxuICAgICAgPExpbmsgaHJlZj17YC91L0Ake25pY2t9L2JpbGRpcmltbGVyYH0+XHJcbiAgICAgICAgPGE+QsO8dMO8biBiaWxkaXJpbWxlcmkgZ8O2cjwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1wYW5lbCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubm90aWZpY2F0aW9uLXBhbmVsLmFjdGl2ZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1wYW5lbCB1bCB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBpbml0aWFsO1xyXG4gICAgICAgICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1wYW5lbCB1bCBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBUZWt0b24tcHJvO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ub3RpZmljYXRpb24tcGFuZWwgdWwgbGkubm90LXZpZXdlZC1udW1iZXIge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQtc2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ub3RpZmljYXRpb24tcGFuZWwgdWwgbGkubm90LXZpZXdlZC1udW1iZXIgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1wYW5lbCB1bCBsaS5ub3Qtdmlld2VkLFxyXG4gICAgICAgIC5ub3RpZmljYXRpb24tcGFuZWwgdWwgbGkubm90LXZpZXdlZCA+IGEge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ncmF5LWNvbG9yKTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubm90aWZpY2F0aW9uLXBhbmVsID4gYSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXJlZC1jb2xvcik7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udC1zaXplKTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHtcclxuICAgICAgICAgIC5ub3RpZmljYXRpb24tcGFuZWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OTBweCkge1xyXG4gICAgICAgICAgLm5vdGlmaWNhdGlvbi1wYW5lbCBhIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=E:\\projects\\nosbir-frontend\\components\\notificationPanel.js */"));
}

/***/ })

})
//# sourceMappingURL=_app.js.d9ff3862bfaf54acc910.hot-update.js.map