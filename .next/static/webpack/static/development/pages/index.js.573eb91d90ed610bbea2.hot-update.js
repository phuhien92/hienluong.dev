webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/CustomEl.js":
/*!*************************!*\
  !*** ./src/CustomEl.js ***!
  \*************************/
/*! exports provided: SCLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCLink", function() { return SCLink; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _KeyFrames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeyFrames */ "./src/KeyFrames.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 2rem;\n    color: #000;\n    font-weight: 700;\n    position: relative;\n    text-decoration: none;\n    display: inline-block;\n    margin: 20px;\n    &::after, &.active {\n        content: \"\";\n        position:absolute;\n        width: 0%;\n        left: -10%;\n        bottom: 10%;\n        height: 15px;\n        background: transparent;\n        transition: all 0.2s linear;\n        z-index: -1;\n    }\n    &:hover {\n        &::after {\n            width: 120%;\n            background: linear-gradient(#4da6fe,#197bdb,#147ee7);\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var SCLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a(_templateObject());

/***/ })

})
//# sourceMappingURL=index.js.573eb91d90ed610bbea2.hot-update.js.map