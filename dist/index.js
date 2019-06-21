/*! brown-university-styles v0.8.0 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseFontSizePx", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["baseFontSizePx"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["breakpoints"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRems", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["getRems"]; });

/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return _colors__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return _typography__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseFontSizePx", function() { return baseFontSizePx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
var baseFontSizePx = 16;
var breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1370
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRems", function() { return getRems; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* eslint-disable import/prefer-default-export */

function getRems(px) {
  return "".concat(px / _constants__WEBPACK_IMPORTED_MODULE_0__["baseFontSizePx"], "rem");
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var idRed = "#ED1C24";
var webRed = "#C00404";
var gold = "#FFC72C";
var gray = "#98A4AE";
var emerald = "#00B398";
var taupe = "#B7B09C";
var bearBrown = "#8b572a";
var lightGold = "#fef1cd";
/* harmony default export */ __webpack_exports__["default"] = ({
  /*
    brown university visual identity
  */
  // primary
  idRed: idRed,
  brown: "#4E3629",
  gold: gold,
  gray: gray,
  // secondary
  skyBlue: "#59CBE8",
  emerald: emerald,
  navy: "#003C71",
  taupe: taupe,

  /*
    fastspot visual styles
  */
  // primary
  red: webRed,
  // prefer webRed over idRed
  yellow: gold,
  // secondary`
  beige: taupe,

  /*
    brown university theme
  */
  lightBeige: "#EFECE5",
  // renamed from "beige" to resolve naming conflict with fastspot visual styles
  sand: "#CCC6B8",
  lightBrown: "#A79A94",
  mediumBrown: "#745D54",

  /*
    other themes
  */
  // used by athletics
  bearBrown: bearBrown,

  /*
    accent
  */
  lightGold: lightGold,

  /*
    grayscale
  */
  white: "#FFFFFF",
  backgroundGray: "#f7f7f7",
  lightGray: "#F0F3F5",
  mediumGray: "#687078",
  darkGray: "#3C3C3C",
  black: "#000000",
  transparentBlack: "rgba(0, 0, 0, 0.15)",

  /*
    notifications
  */
  successBackground: "#e0f4f1",
  successForeground: emerald,
  errorBackground: "#ebd9db",
  errorForeground: "#d0021b",
  warningBackground: lightGold,
  warningForeground: bearBrown
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sans = "Circular-Book, Arial, Helvetica, sans-serif";
var sansBold = "Circular-Bold, Circular-Book, Arial, Helvetica, sans-serif";
var serif = 'minion-pro, "Times New Roman", serif';
var mono = '"Bitstream Vera Sans Mono", Menlo, Monaco, Consolas, Courier, monospace';
/* harmony default export */ __webpack_exports__["default"] = ({
  sans: sans,
  sansBold: sansBold,
  serif: serif,
  mono: mono
});

/***/ })
/******/ ]);
});