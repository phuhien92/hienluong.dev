webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/AboutPage/index.js":
/*!***************************************!*\
  !*** ./components/AboutPage/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _src_HoverEffectText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/HoverEffectText */ "./src/HoverEffectText/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/theme */ "./src/theme.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/components/AboutPage/index.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 0;\n    text-align: center;\n    font-weight: bold;\n    font-size: 17em;\n    line-height: 1em;\n    color: #fff;\n    position: absolute;\n    z-index:1;\n    margin: 0 0 0 150px;\n    li {\n        list-style: none;\n        text-shadow: 2px 5px 0px ", ";\n        small {\n            font-size: 60px;\n            padding: 30px;\n            border-radius: 10px;\n            background: #fff;\n            color: transparent;\n            text-shadow: none;\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: rgba(255, 255, 255, 0.6);\n    \n    strong {\n        color: #fff;\n        font-size: 1.2em;\n    }\n\n    a {\n        margin-left: 15px;\n        margin-right: 15px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var StyledHead = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h2(_templateObject());
var Year = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].ul(_templateObject2(), _src_theme__WEBPACK_IMPORTED_MODULE_4__["colorOptions"].red.PRIMARY_COLOR);

var AboutPage = function AboutPage() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 0,
    direction: "row",
    justify: "center",
    alignItems: "flex-start",
    style: {
      paddingTop: '150px',
      backgroundColor: "".concat(_src_theme__WEBPACK_IMPORTED_MODULE_4__["lightTheme"].SECONDARY_BACKGROUND_COLOR)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledHead, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "I am Hien Luong."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), "Full Stack Software Engineer in Greater Seattle Area, WA with strong preference for UI development. I work at Zones Inc in the role of Lead UI Engineer. Follow me on ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://medium.com/@phuhien",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "my blog")), " to hear my thoughs on technology, web development. View my resume on ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/hienphuluong",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Linkedin")), ". See my latest projects on ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/phuhien92?tab=repositories",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Github")), ".")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Year, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Built In")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "2"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "9"))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

/***/ })

})
//# sourceMappingURL=about.js.c9deb71e3e67df13c545.hot-update.js.map