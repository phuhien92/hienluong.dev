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

/***/ "./components/ClipboardCaption/index.js":
/*!**********************************************!*\
  !*** ./components/ClipboardCaption/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClipboardCaption; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/components/ClipboardCaption/index.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    position: absolute;\n    opacity: 0.5;\n    text-align: left;\n    font-weight: 500;\n    font-size: ", ";\n    width: ", ";\n    opacity: 0;\n    transform: translate(-50%, -50%);\n    left: 50%;\n    bottom: 50%;\n    transition: cubic-bezier(0.19, 1, 0.22, 1) 1s;\n    visibility: hidden;\n    min-width: 300px;\n    &.active {\n        bottom: ", ";\n        opacity: 1;\n        visibility: visible;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject());
var ClipboardMessage = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject2(), function (props) {
  return "".concat(props.fontSize, "px");
}, function (props) {
  return "".concat(props.width, "px");
}, function (props) {
  return "-".concat(props.fontSize * 3, "px");
});

var ClipboardCaption =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ClipboardCaption, _React$Component);

  function ClipboardCaption() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClipboardCaption);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ClipboardCaption)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      showClipboard: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "copyText", function () {
      _this.refs.input.select();

      document.execCommand("copy", _this.showNotice());
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showNotice", function () {
      _this.setState({
        showClipboard: true
      }, function () {
        setTimeout(function () {
          _this.setState({
            showClipboard: false
          });
        }, _this.props.timeout);
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ClipboardCaption, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          message = _this$props.message,
          copytext = _this$props.copytext,
          buttontext = _this$props.buttontext,
          width = _this$props.width,
          fontSize = _this$props.fontSize;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: this.copyText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, buttontext), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ClipboardMessage, {
        className: this.state.showClipboard ? "active" : "",
        fontSize: fontSize,
        width: width,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, message), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        ref: "input",
        type: "text",
        defaultValue: copytext,
        style: {
          position: 'fixed',
          top: '-1000px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }));
    }
  }]);

  return ClipboardCaption;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);


ClipboardCaption.defaultValue = {
  message: "hello there, please enter your message 🎉",
  copytext: "",
  buttontext: "clipboard button",
  width: "14",
  fontSize: 14
};

/***/ }),

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
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/theme */ "./src/theme.js");

var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/components/HomePage/Intro/image.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    background: ", ";\n    border: 15px solid ", ";\n    border-radius: 50%;\n    width: 100%;\n\n    @media (max-width: ", "px) {\n        width: 80%;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    max-height: 400px;\n    max-width: 400px;\n    position: relative;\n    text-align: center;\n    margin: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var AvatarImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img(_templateObject2(), _src_theme__WEBPACK_IMPORTED_MODULE_3__["colorOptions"].orange.PRIMARY_COLOR_LIGHT, _src_theme__WEBPACK_IMPORTED_MODULE_3__["colorOptions"].orange.PRIMARY_COLOR, _src_theme__WEBPACK_IMPORTED_MODULE_3__["breakPoints"].md);

var Image = function Image() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AvatarImage, {
    src: "static/images/avatar.png",
    alt: "avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/theme */ "./src/theme.js");
/* harmony import */ var _components_ClipboardCaption__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ClipboardCaption */ "./components/ClipboardCaption/index.js");
/* harmony import */ var _src_HoverEffectText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../src/HoverEffectText */ "./src/HoverEffectText/index.js");






var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/components/HomePage/Intro/index.js";

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    cursor: pointer;\n    margin-left: 15px;\n    font-weight: 700;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    font-weight: 500;\n    @media screen and (max-width: ", "px) {\n        text-align: center;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    color: ", ";\n    @media screen and (max-width: ", "px) {\n        text-align: center;\n        font-size: 25px;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    list-style: none;\n    padding: 0;\n    margin-top: 60px;\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n    max-width: 500px;\n\n    @media screen and (max-width: ", "px) {\n        margin-top: 30px;\n        max-width: 100%;\n        justify-content: space-around;\n    }\n    li {\n        a {\n            background-repeat: no-repeat;\n            background-size: contain;\n            display: block;\n            text-indent: -9999px;\n            width: 60px;\n            height: 60px;\n            border-radius: 5px;\n            transition: all 0.4s ease-in-out;\n            \n            &.linkedin {\n                background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAe7X///8AcLAAc7EAd7Ps9fm71easzeIAcrH3/P0jhLpxqc3I3uv09/oAebQAdbLa6fKMuNaawNpHk8F+sNHg6/PR4++ixt5qpctbnceHs9JQmMTC2egRfrcsibyKuNUAaKw4jr+dw9wu2IZbAAAE4UlEQVR4nO2d7ZaaMBRFSQgaUIMOalXUlnn/h6y6nLZTRY4BItd19vyGyV655PMmRhEhhBBCCCGEEEIIISQozpn89GdeXY6ecLmNqs1usZsUhzh2ry5O5xh9/JyrL5JxqfO3knTx5q/eVXLh8lcXqzviaqVuSZf61QXrCvvjjt+ZdfQWjY5x/wfoP9VYvUGkukNSK3iilK/oHgoqVUgPVFsfolcOsnsN+9kkqOb21YVsg6kaBZXaSf4Um2P0jOAwdVtEUH3KrUS9hgzTSGotugwSVGoitRLzD9BwLbU5xdqZM0INnUMFVSlzYOMq2HAn09BMYMNx/OrCepHvYMORTEOzgA2nMpuaJwyFdhdPROlepqHZwIZjmYMad4QNFzJ7C+dS1FBojx9ZbGqhxI7a8JH3VGZ3eAKdPW2EBik+AzZSZ8CRKyHDD7FBCs4QU8n7bFCXKHYN4wKwIix0xPaHxjidiW1HvzCPd2bSTLzh49219Che8Dw8rQ/URH4NXqjd5R5J7ie+ERf3InW21e8ieD/b5Gf+HhH6xW3GkNzBaB3fsr7erP7+cM3ce7vKI4QQQgjpFWdOOCc2I6me0+jQap1nVbHdlkWV5VrbNzrn4WKbTT6nq287X6v1eFFm1na+comER6chZGK9HdeuDCX7ZaQ7rUqXAdQlCQOP3vjpYlS7KHRlvshsd5Jx4/9Ttck0uiFB/Mz3AxtG36wk3GdfdLZ+ghne/zaeNTR6AjxxZV525BjQ0FZwnuCFfdbJjlcwQwdskPxPJ4eSQhnm2b2DVU1MO+ghAxlaLJ/8hiRr3T2GMbRLP8ETRVvFIIYaz5+7pe3RshCGGs1puc+xXa8RwDD2D9ELabtK7N8w92xk/tIu87N3Q3eAc+dq+dmmFns31M8NZO7T5lPs2/AXnqT7gDZx2nsdtra70CKvrmfDdNze7kziP0Ltuw67YuJdiVIMV95fohRD/zRsMYYj30oUY6h8V/zkGC49BzZyDH1PXskxVJ4JaIIMPcc1ggw9j14JMlz5jdwEGaqDFMM0SVbzVTJ7+sHSq6kJbDgbbzIX2zP5ofzx3AsWXh9iUMN9aePzlvYVF+vtMysAe699jICG06O9CTOj8QPznk1NOMPl/d2yPMPfMmzD2qVrE8GvudlRHpJhVT8gga+QUVufxjSQ4eZRI5Gj36LX9CKM4fjxF4SuqX4M1jBpmBaYAnuP1+UcQQwbF8rAw7peU8QQhs2LneDlDl5X44UwbL69xxlo+yYZqiFSjD3yotlAWxrkkG0O7aJ6XRsXwBDpxcA7SHxmiAEMoWJhe1Q+w7b+DbHmAbs5zmentH9D7Kw7VA5VDdIQG2pht6wUgzTEljmxxtTnSuP+DbHIwi5S9dli698Qa+GxCw59Joj9G2LzAaxD9FnY790QzTGAJvo+u/m9G4LzAXcQa7gGozRCZheDNARnrdj8aZCG6PU9gg3BtZVcriFYh3IN0dUji+y2iTbUNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSEMa0pCGNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSEMa0pCGwzDMRyptovZ3ZpBjLuhF1TZpLEfqe5uwa6LuQbOZNLMFC+Way+F7bXnzi+sVETosx/v9dBkhhBBCCCGEEEIIIYR0zm/4A4Y01dVmZQAAAABJRU5ErkJggg==\");\n            }\n            &.github {\n                background-image: url(\"https://image.flaticon.com/icons/svg/25/25231.svg\");\n            }\n            &.stackoverflow {\n                background-image: url(\"https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.svg?v=f13ebeedfa9e\");\n            }\n            &.medium {\n                background-image: url(\"data:image/png;base64,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\");\n            }\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    font-size: 96px;\n    line-height: 96px;\n    letter-spacing: -2px;\n    margin-bottom: 16px;\n    font-weight: 500;\n    span {\n        color: #fff;\n        font-size: calc(16px + 3vw);\n    }\n\n    @media screen and (max-width: ", "px) {\n        font-size: 75px;\n        line-height: 75px;\n    }\n\n    @media screen and (max-width: ", "px) {\n        margin-top: 100px;\n        text-align: center;\n        font-size: 45px;\n        line-height: 45px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var StyledH1 = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.h1(_templateObject(), _src_theme__WEBPACK_IMPORTED_MODULE_8__["breakPoints"].lg, _src_theme__WEBPACK_IMPORTED_MODULE_8__["breakPoints"].md);
var StyledList = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.ul(_templateObject2(), _src_theme__WEBPACK_IMPORTED_MODULE_8__["breakPoints"].md);
var StyledH3 = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.h3(_templateObject3(), _src_theme__WEBPACK_IMPORTED_MODULE_8__["colorOptions"].red.PRIMARY_COLOR, _src_theme__WEBPACK_IMPORTED_MODULE_8__["breakPoints"].md);
var HeaderDesp = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.h4(_templateObject4(), _src_theme__WEBPACK_IMPORTED_MODULE_8__["breakPoints"].md);
var EmailMe = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.a(_templateObject5());

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
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(StyledH1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Hien Luong"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(StyledH3, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Software Engineer in\xA0", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Greater Seattle Area")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeaderDesp, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "I strive to push the world forward by creating a bridge between people and technology. Want to work together?"), "\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(EmailMe, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_10__["default"], {
        active: true,
        textColor: _src_theme__WEBPACK_IMPORTED_MODULE_8__["colorOptions"].gray.PRIMARY_COLOR_BOLD,
        backgroundColor: _src_theme__WEBPACK_IMPORTED_MODULE_8__["colorOptions"].orange.PRIMARY_COLOR_LIGHT,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_ClipboardCaption__WEBPACK_IMPORTED_MODULE_9__["default"], {
        copytext: "luongphuhien@gmail.com",
        buttontext: "Just email me",
        message: "My email has been copied to your clipboard! \uD83C\uDF89",
        timeout: 3000,
        width: 400,
        fontSize: 18,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }))), "."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(StyledList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        target: "_blank",
        href: "https://www.linkedin.com/in/hienphuluong",
        className: "linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "My LinkedIn Profile")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        target: "_blank",
        href: "https://github.com/phuhien92?tab=repositories",
        className: "github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "My Github Profile")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        target: "_blank",
        href: "http://stackoverflow.com/users/4561613/hien-luong",
        className: "stackoverflow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "My Stackoverflow Profile")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        target: "_blank",
        href: "https://medium.com/@phuhien",
        className: "medium",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
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


var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/components/HomePage/index.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    background: url(\"../static/images/spaceneedle.jpeg\") center center no-repeat;\n    background-size: cover;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    filter: brightness(120%) grayscale(100%);\n    opacity: .1;\n    top: 0;\n    z-index: -1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    && {        \n\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var StyledGrid = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
})(_templateObject());
var SpaceNeedleBackground = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject2());

var HomePage = function HomePage(_ref) {
  var handleImageChange = _ref.handleImageChange;
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
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    md: 5,
    sm: 11,
    xs: 11,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Intro__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    md: 3,
    sm: 11,
    xs: 11,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Intro_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleImageChange: handleImageChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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
/* harmony import */ var _components_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/HomePage */ "./components/HomePage/index.js");
var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/pages/index.js";



function Index(_ref) {
  var setPageTitle = _ref.setPageTitle,
      handleImageChange = _ref.handleImageChange;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setPageTitle("Home Page");
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomePage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handleImageChange: handleImageChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: inline-block;\n    position: relative;\n    transition: color 0.5s ease-in-out;\n    z-index: 1;\n    &::before {\n        content: '';\n        position: absolute;\n        height: 50%;\n        width: 0%;\n        background-color: ", ";\n        font-size: inherit;\n        opacity: 0;\n        bottom: 0%;\n        left: -15px;\n        transition: width 0.5s ease-in-out;\n        z-index: -1;\n    }\n\n    &:hover, &.active {\n        color: ", ";\n        font-size: ", ";\n        &::before {\n            opacity: 1;\n            width: calc(100% + 30px);\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span(_templateObject(), function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.textColor;
}, function (props) {
  return props.fontSize;
});

var HoverEffectText = function HoverEffectText(_ref) {
  var children = _ref.children,
      textColor = _ref.textColor,
      fontSize = _ref.fontSize,
      backgroundColor = _ref.backgroundColor,
      active = _ref.active;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
    fontSize: fontSize,
    textColor: textColor,
    backgroundColor: backgroundColor,
    className: active ? 'active' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, children);
};

HoverEffectText.defaultProps = {
  textColor: "#fff",
  fontSize: 'auto',
  backgroundColor: "".concat(_theme__WEBPACK_IMPORTED_MODULE_3__["colorOptions"].red.PRIMARY_COLOR_BOLD),
  active: false
};
/* harmony default export */ __webpack_exports__["default"] = (HoverEffectText);

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/*! exports provided: base, lightTheme, colorOptions, breakPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightTheme", function() { return lightTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorOptions", function() { return colorOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakPoints", function() { return breakPoints; });
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
var breakPoints = {
  xl: 1920,
  lg: 1280,
  md: 960,
  sm: 600,
  xs: 0
};

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