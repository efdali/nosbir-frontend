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
    className: "jsx-1832248041" + " " + "notification-panel ".concat(active ? "active" : "")
  }, __jsx("ul", {
    className: "jsx-1832248041"
  }, notifications.length <= 0 && __jsx("li", {
    className: "jsx-1832248041"
  }, __jsx("img", {
    src: "/notification-icon.png",
    alt: "bildirimler",
    className: "jsx-1832248041"
  }), notifications.length, " adet okunmam\u0131\u015F bildiriminiz var."), isLoading && __jsx(_loading__WEBPACK_IMPORTED_MODULE_4__["default"], null), notifications.length > 0 && notifications.map(function (n, i) {
    return __jsx("li", {
      key: i,
      className: "jsx-1832248041" + " " + ((n.is_viewed ? "not-viewed" : "") || "")
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/".concat(n.url)
    }, __jsx("a", {
      className: "jsx-1832248041"
    }, n.content)));
  }), notifications.length === 0 && !isLoading && __jsx("li", {
    className: "jsx-1832248041"
  }, "Bildiriminiz yok.")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/u/@".concat(nick, "/bildirimler")
  }, __jsx("a", {
    className: "jsx-1832248041"
  }, "B\xFCt\xFCn bildirimleri g\xF6r")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1832248041"
  }, ".notification-panel.jsx-1832248041{position:absolute;top:100%;width:300px;height:260px;background-color:#fff;z-index:999;display:none;overflow-y:auto;}.notification-panel.active.jsx-1832248041{display:block;}.notification-panel.jsx-1832248041 ul.jsx-1832248041{list-style:initial;list-style-position:inside;margin-bottom:10px;}.notification-panel.jsx-1832248041 ul.jsx-1832248041 li.jsx-1832248041{padding:5px;border-bottom:1px solid #ddd;font-family:Tekton-pro;font-weight:bold;height:35px;line-height:24px;overflow:hidden;}.notification-panel.jsx-1832248041 ul.jsx-1832248041 li.jsx-1832248041:first-child{list-style:none;font-weight:200;font-size:var(--small-font-size);}.notification-panel.jsx-1832248041 ul.jsx-1832248041 li.jsx-1832248041:first-child img.jsx-1832248041{width:25px;height:25px;background-color:#000;margin-right:10px;}.notification-panel.jsx-1832248041 ul.jsx-1832248041 li.not-viewed.jsx-1832248041,.notification-panel.jsx-1832248041 ul.jsx-1832248041 li.not-viewed.jsx-1832248041>a.jsx-1832248041{background-color:var(--main-gray-color);color:#fff;}.notification-panel.jsx-1832248041>a.jsx-1832248041{position:absolute;bottom:0;background-color:var(--main-red-color);color:#fff;width:100%;padding:8px 0;text-align:center;z-index:99;font-size:var(--small-font-size);-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxwcm9qZWN0c1xcbm9zYmlyLWZyb250ZW5kXFxjb21wb25lbnRzXFxub3RpZmljYXRpb25QYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q2tCLEFBRzZCLEFBVUosQUFHSyxBQUtQLEFBU0ksQUFLTixBQU84QixBQUl0QixXQVZQLENBZGtCLEVBUi9CLEVBaUJrQixFQTNCUCxBQTJDQSxDQTlCa0IsSUFvQk4sSUFoQ1QsQUEyQzJCLEtBaEJOLE9BMUJwQixDQXFDRixDQXBCWSxJQWVOLENBcEJFLEtBMEJyQixDQXJDd0IsV0FnQ3hCLENBZm1CLENBTG5CLEFBY0EsQ0FnQmEsUUF6Q0MsR0EwQ0QsSUF6QkMsS0FoQkMsRUEwQ0MsS0F6QkcsTUFoQkQsR0EwQ0UsUUF6QkYsS0FoQmxCLEtBMENhLE1BekJiLEtBMEJtQyxpQ0FDUCw0REFDNUIiLCJmaWxlIjoiRTpcXHByb2plY3RzXFxub3NiaXItZnJvbnRlbmRcXGNvbXBvbmVudHNcXG5vdGlmaWNhdGlvblBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgaHR0cCBmcm9tIFwiLi4vdXRpbHMvaHR0cFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9sb2FkaW5nXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGlmaWNhdGlvblBhbmVsKHsgYWN0aXZlLCBuaWNrIH0pIHtcclxuICBjb25zdCBbbm90aWZpY2F0aW9ucywgc2V0Tm90aWZpY2F0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgbm90Vmlld2VkPW5vdGlmaWNhdGlvbnMuZmlsdGVyKG49Pm4uaXNfdmlld2VkPT0wKS5sZW5ndGg7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChub3RpZmljYXRpb25zLmxlbmd0aCA9PT0gMCAmJiBhY3RpdmUpIHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgaHR0cFxyXG4gICAgICAgIC5nZXQoXCJiaWxkaXJpbWxlci5waHBcIilcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICBpZiAocmVzLmR1cnVtKSBzZXROb3RpZmljYXRpb25zKHJlcy5iaWxkaXJpbWxlcik7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH0sIFthY3RpdmVdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Bub3RpZmljYXRpb24tcGFuZWwgJHthY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIn1gfT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtub3RpZmljYXRpb25zLmxlbmd0aCA8PSAwICYmIChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbm90aWZpY2F0aW9uLWljb24ucG5nXCIgYWx0PVwiYmlsZGlyaW1sZXJcIiAvPlxyXG4gICAgICAgICAgICB7bm90aWZpY2F0aW9ucy5sZW5ndGh9IGFkZXQgb2t1bm1hbcSxxZ8gYmlsZGlyaW1pbml6IHZhci5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7aXNMb2FkaW5nICYmIDxMb2FkaW5nIC8+fVxyXG4gICAgICAgIHtub3RpZmljYXRpb25zLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIG5vdGlmaWNhdGlvbnMubWFwKChuLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e24uaXNfdmlld2VkID8gXCJub3Qtdmlld2VkXCIgOiBcIlwifSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtuLnVybH1gfT5cclxuICAgICAgICAgICAgICAgIDxhPntuLmNvbnRlbnR9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIHtub3RpZmljYXRpb25zLmxlbmd0aCA9PT0gMCAmJiAhaXNMb2FkaW5nICYmIDxsaT5CaWxkaXJpbWluaXogeW9rLjwvbGk+fVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8TGluayBocmVmPXtgL3UvQCR7bmlja30vYmlsZGlyaW1sZXJgfT5cclxuICAgICAgICA8YT5Cw7x0w7xuIGJpbGRpcmltbGVyaSBnw7ZyPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubm90aWZpY2F0aW9uLXBhbmVsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ub3RpZmljYXRpb24tcGFuZWwuYWN0aXZlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubm90aWZpY2F0aW9uLXBhbmVsIHVsIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IGluaXRpYWw7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubm90aWZpY2F0aW9uLXBhbmVsIHVsIGxpIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFRla3Rvbi1wcm87XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1wYW5lbCB1bCBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udC1zaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1wYW5lbCB1bCBsaTpmaXJzdC1jaGlsZCBpbWd7XHJcbiAgICAgICAgICB3aWR0aDoyNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OjI1cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1wYW5lbCB1bCBsaS5ub3Qtdmlld2VkLFxyXG4gICAgICAgIC5ub3RpZmljYXRpb24tcGFuZWwgdWwgbGkubm90LXZpZXdlZCA+IGEge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ncmF5LWNvbG9yKTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubm90aWZpY2F0aW9uLXBhbmVsID4gYSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXJlZC1jb2xvcik7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udC1zaXplKTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=E:\\projects\\nosbir-frontend\\components\\notificationPanel.js */"));
}

/***/ })

})
//# sourceMappingURL=_app.js.8dce13b0d08a8ba38042.hot-update.js.map