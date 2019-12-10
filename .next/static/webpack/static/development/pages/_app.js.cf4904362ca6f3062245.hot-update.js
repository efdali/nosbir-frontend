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
    className: "jsx-376158822" + " " + "notification-panel ".concat(active ? "active" : "")
  }, __jsx("ul", {
    className: "jsx-376158822"
  }, notifications.length <= 0 && __jsx("li", {
    className: "jsx-376158822"
  }, __jsx("img", {
    src: "/notification-icon.png",
    alt: "bildirimler",
    className: "jsx-376158822"
  }), notifications.length, " adet okunmam\u0131\u015F bildiriminiz var."), isLoading && __jsx(_loading__WEBPACK_IMPORTED_MODULE_4__["default"], null), notifications.length > 0 && notifications.map(function (n, i) {
    return __jsx("li", {
      key: i,
      className: "jsx-376158822" + " " + ((n.is_viewed ? "not-viewed" : "") || "")
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/".concat(n.url)
    }, __jsx("a", {
      className: "jsx-376158822"
    }, n.content)));
  }), notifications.length === 0 && !isLoading && __jsx("li", {
    className: "jsx-376158822"
  }, "Bildiriminiz yok.")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/u/@".concat(nick, "/bildirimler")
  }, __jsx("a", {
    className: "jsx-376158822"
  }, "B\xFCt\xFCn bildirimleri g\xF6r")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "376158822"
  }, ".notification-panel.jsx-376158822{position:absolute;top:100%;width:300px;height:260px;background-color:#fff;z-index:999;display:none;overflow-y:auto;}.notification-panel.active.jsx-376158822{display:block;}.notification-panel.jsx-376158822 ul.jsx-376158822{list-style:initial;list-style-position:inside;margin-bottom:10px;}.notification-panel.jsx-376158822 ul.jsx-376158822 li.jsx-376158822{padding:5px;border-bottom:1px solid #ddd;font-family:Tekton-pro;font-weight:bold;height:35px;line-height:24px;overflow:hidden;}.notification-panel.jsx-376158822 ul.jsx-376158822 li.jsx-376158822:first-child{list-style:none;font-weight:200;font-size:var(--small-font-size);}.notification-panel.jsx-376158822 ul.jsx-376158822 li.jsx-376158822:first-child img.jsx-376158822{width:25px;height:25px;background-color:#000;}.notification-panel.jsx-376158822 ul.jsx-376158822 li.not-viewed.jsx-376158822,.notification-panel.jsx-376158822 ul.jsx-376158822 li.not-viewed.jsx-376158822>a.jsx-376158822{background-color:var(--main-gray-color);color:#fff;}.notification-panel.jsx-376158822>a.jsx-376158822{position:absolute;bottom:0;background-color:var(--main-red-color);color:#fff;width:100%;padding:8px 0;text-align:center;z-index:99;font-size:var(--small-font-size);-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxwcm9qZWN0c1xcbm9zYmlyLWZyb250ZW5kXFxjb21wb25lbnRzXFxub3RpZmljYXRpb25QYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q2tCLEFBRzZCLEFBVUosQUFHSyxBQUtQLEFBU0ksQUFLTixBQU04QixBQUl0QixXQVRQLENBZGtCLEVBUi9CLEVBaUJrQixFQTNCUCxBQTBDQSxDQTdCa0IsSUFvQk4sSUFoQ1QsQUEwQzJCLEtBZk4sT0ExQnBCLENBb0NGLENBbkJZLElBZXpCLENBcEJxQixLQXlCckIsQ0FwQ3dCLFlBaUJMLENBTG5CLEFBY0EsQ0FlYSxRQXhDQyxHQXlDRCxJQXhCQyxLQWhCQyxFQXlDQyxLQXhCRyxNQWhCRCxHQXlDRSxRQXhCRixLQWhCbEIsS0F5Q2EsTUF4QmIsS0F5Qm1DLGlDQUNQLDREQUM1QiIsImZpbGUiOiJFOlxccHJvamVjdHNcXG5vc2Jpci1mcm9udGVuZFxcY29tcG9uZW50c1xcbm90aWZpY2F0aW9uUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBodHRwIGZyb20gXCIuLi91dGlscy9odHRwXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL2xvYWRpbmdcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90aWZpY2F0aW9uUGFuZWwoeyBhY3RpdmUsIG5pY2sgfSkge1xyXG4gIGNvbnN0IFtub3RpZmljYXRpb25zLCBzZXROb3RpZmljYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG5vdGlmaWNhdGlvbnMubGVuZ3RoID09PSAwICYmIGFjdGl2ZSkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICBodHRwXHJcbiAgICAgICAgLmdldChcImJpbGRpcmltbGVyLnBocFwiKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgIGlmIChyZXMuZHVydW0pIHNldE5vdGlmaWNhdGlvbnMocmVzLmJpbGRpcmltbGVyKTtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfSwgW2FjdGl2ZV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG5vdGlmaWNhdGlvbi1wYW5lbCAke2FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwifWB9PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge25vdGlmaWNhdGlvbnMubGVuZ3RoIDw9IDAgJiYgKFxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9ub3RpZmljYXRpb24taWNvbi5wbmdcIiBhbHQ9XCJiaWxkaXJpbWxlclwiIC8+XHJcbiAgICAgICAgICAgIHtub3RpZmljYXRpb25zLmxlbmd0aH0gYWRldCBva3VubWFtxLHFnyBiaWxkaXJpbWluaXogdmFyLlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtpc0xvYWRpbmcgJiYgPExvYWRpbmcgLz59XHJcbiAgICAgICAge25vdGlmaWNhdGlvbnMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgbm90aWZpY2F0aW9ucy5tYXAoKG4sIGkpID0+IChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17bi5pc192aWV3ZWQgPyBcIm5vdC12aWV3ZWRcIiA6IFwiXCJ9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke24udXJsfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+e24uY29udGVudH08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAge25vdGlmaWNhdGlvbnMubGVuZ3RoID09PSAwICYmICFpc0xvYWRpbmcgJiYgPGxpPkJpbGRpcmltaW5peiB5b2suPC9saT59XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvdS9AJHtuaWNrfS9iaWxkaXJpbWxlcmB9PlxyXG4gICAgICAgIDxhPkLDvHTDvG4gYmlsZGlyaW1sZXJpIGfDtnI8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5ub3RpZmljYXRpb24tcGFuZWwge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1wYW5lbC5hY3RpdmUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ub3RpZmljYXRpb24tcGFuZWwgdWwge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogaW5pdGlhbDtcclxuICAgICAgICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ub3RpZmljYXRpb24tcGFuZWwgdWwgbGkge1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogVGVrdG9uLXBybztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubm90aWZpY2F0aW9uLXBhbmVsIHVsIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250LXNpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubm90aWZpY2F0aW9uLXBhbmVsIHVsIGxpOmZpcnN0LWNoaWxkIGltZ3tcclxuICAgICAgICAgIHdpZHRoOjI1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6MjVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1wYW5lbCB1bCBsaS5ub3Qtdmlld2VkLFxyXG4gICAgICAgIC5ub3RpZmljYXRpb24tcGFuZWwgdWwgbGkubm90LXZpZXdlZCA+IGEge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ncmF5LWNvbG9yKTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubm90aWZpY2F0aW9uLXBhbmVsID4gYSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXJlZC1jb2xvcik7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udC1zaXplKTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=E:\\projects\\nosbir-frontend\\components\\notificationPanel.js */"));
}

/***/ })

})
//# sourceMappingURL=_app.js.cf4904362ca6f3062245.hot-update.js.map