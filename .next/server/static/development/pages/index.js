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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/HomePage/Intro/image.js":
/*!********************************************!*\
  !*** ./components/HomePage/Intro/image.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/components/HomePage/Intro/image.js";

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: url(https://aaronmcguire.co/explore-bg.20c5fe2c.svg) no-repeat;\n    background-size: contain;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 6%;\n    right: -22%;\n    z-index: -1;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: url(https://aaronmcguire.co/tinker-bg.f5aec05c.svg) no-repeat;\n    background-size: contain;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 7%;\n    left: 1%;\n    z-index: -1;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: url(https://aaronmcguire.co/anim-bg.cbdf2315.svg) no-repeat;\n    background-size: contain;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: -5%;\n    z-index: -1;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    max-width: 350px;\n    height: auto;\n    border-radius: 50%;\n    z-index: 2;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 400px;\n    position: relative;\n    text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var AvatarImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img(_templateObject2());
var AnimateBg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());
var TinkerBg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4());
var ExploreBg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject5());

var Image = function Image() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AvatarImage, {
    src: "static/images/avatar.png",
    alt: "avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./components/HomePage/Intro/index.js":
/*!********************************************!*\
  !*** ./components/HomePage/Intro/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_KeyFrames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../src/KeyFrames */ "./src/KeyFrames.js");






var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/components/HomePage/Intro/index.js";

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    color: #e31e0d;\n    opacity: 0.7;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    margin-top: 16px;\n    opacity: 0.5;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    color: rgba(1, 17, 24, 0.25);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    list-style: none;\n    padding: 0;\n    margin-top: 60px;\n    li {\n        float: left;\n        margin-right: 40px;\n\n        a {\n            background-repeat: no-repeat;\n            background-size: contain;\n            display: block;\n            text-indent: -9999px;\n            width: 60px;\n            height: 60px;\n            border-radius: 5px;\n            transition: all 0.4s ease-in-out;\n            &:hover {\n                transform: scale(1.5);\n            }\n\n            &.linkedin {\n                background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAe7X///8AcLAAc7EAd7Ps9fm71easzeIAcrH3/P0jhLpxqc3I3uv09/oAebQAdbLa6fKMuNaawNpHk8F+sNHg6/PR4++ixt5qpctbnceHs9JQmMTC2egRfrcsibyKuNUAaKw4jr+dw9wu2IZbAAAE4UlEQVR4nO2d7ZaaMBRFSQgaUIMOalXUlnn/h6y6nLZTRY4BItd19vyGyV655PMmRhEhhBBCCCGEEEIIISQozpn89GdeXY6ecLmNqs1usZsUhzh2ry5O5xh9/JyrL5JxqfO3knTx5q/eVXLh8lcXqzviaqVuSZf61QXrCvvjjt+ZdfQWjY5x/wfoP9VYvUGkukNSK3iilK/oHgoqVUgPVFsfolcOsnsN+9kkqOb21YVsg6kaBZXaSf4Um2P0jOAwdVtEUH3KrUS9hgzTSGotugwSVGoitRLzD9BwLbU5xdqZM0INnUMFVSlzYOMq2HAn09BMYMNx/OrCepHvYMORTEOzgA2nMpuaJwyFdhdPROlepqHZwIZjmYMad4QNFzJ7C+dS1FBojx9ZbGqhxI7a8JH3VGZ3eAKdPW2EBik+AzZSZ8CRKyHDD7FBCs4QU8n7bFCXKHYN4wKwIix0xPaHxjidiW1HvzCPd2bSTLzh49219Che8Dw8rQ/URH4NXqjd5R5J7ie+ERf3InW21e8ieD/b5Gf+HhH6xW3GkNzBaB3fsr7erP7+cM3ce7vKI4QQQgjpFWdOOCc2I6me0+jQap1nVbHdlkWV5VrbNzrn4WKbTT6nq287X6v1eFFm1na+comER6chZGK9HdeuDCX7ZaQ7rUqXAdQlCQOP3vjpYlS7KHRlvshsd5Jx4/9Ttck0uiFB/Mz3AxtG36wk3GdfdLZ+ghne/zaeNTR6AjxxZV525BjQ0FZwnuCFfdbJjlcwQwdskPxPJ4eSQhnm2b2DVU1MO+ghAxlaLJ/8hiRr3T2GMbRLP8ETRVvFIIYaz5+7pe3RshCGGs1puc+xXa8RwDD2D9ELabtK7N8w92xk/tIu87N3Q3eAc+dq+dmmFns31M8NZO7T5lPs2/AXnqT7gDZx2nsdtra70CKvrmfDdNze7kziP0Ltuw67YuJdiVIMV95fohRD/zRsMYYj30oUY6h8V/zkGC49BzZyDH1PXskxVJ4JaIIMPcc1ggw9j14JMlz5jdwEGaqDFMM0SVbzVTJ7+sHSq6kJbDgbbzIX2zP5ofzx3AsWXh9iUMN9aePzlvYVF+vtMysAe699jICG06O9CTOj8QPznk1NOMPl/d2yPMPfMmzD2qVrE8GvudlRHpJhVT8gga+QUVufxjSQ4eZRI5Gj36LX9CKM4fjxF4SuqX4M1jBpmBaYAnuP1+UcQQwbF8rAw7peU8QQhs2LneDlDl5X44UwbL69xxlo+yYZqiFSjD3yotlAWxrkkG0O7aJ6XRsXwBDpxcA7SHxmiAEMoWJhe1Q+w7b+DbHmAbs5zmentH9D7Kw7VA5VDdIQG2pht6wUgzTEljmxxtTnSuP+DbHIwi5S9dli698Qa+GxCw59Joj9G2LzAaxD9FnY790QzTGAJvo+u/m9G4LzAXcQa7gGozRCZheDNARnrdj8aZCG6PU9gg3BtZVcriFYh3IN0dUji+y2iTbUNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSEMa0pCGNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSEMa0pCGwzDMRyptovZ3ZpBjLuhF1TZpLEfqe5uwa6LuQbOZNLMFC+Way+F7bXnzi+sVETosx/v9dBkhhBBCCCGEEEIIIYR0zm/4A4Y01dVmZQAAAABJRU5ErkJggg==\");\n            }\n            &.github {\n                background-image: url(\"https://image.flaticon.com/icons/svg/25/25231.svg\");\n            }\n            &.stackoverflow {\n                background-image: url(\"https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.svg?v=f13ebeedfa9e\");\n            }\n            &.medium {\n                background-image: url(\"data:image/png;base64,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\");\n            }\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\nfont-family: 'Tiempos Fine';\n    font-size: 96px;\n    line-height: 96px;\n    letter-spacing: -2px;\n    margin-bottom: 16px;\n    span {\n        color: #fff;\n        font-size: calc(16px + 3vw);\n    }\n    &::after {\n        content: \"\";\n        background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 115.28 113.74'%3E%3Cpath d='M2.2 70.43c-4.62-18.6-3.57-50.35 18.55-64.3 20.87-13.17 46.47-1.65 55.62 2.5 7.38 3.32 34.15 15.36 38.33 40.8 2.35 14.28-3.56 25.8-6.18 30.9-13.36 26.06-41.12 31.75-43.28 32.15-5.84 1.1-21.46 3.8-37.1-4.94C8.74 96.64 3.64 76.18 2.2 70.43z' fill='rgb(25, 118, 210)'/%3E%3C/svg%3E\");\n        width: 6vw;\n        height: 6vw;\n        will-change: transform;\n        z-index: 0;\n        position: absolute;\n        left: -1.4vw;\n        top: -1.6vw;\n        animation: ", " 20s linear infinite;\n        z-index: -1;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var StyledH1 = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.h1(_templateObject(), _src_KeyFrames__WEBPACK_IMPORTED_MODULE_9__["keyframe_roating_clockwise"]);
var StyledList = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.ul(_templateObject2());
var StyledH3 = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.h3(_templateObject3());
var HeaderDesp = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.p(_templateObject4());
var ColorSpan = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.span(_templateObject5());

var IntroSession =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(IntroSession, _React$Component);

  function IntroSession() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IntroSession);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(IntroSession).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IntroSession, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(StyledH1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Hien Luong."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(StyledH3, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ColorSpan, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Software Engineer"), " at Seattle"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeaderDesp, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "I strive to push the world forward by creating a bridge between people and technology."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(StyledList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        target: "_blank",
        href: "https://www.linkedin.com/in/hienphuluong",
        className: "linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "My LinkedIn Profile")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        target: "_blank",
        href: "https://github.com/phuhien92?tab=repositories",
        className: "github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "My Github Profile")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        target: "_blank",
        href: "http://stackoverflow.com/users/4561613/hien-luong",
        className: "stackoverflow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "My Stackoverflow Profile")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        target: "_blank",
        href: "https://medium.com/@phuhien",
        className: "medium",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "My Blog"))));
    }
  }]);

  return IntroSession;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (IntroSession);

/***/ }),

/***/ "./components/HomePage/index.js":
/*!**************************************!*\
  !*** ./components/HomePage/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Intro */ "./components/HomePage/Intro/index.js");
/* harmony import */ var _Intro_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Intro/image */ "./components/HomePage/Intro/image.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-scrollable-anchor */ "react-scrollable-anchor");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/components/HomePage/index.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    && {        \n        \n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var StyledGrid = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
})(_templateObject());

var HomePage = function HomePage() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledGrid, {
    container: true,
    spacing: 3,
    direction: "row",
    alignItems: "center",
    justify: "center",
    style: {
      minHeight: '80vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Intro__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Intro_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HomePage */ "./components/HomePage/index.js");
var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/pages/index.js";



function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomePage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/KeyFrames.js":
/*!**************************!*\
  !*** ./src/KeyFrames.js ***!
  \**************************/
/*! exports provided: keyframe_roating_clockwise, keyframe_roating_counterclockwise, keyframe_heart_beating, page_transition_content_progress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframe_roating_clockwise", function() { return keyframe_roating_clockwise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframe_roating_counterclockwise", function() { return keyframe_roating_counterclockwise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframe_heart_beating", function() { return keyframe_heart_beating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "page_transition_content_progress", function() { return page_transition_content_progress; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    0% {transform: translateX(-120px);}\n    100%  {transform: translateX(1320px);}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    0% {\n        transform: scale(2);\n    }\n    15% {\n        transform: scale(1);\n    }\n    30% {\n        transform: scale(2);\n    }\n    45% {\n        transform: scale(1);\n    }\n    100% {\n        transform: scale(1);\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    from{\n        transform:rotate(360deg)\n    }\n    to{\n        transform:rotate(0deg)\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    0%{\n        transform:rotate(0deg)\n    }\n    to{\n        transform:rotate(1turn)\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var keyframe_roating_clockwise = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var keyframe_roating_counterclockwise = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject2());
var keyframe_heart_beating = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject3());
var page_transition_content_progress = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject4());

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hluong/Desktop/experiment_source/nextjs-portfolio/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-scrollable-anchor":
/*!******************************************!*\
  !*** external "react-scrollable-anchor" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollable-anchor");

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
//# sourceMappingURL=index.js.map