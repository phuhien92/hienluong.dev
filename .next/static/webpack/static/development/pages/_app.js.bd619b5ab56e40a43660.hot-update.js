webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/layout/header.js":
/*!*************************************!*\
  !*** ./components/layout/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_ClipboardCaption__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ClipboardCaption */ "./components/ClipboardCaption/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/theme */ "./src/theme.js");
/* harmony import */ var _src_HoverEffectText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/HoverEffectText */ "./src/HoverEffectText/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");




var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/components/layout/header.js";

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  color: #fff;\n  list-style: none;\n  padding: 0;\n  li {\n    margin-bottom: 24px;\n    min-height: 36px;\n    > * {\n      &:hover {\n        opacity: 1;\n      }\n    }\n    small {\n      font-size: ", "px;\n      opacity: 0.75;\n      font-weight: bold;\n      position: relative;\n      cursor: pointer;\n      &:before {\n        content: '';\n        position: absolute;\n        bottom: -5px;\n        height: 3px;\n        width: 50%;\n        background: ", ";\n      }\n    }\n    span, a {\n      cursor: pointer;\n      display: block;\n      font-size: ", "px;\n      font-weight: ", ";\n      text-decoration: none;\n      color: #fff;\n      display: inline-block;\n    }\n    h5 {\n      opacity: 0.25;\n      margin-bottom: 40px;\n      line-height: 24px;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  && {        \n      z-index: 2;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  position: fixed;\n  width: 100%;\n  height: 0%;\n  background-color: ", ";\n  z-index:1;\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n  &.active {\n    height: 100%;\n    padding-top: 10em;\n    ul {\n      li {\n        transform: translateY(0px);\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  flex-grow: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  && {\n    background: transparent;\n    img {\n        color: #000;\n        width: 40px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var StyledAppBar = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])(function (_ref) {
  var color = _ref.color,
      otherProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["color"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, otherProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
})(_templateObject());
var FlexGrowDiv = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].nav(_templateObject2());
var BigMenu = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject3(), _src_theme__WEBPACK_IMPORTED_MODULE_12__["lightTheme"].SECONDARY_BACKGROUND_COLOR);
var StyledToolbar = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }));
})(_templateObject4());
var List = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].ul(_templateObject5(), _src_theme__WEBPACK_IMPORTED_MODULE_12__["base"].FONT_SIZE_SMALL, _src_theme__WEBPACK_IMPORTED_MODULE_12__["colorOptions"].red.PRIMARY_COLOR_BOLD, _src_theme__WEBPACK_IMPORTED_MODULE_12__["base"].FONT_SIZE_EXTRA_LARGE, _src_theme__WEBPACK_IMPORTED_MODULE_12__["base"].FONT_WEIGHT_BOLD);

var Header = function Header(_ref2) {
  var toggleNav = _ref2.toggleNav,
      isNavOpened = _ref2.isNavOpened,
      navPosition = _ref2.navPosition,
      menuColor = _ref2.menuColor;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      viewport = _useState2[0],
      setViewport = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      tab = _useState4[0],
      setTab = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var viewportWidth = window.innerWidth;
    setViewport({
      width: viewportWidth
    });
    window.addEventListener('resize', function () {
      setViewport({
        width: window.innerWidth
      });
    });
  }, []);

  var handleChangeTabIndex = function handleChangeTabIndex(e, index) {
    return setTab(index);
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(StyledAppBar, {
    position: navPosition,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(StyledToolbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    src: "../static/images/logo-v3.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(FlexGrowDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    edge: "start",
    color: "inherit",
    onClick: toggleNav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, isNavOpened ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fontSize: "large",
    color: 'inherit',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "close") : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fontSize: "large",
    color: menuColor || 'action',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "menu"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(BigMenu, {
    className: isNavOpened ? "active" : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    spacing: 3,
    direction: "row",
    justify: "center",
    alignItems: "flex-start",
    style: {
      minHeight: '100vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    lg: 6,
    sm: 11,
    xs: 11,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, viewport.width <= "".concat(_src_theme__WEBPACK_IMPORTED_MODULE_12__["breakPoints"].lg) && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Tabs"], {
    value: tab,
    onChange: handleChangeTabIndex,
    indicatorColor: "secondary",
    textColor: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Tab"], {
    label: "Featured Projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Tab"], {
    label: "Other Projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    container: true,
    direction: "row",
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12,
    sm: 12,
    lg: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Explore work")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Project Title")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "The tool that does it all."))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Project Title")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "The tool that does it all."))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12,
    sm: 12,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "D&J Corporation Kindergarten"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Educate Whimsy Games"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "A.S+C.E.N.D"))))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    md: 3,
    sm: 11,
    xs: 11,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Learn more")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "About"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://medium.com/@phuhien",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Blog"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_ClipboardCaption__WEBPACK_IMPORTED_MODULE_11__["default"], {
    copytext: "luongphuhien@gmail.com",
    buttontext: "Get in Touch",
    message: "My email has been copied to your clipboard! \uD83C\uDF89",
    timeout: 2000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.bd619b5ab56e40a43660.hot-update.js.map