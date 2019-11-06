webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _components_transition__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/transition */ "./components/transition/index.js");
/* harmony import */ var _components_layout_header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/layout/header */ "./components/layout/header.js");
/* harmony import */ var _components_layout_footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/layout/footer */ "./components/layout/footer.js");
/* harmony import */ var _src_global_styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/global-styles */ "./src/global-styles.js");









var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/pages/_app.js";








/*
    given a DOM image element, searches it for <img > tags and check if all of them 
    has finished loading or not
    @param: parent node Element
    @return boolean
*/

function imagesLoaded(parentNode) {
  var imgElements = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["default"])(parentNode.querySelectorAll('img'));

  imgElements.forEach(function (imgElement) {
    if (!imgElement.complete) return false;
  });
  return true;
}

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp, _App);

  function MyApp() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      triggerTransition: true,
      isNavOpened: false,
      navPosition: "fixed",
      overflowClassname: "nav-opened",
      menuColor: "action",
      pageTitle: "Hien Luong",
      // footer
      footerTheme: "light"
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setMenuColor", function (color) {
      return _this.setState({
        menuColor: color
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setPageTitle", function (pageTitle) {
      return _this.setState({
        pageTitle: pageTitle
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setFooterTheme", function (footerTheme) {
      _this.setState({
        footerTheme: footerTheme
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "toggleNav", function () {
      var _this$state = _this.state,
          isNavOpened = _this$state.isNavOpened,
          overflowClassname = _this$state.overflowClassname;
      !isNavOpened ? document.body.classList.add(overflowClassname) : document.body.classList.remove(overflowClassname);

      _this.setState({
        isNavOpened: !isNavOpened
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleImageChange", function () {
      console.log("handle");

      _this.setState({
        triggerTransition: !imagesLoaded(_this.bodyElement)
      }, function () {
        document.body.classList.remove(_this.state.overflowClassname);
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var jssStyles = document.querySelector('#jss-server-side');

      if (jssStyles) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var _this$state2 = this.state,
          isNavOpened = _this$state2.isNavOpened,
          navPosition = _this$state2.navPosition,
          triggerTransition = _this$state2.triggerTransition,
          overflowClassname = _this$state2.overflowClassname,
          menuColor = _this$state2.menuColor,
          pageTitle = _this$state2.pageTitle,
          footerTheme = _this$state2.footerTheme;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, pageTitle, " | Portfolio")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        ref: function ref(element) {
          return _this2.bodyElement = element;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src_global_styles__WEBPACK_IMPORTED_MODULE_16__["GlobalStyle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_transition__WEBPACK_IMPORTED_MODULE_13__["default"], {
        triggerTransition: triggerTransition,
        overflowClassname: overflowClassname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        setMenuColor: this.setMenuColor,
        setPageTitle: this.setPageTitle,
        setFooterTheme: this.setFooterTheme,
        handleImageChange: this.handleImageChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_layout_footer__WEBPACK_IMPORTED_MODULE_15__["default"], {
        theme: footerTheme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      })));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_10___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.d15c8bdf60f279c6a174.hot-update.js.map