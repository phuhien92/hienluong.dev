webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/intro/intro_message.js":
/*!*******************************************!*\
  !*** ./components/intro/intro_message.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _src_KeyFrames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/KeyFrames */ "./src/KeyFrames.js");

var _jsxFileName = "/Users/hluong/Desktop/experiment_source/nextjs-portfolio/components/intro/intro_message.js";

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: rgba(1, 17, 24, 0.25);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    list-style: none;\n    padding: 0;\n    margin-top: 60px;\n    li {\n        float: left;\n        margin-right: 40px;\n\n        a {\n            background-repeat: no-repeat;\n            background-size: contain;\n            display: block;\n            text-indent: -9999px;\n            width: 60px;\n            height: 60px;\n            border-radius: 5px;\n            transition: all 0.4s ease-in-out;\n            &:hover {\n                transform: scale(1.5);\n            }\n\n            &.linkedin {\n                background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAe7X///8AcLAAc7EAd7Ps9fm71easzeIAcrH3/P0jhLpxqc3I3uv09/oAebQAdbLa6fKMuNaawNpHk8F+sNHg6/PR4++ixt5qpctbnceHs9JQmMTC2egRfrcsibyKuNUAaKw4jr+dw9wu2IZbAAAE4UlEQVR4nO2d7ZaaMBRFSQgaUIMOalXUlnn/h6y6nLZTRY4BItd19vyGyV655PMmRhEhhBBCCCGEEEIIISQozpn89GdeXY6ecLmNqs1usZsUhzh2ry5O5xh9/JyrL5JxqfO3knTx5q/eVXLh8lcXqzviaqVuSZf61QXrCvvjjt+ZdfQWjY5x/wfoP9VYvUGkukNSK3iilK/oHgoqVUgPVFsfolcOsnsN+9kkqOb21YVsg6kaBZXaSf4Um2P0jOAwdVtEUH3KrUS9hgzTSGotugwSVGoitRLzD9BwLbU5xdqZM0INnUMFVSlzYOMq2HAn09BMYMNx/OrCepHvYMORTEOzgA2nMpuaJwyFdhdPROlepqHZwIZjmYMad4QNFzJ7C+dS1FBojx9ZbGqhxI7a8JH3VGZ3eAKdPW2EBik+AzZSZ8CRKyHDD7FBCs4QU8n7bFCXKHYN4wKwIix0xPaHxjidiW1HvzCPd2bSTLzh49219Che8Dw8rQ/URH4NXqjd5R5J7ie+ERf3InW21e8ieD/b5Gf+HhH6xW3GkNzBaB3fsr7erP7+cM3ce7vKI4QQQgjpFWdOOCc2I6me0+jQap1nVbHdlkWV5VrbNzrn4WKbTT6nq287X6v1eFFm1na+comER6chZGK9HdeuDCX7ZaQ7rUqXAdQlCQOP3vjpYlS7KHRlvshsd5Jx4/9Ttck0uiFB/Mz3AxtG36wk3GdfdLZ+ghne/zaeNTR6AjxxZV525BjQ0FZwnuCFfdbJjlcwQwdskPxPJ4eSQhnm2b2DVU1MO+ghAxlaLJ/8hiRr3T2GMbRLP8ETRVvFIIYaz5+7pe3RshCGGs1puc+xXa8RwDD2D9ELabtK7N8w92xk/tIu87N3Q3eAc+dq+dmmFns31M8NZO7T5lPs2/AXnqT7gDZx2nsdtra70CKvrmfDdNze7kziP0Ltuw67YuJdiVIMV95fohRD/zRsMYYj30oUY6h8V/zkGC49BzZyDH1PXskxVJ4JaIIMPcc1ggw9j14JMlz5jdwEGaqDFMM0SVbzVTJ7+sHSq6kJbDgbbzIX2zP5ofzx3AsWXh9iUMN9aePzlvYVF+vtMysAe699jICG06O9CTOj8QPznk1NOMPl/d2yPMPfMmzD2qVrE8GvudlRHpJhVT8gga+QUVufxjSQ4eZRI5Gj36LX9CKM4fjxF4SuqX4M1jBpmBaYAnuP1+UcQQwbF8rAw7peU8QQhs2LneDlDl5X44UwbL69xxlo+yYZqiFSjD3yotlAWxrkkG0O7aJ6XRsXwBDpxcA7SHxmiAEMoWJhe1Q+w7b+DbHmAbs5zmentH9D7Kw7VA5VDdIQG2pht6wUgzTEljmxxtTnSuP+DbHIwi5S9dli698Qa+GxCw59Joj9G2LzAaxD9FnY790QzTGAJvo+u/m9G4LzAXcQa7gGozRCZheDNARnrdj8aZCG6PU9gg3BtZVcriFYh3IN0dUji+y2iTbUNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSEMa0pCGNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSEMa0pCGwzDMRyptovZ3ZpBjLuhF1TZpLEfqe5uwa6LuQbOZNLMFC+Way+F7bXnzi+sVETosx/v9dBkhhBBCCCGEEEIIIYR0zm/4A4Y01dVmZQAAAABJRU5ErkJggg==\");\n            }\n            &.github {\n                background-image: url(\"https://image.flaticon.com/icons/svg/25/25231.svg\");\n            }\n            &.stackoverflow {\n                background-image: url(\"https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.svg?v=f13ebeedfa9e\");\n            }\n            &.medium {\n                background-image: url(\"data:image/png;base64,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\");\n            }\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 900;\n    font-size: calc(16px + 2.9vw);\n    hyphens: auto;\n    line-height: 1em;\n    margin-bottom: 10px;\n    position: relative;\n    z-index:1;\n    span {\n        color: #fff;\n        font-size: calc(16px + 3vw);\n    }\n    &::after {\n        content: \"\";\n        background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 115.28 113.74'%3E%3Cpath d='M2.2 70.43c-4.62-18.6-3.57-50.35 18.55-64.3 20.87-13.17 46.47-1.65 55.62 2.5 7.38 3.32 34.15 15.36 38.33 40.8 2.35 14.28-3.56 25.8-6.18 30.9-13.36 26.06-41.12 31.75-43.28 32.15-5.84 1.1-21.46 3.8-37.1-4.94C8.74 96.64 3.64 76.18 2.2 70.43z' fill='rgb(25, 118, 210)'/%3E%3C/svg%3E\");\n        width: 6vw;\n        height: 6vw;\n        will-change: transform;\n        z-index: 0;\n        position: absolute;\n        left: -1.4vw;\n        top: -1.6vw;\n        animation: ", " 20s linear infinite;\n        z-index: -1;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var StyledH1 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1(_templateObject(), _src_KeyFrames__WEBPACK_IMPORTED_MODULE_4__["keyframe_roating_clockwise"]);
var StyledList = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul(_templateObject2());
var StyledH3 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h3(_templateObject3());

var IntroMessage = function IntroMessage() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledH1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "H"), "ien Luong."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledH3, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Software Engineer at Seattle"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "I strive to push the world forward by creating a bridge between people and technology."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.linkedin.com/in/hienphuluong",
    className: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "My LinkedIn Profile")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    href: "https://github.com/phuhien92?tab=repositories",
    className: "github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "My Github Profile")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    href: "http://stackoverflow.com/users/4561613/hien-luong",
    className: "stackoverflow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "My Stackoverflow Profile")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    href: "https://medium.com/@phuhien",
    className: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "My Blog"))));
};

/* harmony default export */ __webpack_exports__["default"] = (IntroMessage);

/***/ })

})
//# sourceMappingURL=index.js.107e35a091d31fc79e29.hot-update.js.map