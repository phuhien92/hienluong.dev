webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");








var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/components/ClipboardCaption/index.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    position: absolute;\n    opacity: 0.5;\n    text-align: left;\n    font-weight: 500;\n    font-size: ", ";\n    width: ", ";\n    opacity: 0;\n    transform: translateY(-25px);\n    transition: cubic-bezier(0.19, 1, 0.22, 1) 1s;\n    visibility: hidden;\n    min-width: 300px;\n    &.active {\n        transform: translate(-50%, -50%);\n        left: 50%;\n        bottom: ", ";\n        opacity: 1;\n        visibility: visible;\n    }\n"]);

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



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject());
var ClipboardMessage = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject2(), function (props) {
  return "".concat(props.fontSize, "px");
}, function (props) {
  return "".concat(props.width, "px");
}, function (props) {
  return "".concat(props.fontSize * 3, "px");
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

/***/ })

})
//# sourceMappingURL=_app.js.5aa8ec9ee227d54a577d.hot-update.js.map