webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/layout/header.js":
/*!*************************************!*\
  !*** ./components/layout/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _src_CustomEl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../src/CustomEl */ "./src/CustomEl.js");
/* harmony import */ var _components_ClipboardCaption__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/ClipboardCaption */ "./components/ClipboardCaption/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_19__);










var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/components/layout/header.js";

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n  color: #fff;\n  list-style: none;\n  padding: 0;\n  li {\n    transition: transform cubic-bezier(0.19, 1, 0.22, 1) 1s 0.6s, opacity cubic-bezier(0.19, 1, 0.22, 1) 1s 0.6s, color linear 0.2s;\n    margin-bottom: 24px;\n    min-height: 36px;\n\n    small {\n      font-size: 16px;\n      opacity: 0.75;\n      font-weight: bold;\n      position: relative;\n      &:before {\n        content: '';\n        position: absolute;\n        bottom: -5px;\n        height: 3px;\n        width: 50%;\n        background: #e31e0c;\n      }\n    }\n    span, a {\n      cursor: pointer;\n      display: block;\n      font-size: 24px;\n      font-weight: 700;\n      text-decoration: none;\n      color: #fff;\n      display: inline-block;\n    }\n    h3 {\n      margin-bottom: 8px;\n    }\n    h5 {\n      opacity: 0.25;\n      margin-bottom: 60px;\n      line-height: 24px;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n  && {        \n      z-index: 2;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n  position: fixed;\n  width: 100%;\n  height: 0%;\n  background-color: #021117;\n  z-index:1;\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n  &.active {\n    height: 100%;\n    padding-top: 10em;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n  flex-grow: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n  && {\n    background-color: #fff;\n    img {\n        color: #000;\n        width: 40px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var StyledAppBar = Object(styled_components__WEBPACK_IMPORTED_MODULE_16__["default"])(function (_ref) {
  var color = _ref.color,
      otherProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, ["color"]);

  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, otherProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
})(_templateObject());
var FlexGrowDiv = styled_components__WEBPACK_IMPORTED_MODULE_16__["default"].nav(_templateObject2());
var BigMenu = styled_components__WEBPACK_IMPORTED_MODULE_16__["default"].div(_templateObject3());
var StyledToolbar = Object(styled_components__WEBPACK_IMPORTED_MODULE_16__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
})(_templateObject4());
var List = styled_components__WEBPACK_IMPORTED_MODULE_16__["default"].ul(_templateObject5());

var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      iconColor: "action",
      iconName: "menu",
      menuOpen: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleModal", function () {
      var menuOpen = _this.state.menuOpen;

      _this.setState({
        menuOpen: !menuOpen,
        iconColor: "inherit",
        iconMenu: "close"
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          iconColor = _this$state.iconColor,
          iconName = _this$state.iconName,
          menuOpen = _this$state.menuOpen;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledAppBar, {
        position: "static",
        elevation: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledToolbar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_19___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/images/logo-v3.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(FlexGrowDiv, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
        edge: "start",
        color: "inherit",
        "aria-label": iconName,
        onClick: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
        fontSize: "large",
        color: iconColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, iconName))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(BigMenu, {
        className: menuOpen ? "active" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
        container: true,
        spacing: 0,
        direction: "row",
        justify: "center",
        alignItems: "flex-start",
        style: {
          minHeight: '100vh'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
        item: true,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
        item: true,
        container: true,
        direction: "row",
        spacing: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
        item: true,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(List, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Explore work")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "Project Title"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "The tool that does it all.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Project Title"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "The tool that does it all.")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
        item: true,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(List, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_19___default.a, {
        href: "/work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "D&J Corporation Kindergarten"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_19___default.a, {
        href: "/work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "Educate Whimsy Games"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_19___default.a, {
        href: "/work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "A.S+C.E.N.D"))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
        item: true,
        md: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(List, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, "Learn more")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_19___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "About"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "https://medium.com/@phuhien",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Blog")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_ClipboardCaption__WEBPACK_IMPORTED_MODULE_18__["default"], {
        copytext: "luongphuhien@gmail.com",
        buttontext: "Get in Touch",
        message: "My email has been copied to your clipboard! \uD83C\uDF89",
        timeout: 2000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      })))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.f4ee334cd65579b735f3.hot-update.js.map