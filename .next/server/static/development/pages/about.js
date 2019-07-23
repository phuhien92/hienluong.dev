module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AboutPage/index.js":
/*!***************************************!*\
  !*** ./components/AboutPage/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_HoverEffectText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/HoverEffectText */ "./src/HoverEffectText/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/theme */ "./src/theme.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/components/AboutPage/index.js";

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 10px;\n    border-radius: 10px;\n    background-color: #fff;\n    width: 100%;\n    min-width: 250px;\n    background-image: url('/static/images/mount_rainier.jpg');\n    background-position: bottom center;\n    background-size: contain;\n    background-repeat: no-repeat;\n    p {\n        font-size: ", "px;\n        color: ", ";\n        text-shadow: none;\n        margin: 0;\n        text-align: left;\n    }\n    .redtxt {\n        color: ", ";\n    }\n    .text-center {\n        text-align: center;\n    }\n    .smalltxt {\n        font-size: ", "px;\n    }\n    .text-shadow {\n        text-shadow: 2px 2px 0px #fff;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 0;\n    text-align: center;\n    font-weight: bold;\n    font-size: 17em;\n    line-height: 1em;\n    color: #fff;\n    position: absolute;\n    z-index:1;\n    margin: 0 0 0 150px;\n    li {\n        list-style: none;\n        text-shadow: 6px 10px 0px ", ";\n    }\n"]);

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






var StyledHead = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.h2(_templateObject());
var Year = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.ul(_templateObject2(), _src_theme__WEBPACK_IMPORTED_MODULE_4__["colorOptions"].red.PRIMARY_COLOR_BOLD);
var LicenscePlate = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject3(), _src_theme__WEBPACK_IMPORTED_MODULE_4__["base"].FONT_SIZE_MASSIVE, _src_theme__WEBPACK_IMPORTED_MODULE_4__["lightTheme"].SECONDARY_BACKGROUND_COLOR, _src_theme__WEBPACK_IMPORTED_MODULE_4__["colorOptions"].red.PRIMARY_COLOR_BOLD, _src_theme__WEBPACK_IMPORTED_MODULE_4__["base"].FONT_SIZE_MEDIUM);

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
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledHead, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "I am Hien Luong."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), "Full Stack Software Engineer in Greater Seattle Area, WA with strong preference for UI development. I work at Zones Inc in the role of Lead UI Engineer. Follow me on ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://medium.com/@phuhien",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "my blog")), " to hear my thoughs on technology, web development. View my resume on ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/hienphuluong",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Linkedin")), ". See my latest projects on ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/phuhien92?tab=repositories",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Github")), ".")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Year, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LicenscePlate, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "redtxt smalltxt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "WASHINGTON"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text-center text-shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "BUILT IN"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "redtxt smalltxt text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "EVER GREEN STATE"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "2"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "9"))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AboutPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AboutPage */ "./components/AboutPage/index.js");
var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/pages/about.js";



function About(_ref) {
  var setPageTitle = _ref.setPageTitle,
      setMenuColor = _ref.setMenuColor;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      setPageTitle('About Page');
      setMenuColor('inherit');
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AboutPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/HoverEffectText/index.js":
/*!**************************************!*\
  !*** ./src/HoverEffectText/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ "./src/theme.js");

var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/src/HoverEffectText/index.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: inline-block;\n    position: relative;\n    transition: color 0.2s ease-in-out;\n    z-index: 1;\n    &::before {\n        content: '';\n        position: absolute;\n        height: 50%;\n        width: 0%;\n        background-color: ", ";\n        opacity: 0;\n        bottom: 0%;\n        left: -15px;\n        transition: width 0.3s ease-in-out;\n        z-index: -1;\n    }\n\n    &:hover, &.active {\n        color: ", ";\n        text-shadow: 0px 1px 0px #000;\n        &::before {\n            opacity: 1;\n            width: calc(100% + 30px);\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span(_templateObject(), function (props) {
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
      lineNumber: 35
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

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/*! exports provided: base, lightTheme, colorOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightTheme", function() { return lightTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorOptions", function() { return colorOptions; });
var base = {
  FONT_SIZE_TINY: 10,
  FONT_SIZE_SMALL: 14,
  FONT_SIZE_MEDIUM: 16,
  FONT_SIZE_LARGE: 18,
  FONT_SIZE_EXTRA_LARGE: 24,
  FONT_SIZE_MASSIVE: 34,
  FONT_WEIGHT_LIGHT: "200",
  FONT_WEIGHT_MEDIUM: "500",
  FONT_WEIGHT_BOLD: "700",
  PRIMARY_FONT_FAMILY: 'Suisse, -apple-system, BlinkMacSystemFont,"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",   "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  SECONDARY_FONT_FAMILY: 'Tiempos Fine'
};
var lightTheme = {
  PRIMARY_BACKGROUND_COLOR: "#ffffff",
  PRIMARY_BACKGROUND_COLOR_LIGHT: "#f7f7f7",
  SECONDARY_BACKGROUND_COLOR: "#021117",
  SECONDARY_BACKGROUND_COLOR_LIGHT: "#0b3c50",
  PRIMARY_TEXT_COLOR: "#3d3d3d",
  PRIMARY_TEXT_COLOR_LIGHT: "#797979",
  SECONDARY_TEXT_COLOR: "#ffffff",
  PRIMARY_TEXT_BACKGROUND_COLOR: "#ffffff",
  SECONDARY_TEXT_BACKGROUND_COLOR: "#3d3d3d"
};
var colorOptions = {
  orange: {
    PRIMARY_COLOR_FAINT: "#FFF3E0",
    PRIMARY_COLOR_LIGHT: "#FFB74D",
    PRIMARY_COLOR: "#FF9800",
    PRIMARY_COLOR_BOLD: "#EF6C00",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  },
  red: {
    PRIMARY_COLOR_FAINT: "#FFEBEE",
    PRIMARY_COLOR_LIGHT: "#E57373",
    PRIMARY_COLOR: "#e81d0d",
    PRIMARY_COLOR_BOLD: "#C62828",
    PRIMARY_FOREGROUND_COLOR: "#fff"
  },
  blue: {
    PRIMARY_COLOR_FAINT: "#E3F2FD",
    PRIMARY_COLOR_LIGHT: "#64B5F6",
    PRIMARY_COLOR: "#2196F3",
    PRIMARY_COLOR_BOLD: "#1565C0",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  },
  cyan: {
    PRIMARY_COLOR_FAINT: "#E0F7FA",
    PRIMARY_COLOR_LIGHT: "#4DD0E1",
    PRIMARY_COLOR: "#00BCD4",
    PRIMARY_COLOR_BOLD: "#00838F",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  },
  teal: {
    PRIMARY_COLOR_FAINT: "#E0F2F1",
    PRIMARY_COLOR_LIGHT: "#4DB6AC",
    PRIMARY_COLOR: "#009688",
    PRIMARY_COLOR_BOLD: "#00695C",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  },
  gray: {
    PRIMARY_COLOR_FAINT: "#FAFAFA",
    PRIMARY_COLOR_LIGHT: "#E0E0E0",
    PRIMARY_COLOR: "#9E9E9E",
    PRIMARY_COLOR_BOLD: "#424242",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  },
  purlple: {
    PRIMARY_COLOR_FAINT: "#EDE7F6",
    PRIMARY_COLOR_LIGHT: "#9575CD",
    PRIMARY_COLOR: "#673AB7",
    PRIMARY_COLOR_BOLD: "#4527A0",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  },
  green: {
    PRIMARY_COLOR_FAINT: "#E8F5E9",
    PRIMARY_COLOR_LIGHT: "#81C784",
    PRIMARY_COLOR: "#4CAF50",
    PRIMARY_COLOR_BOLD: "#2E7D32",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  }
};

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hluong/Desktop/experiment_source/nextjs-portfolio/pages/about.js */"./pages/about.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map