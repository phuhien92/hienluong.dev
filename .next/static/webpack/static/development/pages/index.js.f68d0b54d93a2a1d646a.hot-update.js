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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    height: 40px;\n    background-image: url(\"/static/images/sin.png\");\n    background-position: -115px 0px;\n    background-size: cover;\n    width: 100%;\n    position: relative;\n    top: 2px;\n    display: none;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    position: absolute;\n    right: -2em;\n    top: -2em;\n    text-align: right;\n    img {\n        width: 80px;\n    }\n    p {\n        margin: 0;\n    }\n\n    @media screen and (max-width: ", "px){\n        top: -3em;\n        right: -3em;\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    position: absolute;\n    left: 15px;\n    bottom: 30px;\n    line-height: 30px;\n    vertical-align: middle;\n    width: 60px;\n    display: flex;\n    border-radius: 3px;\n    overflow: hidden;\n    z-index: 2;\n    span {\n        width: 50%;\n        text-align: center;\n        color: #fff;\n        font-weight: 700;\n        text-align: center;\n        text-shadow: 1px 1px 1px #191b1e;\n        background-color: #2d3035;\n        cursor: pointer;\n        &.active {\n            background-color: ", ";\n            cursor: default;\n        }\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    color: ", ";\n    font-size: 4em;\n    font-weight: 700;\n    display: block;\n    position: relative;\n\n    @media screen and (min-width: ", "px){\n        text-align: right;\n        margin-right: 10px;\n    }\n    small {\n        font-size: 70%;\n        animation: ", " 4s linear infinite;\n        &.degree {\n            position: absolute;\n            top: -5px;\n        }\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    left: 1em;\n    position: absolute;\n    font-size: 1.5em;\n    color: ", ";\n    font-weight: 600;\n"]);

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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    position: relative;\n    border-radius: 30px;\n    box-shadow: 15px 20px 85px #d7c4bd;\n    overflow: hidden;\n    background: linear-gradient(141deg,#f9ebe2 30%, #e7c3bb 75%);\n"]);

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

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());
var Card = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject2());
var CityText = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span(_templateObject3(), _src_theme__WEBPACK_IMPORTED_MODULE_9__["colorOptions"].gray.PRIMARY_COLOR_BOLD);
var TempText = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span(_templateObject4(), _src_theme__WEBPACK_IMPORTED_MODULE_9__["colorOptions"].gray.PRIMARY_COLOR_BOLD, _src_theme__WEBPACK_IMPORTED_MODULE_9__["breakPoints"].md, _src_KeyFrames__WEBPACK_IMPORTED_MODULE_11__["keyframe_flip"]);
var TempSwitcher = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject5(), _src_theme__WEBPACK_IMPORTED_MODULE_9__["colorOptions"].blue.PRIMARY_COLOR_BOLD);
var WeatherText = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject6(), _src_theme__WEBPACK_IMPORTED_MODULE_9__["breakPoints"].md);
var Wave = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject7());
var WType = {
  200: "thunder-storm",
  300: "sun-shower",
  500: "rainy",
  600: "snow",
  700: "mist",
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
      setWunit = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      wtemp = _useState14[0],
      setWtemp = _useState14[1];

  var wunit_change = function wunit_change(e) {
    var el = e.target;
    var id = el.id;

    if (id !== wunit) {
      var temp = id === "metric" ? (wtemp - 32) / 1.8 : wtemp * 1.8 + 32;
      setWunit(id);
      setWtemp(temp);
    }

    return false;
  };

  var getWType = function getWType(id) {
    var type;

    if (id > 800) {
      type = WType[801];
    } else if (id === 800) {
      type = WType[800];
    } else if (id >= 700 && id < 800) {
      type = WType[700];
    } else if (id >= 600 && id < 700) {
      type = WType[600];
    } else if (id >= 500 && id < 600) {
      type = WType[500];
    } else if (type >= 300 && id < 400) {
      type = WType[300];
    } else {
      type = WType[200];
    }

    return type;
  };

  var lookupLoc = function lookupLoc() {
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
        var data = success.data; //console.log(data)

        setWtemp(data.main.temp);
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
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    lookupLoc();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(WeatherText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_WIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: getWType(600),
    text: weather.weatherText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  })), props.children, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Wave, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CityText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, city), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(TempSwitcher, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    id: "metric",
    className: wunit === "metric" ? "active" : "",
    onClick: wunit_change,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "\xB0C"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    id: "imperial",
    className: wunit === "imperial" ? "active" : "",
    onClick: wunit_change,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, "\xB0F")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(TempText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, Math.round(wtemp), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("small", {
    className: "degree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, "o"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Weather);
Weather.defaultProps = {};

/***/ })

})
//# sourceMappingURL=index.js.f68d0b54d93a2a1d646a.hot-update.js.map