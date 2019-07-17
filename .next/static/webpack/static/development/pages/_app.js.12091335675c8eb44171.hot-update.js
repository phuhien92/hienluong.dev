webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/layout/footer.js":
/*!*************************************!*\
  !*** ./components/layout/footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _src_KeyFrames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/KeyFrames */ "./src/KeyFrames.js");
/* harmony import */ var _src_Button_LightButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/Button/LightButton */ "./src/Button/LightButton.js");

var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/components/layout/footer.js";

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: relative;\n    \n    #clipboard-caption {\n        position: absolute;\n        color: #fff;\n        opacity: 0.5;\n        text-align: left;\n        font-weight: 500;\n        font-size: 12px;\n        bottom: -24px;\n        opacity: 0;\n        transform: translateY(-8px);\n        visibility: hidden;\n        transition: cubic-bezier(0.19, 1, 0.22, 1) 1s;\n\n        &.active {\n            transition: translateY(0);\n        }\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    line-height: 30px;\n    margin-top: 150px;\n    i {\n        margin: 0 12px;\n        top: 5px;\n        position: relative;\n        font-size: 1.5em;\n        cursor: pointer;\n        transition: all 0.2s ease-in-out;\n        &.icon-heart {\n            color: red;\n        }\n        &.icon-code {\n            color: yellow;\n        }\n        &:hover {\n            \n            &.icon-code {\n                transform: scale(2);\n            }\n            &.icon-heart {\n                animation: ", " 2s linear infinite;\n            }\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-bottom: 48px;\n    strong {\n        color: #fff;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: #011118;\n    color: white;\n    padding: 120px 0px;\n    position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].footer(_templateObject());
var StyledFooterTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2(_templateObject2());
var Credit = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject3(), _src_KeyFrames__WEBPACK_IMPORTED_MODULE_4__["keyframe_heart_beating"]);
var ClipboardCaptionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());

var Footer = function Footer() {
  var showClipboard = false;

  var copyText = function copyText() {
    return document.execCommand("copy", showNotice(), "luongphuhien@gmail.com");
  };

  var showNotice = function showNotice() {
    showClipboard = true;
    setTimeout(function () {
      showClipboard = false;
    }, 1000);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledFooter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 0,
    direction: "row",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    md: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledFooterTitle, {
    className: "gray-c",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Say Hi!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), "I'd love to grab tea to talk about anything. Shoot me an email and we can work something out."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ClipboardCaptionWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_Button_LightButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: "Get in touch",
    size: "large",
    bold: true,
    onClick: copyText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "clipboard-caption",
    className: showClipboard ? "active" : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "My email has been copied to your clipboard! \uD83C\uDF89")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Credit, {
    className: "gray-c",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Made with ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons icon-code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "code"), "and Lots of", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons icon-heart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "favorite"), "in Kent, WA")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    md: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=_app.js.12091335675c8eb44171.hot-update.js.map