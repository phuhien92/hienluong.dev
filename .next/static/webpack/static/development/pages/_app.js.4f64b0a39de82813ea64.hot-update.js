webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/transition/index.js":
/*!****************************************!*\
  !*** ./components/transition/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _src_KeyFrames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/KeyFrames */ "./src/KeyFrames.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/theme */ "./src/theme.js");

var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/components/transition/index.js";

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color:#fff;\n    font-weight: bold;\n    opacity: 0.5;\n    @media screen and (max-width: ", "px) {\n        font-size: ", "px;\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color:#fff;\n    font-weight: bold;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: rgba(255, 255, 255, 0.1);\n    height: 1px;\n    width: 100%;\n    margin-top: 48px;\n    overflow: hidden;\n    position: relative;\n\n    &::before {\n        content: '';\n        width: 120px;\n        height: 1px;\n        display: block;\n        position: absolute;\n        background: white;\n        animation-duration: 2s;\n        animation-timing-function: ease;\n        animation-iteration-count: infinite;\n        animation-name: ", ";\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n    animation: ", " 0.5s ease-out;\n    animation-delay: 1500;\n    opacity: 0;\n    padding: 0 15px;\n    > * {\n        max-width: ", "px;\n        width: 100%;\n        padding: 15px;\n    }\n    &.active {\n        animation: ", " 1s ease-in;\n        opacity:1;\n    }\n    @media screen and (max-width: ", "px) {\n        width: 100%;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: absolute;\n    background: #fff;\n    width: 200%;\n    height: 100%;\n    top: 0px;\n    left: 0px;\n    transform: translateX(100%);\n    transition: transform cubic-bezier(0.19, 1, 0.22, 1) 3.2s;\n    transition-delay: 0.3s;\n\n    &.pg-delay-2 {\n        background: ", ";\n        transition-delay: 0.6s;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    background: #011118;\n    z-index: -1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    z-index: 9999;\n    overflow: hidden;\n    transform: scaleX(0);\n    transition: transform cubic-bezier(0.19, 1, 0.22, 1) 1s 1s;\n    transform-origin: center right; \n    &.active {\n        transform: scaleX(1);\n        transform-origin: center left;\n        transition-delay: 1s;\n        .pg-t-swipe {\n            transform: translateX(-100%);\n            transition: none;\n            transition-delay: 0s;\n        }\n    }\n    .relative {\n        position: relative;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var PageTransition = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var PageTPanel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var PageTSwipe = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3(), _src_theme__WEBPACK_IMPORTED_MODULE_4__["colorOptions"].red.PRIMARY_COLOR_BOLD);
var PageTContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4(), _src_KeyFrames__WEBPACK_IMPORTED_MODULE_3__["keyframe_fadeout"], _src_theme__WEBPACK_IMPORTED_MODULE_4__["breakPoints"].lg, _src_KeyFrames__WEBPACK_IMPORTED_MODULE_3__["keyframe_fadein"], _src_theme__WEBPACK_IMPORTED_MODULE_4__["breakPoints"].lg);
var TransitionProgress = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5(), _src_KeyFrames__WEBPACK_IMPORTED_MODULE_3__["page_transition_content_progress"]);
var StyledH2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2(_templateObject6());
var StyledH4 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h4(_templateObject7(), _src_theme__WEBPACK_IMPORTED_MODULE_4__["breakPoints"].md, _src_theme__WEBPACK_IMPORTED_MODULE_4__["base"].FONT_SIZE_MEDIUM);

var Transition = function Transition(props) {
  var classnames = props.triggerTransition ? 'active' : '';
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageTransition, {
    className: classnames,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageTPanel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageTSwipe, {
    className: "pg-t-swipe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageTSwipe, {
    className: "pg-t-swipe pg-delay-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageTContent, {
    className: classnames,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledH2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Hien Luong"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledH4, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Software Engineer at Greater Seattle Area"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TransitionProgress, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ })

})
//# sourceMappingURL=_app.js.4f64b0a39de82813ea64.hot-update.js.map