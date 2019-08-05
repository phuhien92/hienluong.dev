webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/AboutPage/AboutHeader.js":
/*!*********************************************!*\
  !*** ./components/AboutPage/AboutHeader.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _src_HoverEffectText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/HoverEffectText */ "./src/HoverEffectText/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/theme */ "./src/theme.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/components/AboutPage/AboutHeader.js";

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    padding: 10px;\n    border-radius: 10px;\n    background-color: #fff;\n    width: 100%;\n    min-width: 250px;\n    background-image: url('/static/images/mount_rainier.jpg');\n    background-position: bottom center;\n    background-size: contain;\n    background-repeat: no-repeat;\n    border: 2px solid #aaa;\n    box-shadow: 2px 0px 0px #f5f5f5;\n    p {\n        font-size: ", "px;\n        color: ", ";\n        text-shadow: none;\n        margin: 0;\n        text-align: left;\n    }\n    .redtxt {\n        color: ", ";\n    }\n    .text-center {\n        text-align: center;\n    }\n    .smalltxt {\n        font-size: ", "px;\n    }\n    .text-shadow {\n        text-shadow: 2px 2px 0px #fff;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    padding: 0;\n    text-align: center;\n    font-weight: bold;\n    font-size: 17em;\n    line-height: 1em;\n    color: #fff;\n    position: absolute;\n    z-index:1;\n    margin: 0 0 0 150px;\n\n    @media screen (max-width: ", "px) {\n        display: none;   \n    }\n\n    li {\n        list-style: none;\n        text-shadow: 6px 10px 0px ", ";\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    color: rgba(255, 255, 255, 0.6);\n    \n    strong {\n        color: #fff;\n        font-size: 1.2em;\n    }\n\n    a {\n        margin-left: 15px;\n        margin-right: 15px;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    && {        \n        min-height: 100vh;\n        padding-top: 100px; \n        padding-bottom: 100px;\n        background-color: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var StyledGrid = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
})(_templateObject(), _src_theme__WEBPACK_IMPORTED_MODULE_5__["lightTheme"].SECONDARY_BACKGROUND_COLOR);
var StyledHead = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].h2(_templateObject2());
var Year = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].ul(_templateObject3(), _src_theme__WEBPACK_IMPORTED_MODULE_5__["breakPoints"].md, _src_theme__WEBPACK_IMPORTED_MODULE_5__["colorOptions"].red.PRIMARY_COLOR_BOLD);
var LicenscePlate = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject4(), _src_theme__WEBPACK_IMPORTED_MODULE_5__["base"].FONT_SIZE_MASSIVE, _src_theme__WEBPACK_IMPORTED_MODULE_5__["lightTheme"].SECONDARY_BACKGROUND_COLOR, _src_theme__WEBPACK_IMPORTED_MODULE_5__["colorOptions"].red.PRIMARY_COLOR_BOLD, _src_theme__WEBPACK_IMPORTED_MODULE_5__["base"].FONT_SIZE_MEDIUM);

var AboutHeader = function AboutHeader() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledGrid, {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 10,
    sm: 11,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledHead, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "I am Hien Luong."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), "Full Stack Software Engineer in Greater Seattle Area, WA with strong preference for UI development. I work at Zones Inc in the role of Lead UI Engineer. Follow me on ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://medium.com/@phuhien",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "my blog")), " to hear my thoughs on technology, web development. View my resume on ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/hienphuluong",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Linkedin")), ". See my latest projects on ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://github.com/phuhien92?tab=repositories",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Github")), ".")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 10,
    sm: 11,
    md: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Year, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LicenscePlate, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "redtxt smalltxt text-shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "WASHINGTON"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "text-center text-shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "BUILT IN"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "redtxt smalltxt text-center text-shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "EVER GREEN STATE"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "2"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "0"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "1"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "9"))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutHeader);

/***/ })

})
//# sourceMappingURL=about.js.95a31353785b03495e07.hot-update.js.map