webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Link/index.js":
false,

/***/ "./components/layout/header.js":
/*!*************************************!*\
  !*** ./components/layout/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _src_CustomEl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/CustomEl */ "./src/CustomEl.js");
/* harmony import */ var _components_ClipboardCaption__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ClipboardCaption */ "./components/ClipboardCaption/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/theme */ "./src/theme.js");
/* harmony import */ var _src_HoverEffectText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/HoverEffectText */ "./src/HoverEffectText/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);



var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/components/layout/header.js";

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  color: #fff;\n  list-style: none;\n  padding: 0;\n  li {\n    margin-bottom: 24px;\n    min-height: 36px;\n    > * {\n      &:hover {\n        opacity: 1;\n      }\n    }\n    small {\n      font-size: ", "px;\n      opacity: 0.75;\n      font-weight: bold;\n      position: relative;\n      cursor: pointer;\n      &:before {\n        content: '';\n        position: absolute;\n        bottom: -5px;\n        height: 3px;\n        width: 50%;\n        background: ", ";\n      }\n    }\n    span, a {\n      cursor: pointer;\n      display: block;\n      font-size: ", "px;\n      font-weight: ", ";\n      text-decoration: none;\n      color: #fff;\n      display: inline-block;\n    }\n    h5 {\n      opacity: 0.25;\n      margin-bottom: 40px;\n      line-height: 24px;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  && {        \n      z-index: 2;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  position: fixed;\n  width: 100%;\n  height: 0%;\n  background-color: ", ";\n  z-index:1;\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n  &.active {\n    height: 100%;\n    padding-top: 10em;\n    ul {\n      li {\n        transform: translateY(0px);\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  flex-grow: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  && {\n    background: transparent;\n    img {\n        color: #000;\n        width: 40px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}













var StyledAppBar = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(function (_ref) {
  var color = _ref.color,
      otherProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["color"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
})(_templateObject());
var FlexGrowDiv = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].nav(_templateObject2());
var BigMenu = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject3(), _src_theme__WEBPACK_IMPORTED_MODULE_12__["lightTheme"].SECONDARY_BACKGROUND_COLOR);
var StyledToolbar = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }));
})(_templateObject4());
var List = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].ul(_templateObject5(), _src_theme__WEBPACK_IMPORTED_MODULE_12__["base"].FONT_SIZE_SMALL, _src_theme__WEBPACK_IMPORTED_MODULE_12__["colorOptions"].red.PRIMARY_COLOR_BOLD, _src_theme__WEBPACK_IMPORTED_MODULE_12__["base"].FONT_SIZE_EXTRA_LARGE, _src_theme__WEBPACK_IMPORTED_MODULE_12__["base"].FONT_WEIGHT_BOLD);

var Header = function Header(_ref2) {
  var toggleNav = _ref2.toggleNav,
      isNavOpened = _ref2.isNavOpened,
      navPosition = _ref2.navPosition,
      menuColor = _ref2.menuColor;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledAppBar, {
    position: navPosition,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledToolbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "../static/images/logo-v3.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(FlexGrowDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    edge: "start",
    color: "inherit",
    onClick: toggleNav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, isNavOpened ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fontSize: "large",
    color: 'inherit',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "close") : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fontSize: "large",
    color: menuColor || 'action',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "menu"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(BigMenu, {
    className: isNavOpened ? "active" : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    md: 6,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    container: true,
    direction: "row",
    spacing: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    sm: 12,
    md: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Explore work")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Project Title")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "The tool that does it all."))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Project Title")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "The tool that does it all."))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    md: 6,
    sm: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "D&J Corporation Kindergarten"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "Educate Whimsy Games"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "A.S+C.E.N.D"))))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    md: 3,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "Learn more")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "About"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "https://medium.com/@phuhien",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "Blog"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_HoverEffectText__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ClipboardCaption__WEBPACK_IMPORTED_MODULE_11__["default"], {
    copytext: "luongphuhien@gmail.com",
    buttontext: "Get in Touch",
    message: "My email has been copied to your clipboard! \uD83C\uDF89",
    timeout: 2000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "./node_modules/next-server/dist/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "./node_modules/next-server/dist/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver =  true ? window.IntersectionObserver : undefined;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  (0, _inherits2["default"])(Link, _react$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2["default"])(this, Link);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      })["catch"](function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch || "object" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          return _this3.handleRef(el);
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/object-keys/implementation.js":
/*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (false) {}
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if ( false || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "./node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/object.assign/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__(/*! has-symbols/shams */ "./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object.assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/*!************************************************!*\
  !*** ./node_modules/object.assign/polyfill.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/*!********************************************!*\
  !*** ./node_modules/object.assign/shim.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ })

})
//# sourceMappingURL=_app.js.48f8c44d562deaeb6749.hot-update.js.map