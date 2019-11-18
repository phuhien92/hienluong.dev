webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Weather/index.js":
/*!*************************************!*\
  !*** ./components/Weather/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../API */ "./API/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/theme */ "./src/theme.js");
/* harmony import */ var _WIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WIcon */ "./components/Weather/WIcon.js");
/* harmony import */ var _src_KeyFrames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../src/KeyFrames */ "./src/KeyFrames.js");





var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/components/Weather/index.js";

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    height: 31px;\n    background-image: url(data:image/png;base64,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);\n    background-position: -80px 0px;\n    background-size: 100%;\n    width: 100%;\n    position: relative;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    position: absolute;\n    right: -2em;\n    top: -2em;\n    text-align: right;\n    img {\n        width: 80px;\n    }\n    p {\n        margin: 0;\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    position: absolute;\n    left: 15px;\n    bottom: 30px;\n    line-height: 30px;\n    vertical-align: middle;\n    width: 60px;\n    display: flex;\n    border-radius: 3px;\n    overflow: hidden;\n    span {\n        width: 50%;\n        text-align: center;\n        color: #fff;\n        font-weight: 700;\n        text-align: center;\n        text-shadow: 1px 1px 1px #191b1e;\n        background-color: #2d3035;\n        &.active {\n            background-color: ", ";\n        }\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    color: ", ";\n    font-size: 4em;\n    font-weight: 700;\n    display: inline-block;\n    position: relative;\n    small {\n        font-size: 70%;\n        animation: ", " 4s linear infinite;\n        &.degree {\n            position: absolute;\n            top: -5px;\n        }\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    top: -15px;\n    left: 15px;\n    position: absolute;\n    font-size: 1.5em;\n    color: ", ";\n    font-weight: 600;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    z-index: 1;\n    background: #fff;\n    position: relative;\n    padding: 15px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    position: relative;\n    /* border: 5px solid ", "; */\n    border-radius: 30px;\n    box-shadow: 15px 20px 85px #d7c4bd;\n    overflow: hidden;\n    background: linear-gradient(141deg,#f9ebe2 30%, #e7c3bb 75%);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var ipLookup =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
    var res, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(_API__WEBPACK_IMPORTED_MODULE_7__["API"].IPLOOKUP_API_PATH);

          case 3:
            res = _context.sent;
            data = res.data;
            return _context.abrupt("return", data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function ipLookup() {
    return _ref.apply(this, arguments);
  };
}();

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject(), _src_theme__WEBPACK_IMPORTED_MODULE_9__["colorOptions"].orange.PRIMARY_COLOR);
var Card = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject2());
var CityText = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span(_templateObject3(), _src_theme__WEBPACK_IMPORTED_MODULE_9__["colorOptions"].gray.PRIMARY_COLOR_BOLD);
var TempText = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span(_templateObject4(), _src_theme__WEBPACK_IMPORTED_MODULE_9__["colorOptions"].gray.PRIMARY_COLOR_BOLD, _src_KeyFrames__WEBPACK_IMPORTED_MODULE_11__["keyframe_flip"]);
var TempSwitcher = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject5(), _src_theme__WEBPACK_IMPORTED_MODULE_9__["colorOptions"].blue.PRIMARY_COLOR_BOLD);
var WeatherText = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject6());
var Wave = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject7());
var WType = {
  200: "thunder-storm",
  300: "sun-shower",
  500: "rainy",
  600: "snow",
  800: "sunny",
  801: "cloudy"
};

var getCurrentWeather = function getCurrentWeather(query, units) {
  return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("".concat(_API__WEBPACK_IMPORTED_MODULE_7__["API"].WEATHER_API_PATH, "?appid=").concat(_API__WEBPACK_IMPORTED_MODULE_7__["API"].WEATHER_API_ACCESS_KEY, "&q=").concat(query, "&units=").concat(units));
};

var Weather = function Weather(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(-122.33),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      longitude = _useState2[0],
      setLongitude = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(47.6),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      latitude = _useState4[0],
      setLatitude = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("Seattle"),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      city = _useState6[0],
      setCity = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("United State"),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      country = _useState8[0],
      setCountry = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      weather = _useState10[0],
      setWeather = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])('imperial'),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      wunit = _useState12[0],
      setWUnit = _useState12[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    ipLookup().then(function (success) {
      var data = !!success ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, success, {
        longitude: success.lon,
        latitude: success.lat
      }) : {
        latitude: latitude,
        longitude: longitude,
        city: city,
        country: country
      };
      setLatitude(data.latitude);
      setLongitude(data.longitude);
      setCity(data.city);
      setCountry(data.country);
      getCurrentWeather("".concat(city, ",").concat(country), wunit).then(function (success) {
        var data = success.data;
        console.log(data);
        setWeather(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data.main, {
          name: data.name,
          weatherMain: data.weather[0].main,
          weatherText: data.weather[0].description,
          icon: "".concat(_API__WEBPACK_IMPORTED_MODULE_7__["API"].WEATHER_API_ICON_PATH, "/").concat(data.weather[0].icon, "@2x.png"),
          id: data.weather[0].id
        }));
      })["catch"](function (error) {
        console.error("Current Weather Error: ", error);
      });
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(WeatherText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_WIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: WType[weather.id],
    text: weather.weatherText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  })), props.children, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Wave, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CityText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, weather.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(TempSwitcher, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    id: "metric",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "  \xB0C"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    id: "imperial",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "\xB0F")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(TempText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, Math.round(weather.temp), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("small", {
    className: "degree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "o"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Weather);
Weather.defaultProps = {};

/***/ })

})
//# sourceMappingURL=index.js.d2bca360d36b990345e2.hot-update.js.map