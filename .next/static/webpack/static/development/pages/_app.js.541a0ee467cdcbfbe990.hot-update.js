webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Link/index.js":
/*!**********************************!*\
  !*** ./components/Link/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/components/Link/index.js";



var Link = function Link(_ref) {
  var href = _ref.href,
      query = _ref.query,
      children = _ref.children;

  var goTo = function goTo() {
    var router = {
      pathname: href
    };
    if (query) router['query'] = query;
    next_router__WEBPACK_IMPORTED_MODULE_1__["Router"].push(router);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    href: href,
    onClick: goTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ })

})
//# sourceMappingURL=_app.js.541a0ee467cdcbfbe990.hot-update.js.map