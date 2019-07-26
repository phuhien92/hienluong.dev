webpackHotUpdate("static/development/pages/about.js",{

/***/ "./src/HoverEffectText/index.js":
/*!**************************************!*\
  !*** ./src/HoverEffectText/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ "./src/theme.js");

var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/src/HoverEffectText/index.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: inline-block;\n    position: relative;\n    transition: color 0.2s ease-in-out;\n    z-index: 1;\n    &::before {\n        content: '';\n        position: absolute;\n        height: 50%;\n        width: 0%;\n        background-color: ", ";\n        opacity: 0;\n        bottom: 0%;\n        left: -15px;\n        transition: width 0.3s ease-in-out;\n        z-index: -1;\n    }\n\n    &:hover, &.active {\n        color: ", ";\n        &::before {\n            opacity: 1;\n            width: calc(100% + 30px);\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span(_templateObject(), function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.textColor;
});

var HoverEffectText = function HoverEffectText(_ref) {
  var children = _ref.children,
      textColor = _ref.textColor,
      backgroundColor = _ref.backgroundColor,
      active = _ref.active;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
    textColor: textColor,
    backgroundColor: backgroundColor,
    className: active ? 'active' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, children);
};

HoverEffectText.defaultProps = {
  textColor: "#fff",
  backgroundColor: "".concat(_theme__WEBPACK_IMPORTED_MODULE_3__["colorOptions"].red.PRIMARY_COLOR_BOLD),
  active: false
};
/* harmony default export */ __webpack_exports__["default"] = (HoverEffectText);

/***/ })

})
//# sourceMappingURL=about.js.4dfe08af7e3e30e73e94.hot-update.js.map