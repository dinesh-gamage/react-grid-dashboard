/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Parking.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Parking.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".parking-widget {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: white;\n  box-sizing: border-box; }\n  .parking-widget * {\n    font-family: \"AvenirNext\",sans-serif; }\n  .parking-widget .title {\n    display: flex;\n    width: 100%;\n    height: 10%;\n    justify-content: space-between;\n    align-items: center;\n    box-sizing: border-box;\n    font-size: 20px;\n    color: gray; }\n    .parking-widget .title div .calendar {\n      background-image: url(https://static.iviva.com/images/Adani_UXP/calendar_min_icon.png);\n      width: 20px;\n      height: 20px;\n      background-size: contain;\n      background-position: center;\n      background-repeat: no-repeat;\n      display: inline-block; }\n    .parking-widget .title div .arrow {\n      display: inline-block;\n      background-position: center center;\n      background-repeat: no-repeat;\n      width: 20px;\n      height: 20px;\n      background-size: contain;\n      background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='23.445' height='23.445' viewBox='0 0 23.445 23.445'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23424242;opacity:0.333;%7D%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M23.445,11.722A11.722,11.722,0,1,1,11.722,0,11.72,11.72,0,0,1,23.445,11.722ZM9.643,6.239v5.483H6.291a.568.568,0,0,0-.4.969l5.431,5.4a.562.562,0,0,0,.8,0l5.431-5.4a.567.567,0,0,0-.4-.969H13.8V6.239a.569.569,0,0,0-.567-.567H10.21A.569.569,0,0,0,9.643,6.239Z' transform='translate(23.445) rotate(90)'/%3E%3C/svg%3E\"); }\n      .parking-widget .title div .arrow:nth-child(2) {\n        transform: rotate(180deg);\n        margin-left: 5px; }\n  .parking-widget .body {\n    width: 100%;\n    height: 90%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin-top: 25px; }\n    .parking-widget .body div {\n      align-self: center;\n      margin: auto 10px; }\n      .parking-widget .body div .user {\n        background-image: url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"86.765\" height=\"86.765\" viewBox=\"0 0 86.765 86.765\"%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23e33a75;%7D%3C/style%3E%3C/defs%3E%3Cpath class=\"a\" d=\"M77.469,2.25H9.3a9.3,9.3,0,0,0-9.3,9.3V79.719a9.3,9.3,0,0,0,9.3,9.3H77.469a9.3,9.3,0,0,0,9.3-9.3V11.546A9.3,9.3,0,0,0,77.469,2.25ZM46.481,58.028h-9.3v9.3a3.108,3.108,0,0,1-3.1,3.1h-6.2a3.108,3.108,0,0,1-3.1-3.1V23.941a3.108,3.108,0,0,1,3.1-3.1H46.481a18.593,18.593,0,0,1,0,37.185Zm0-24.79h-9.3v12.4h9.3a6.2,6.2,0,0,0,0-12.4Z\" transform=\"translate(0 -2.25)\"/%3E%3C/svg%3E');\n        background-repeat: no-repeat;\n        width: 90px;\n        height: 90px;\n        background-size: contain;\n        display: inline-block;\n        background-position: center; }\n      .parking-widget .body div h1 {\n        font-size: 60px;\n        margin: auto;\n        text-align: center;\n        font-weight: normal; }\n      .parking-widget .body div p {\n        margin: auto;\n        text-align: center; }\n    .parking-widget .body .bottom {\n      width: 100%;\n      font-size: 12px;\n      color: gray;\n      text-align: center; }\n      .parking-widget .body .bottom span {\n        background-image: url(https://static.iviva.com/images/Adani_UXP/green-down-arrow.png);\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: contain;\n        width: 13px;\n        height: 13px;\n        display: inline-block;\n        margin: auto; }\n    .parking-widget .body .middle {\n      width: 100%;\n      color: #535353;\n      text-align: center;\n      margin: 10px 0; }\n      .parking-widget .body .middle h4 {\n        margin: 10px 0; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Visitor.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Visitor.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".visitor-widget {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: white;\n  box-sizing: border-box; }\n  .visitor-widget * {\n    font-family: \"AvenirNext\",sans-serif; }\n  .visitor-widget .title {\n    display: flex;\n    width: 100%;\n    height: 10%;\n    justify-content: space-between;\n    align-items: center;\n    box-sizing: border-box;\n    font-size: 26px;\n    color: gray; }\n    .visitor-widget .title .calendar {\n      background-image: url(https://static.iviva.com/images/Adani_UXP/calendar_min_icon.png);\n      width: 25px;\n      height: 25px;\n      background-size: contain;\n      background-position: center;\n      background-repeat: no-repeat; }\n  .visitor-widget .body {\n    width: 100%;\n    height: 90%;\n    box-sizing: border-box;\n    margin-top: 20px; }\n    .visitor-widget .body p {\n      margin: 15px 0; }\n      .visitor-widget .body p:nth-child(1) {\n        color: red; }\n      .visitor-widget .body p:nth-child(2) {\n        color: red;\n        font-size: 30px; }\n      .visitor-widget .body p:nth-child(3) {\n        color: gray; }\n    .visitor-widget .body .bottom {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-top: 30px; }\n      .visitor-widget .body .bottom div {\n        border-radius: 50px;\n        width: auto;\n        padding: 8px 14px;\n        text-transform: uppercase;\n        font-size: 12px; }\n        .visitor-widget .body .bottom div.heat {\n          background: linear-gradient(45deg, #00127F 30%, #6AFFC2 100%);\n          color: white; }\n        .visitor-widget .body .bottom div.conf {\n          background-color: lightgray; }\n    .visitor-widget .body .small {\n      font-size: 8px;\n      color: gray; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/template/LinkWidgetTemplate.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/template/LinkWidgetTemplate.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link-widget {\n  display: block;\n  width: 100%;\n  height: auto;\n  margin: auto;\n  padding: 20px;\n  box-sizing: border-box;\n  text-decoration: none;\n  color: black; }\n  .link-widget * {\n    box-sizing: border-box; }\n  .link-widget .lw-img-container {\n    width: 100px;\n    height: 100px;\n    background: white;\n    border-radius: 10px;\n    padding: 8px;\n    margin: auto;\n    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.12); }\n    .link-widget .lw-img-container img {\n      display: block;\n      margin: auto;\n      width: 100%;\n      height: 100%;\n      object-fit: contain; }\n  .link-widget:hover .lw-img-container {\n    background-color: #ff8d8d; }\n  .link-widget p {\n    width: auto;\n    text-align: center;\n    font-size: 14px;\n    display: block;\n    margin: 20px auto;\n    text-decoration: none;\n    color: black; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/template/WidgetTemplate.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/template/WidgetTemplate.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".flex-row {\n  display: flex;\n  flex-direction: row; }\n\n.flex-row-center {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center; }\n\n.flex-row-start-center {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: center; }\n\n.flex-wrap {\n  flex-wrap: wrap; }\n\n.flex-no-wrap {\n  flex-wrap: nowrap; }\n\n.widget-block {\n  width: 100%;\n  height: 100%; }\n  .widget-block .wb-header {\n    width: 100%;\n    height: auto; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".widget-01 {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: white; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/Parking.scss":
/*!*************************************!*\
  !*** ./src/components/Parking.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./Parking.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Parking.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Parking.tsx":
/*!************************************!*\
  !*** ./src/components/Parking.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./Parking.scss */ "./src/components/Parking.scss");
class VisitorWidget extends React.Component {
    render() {
        return (React.createElement("div", { className: 'parking-widget' },
            React.createElement("div", { className: "title" },
                React.createElement("div", null,
                    React.createElement("span", { className: "calendar" }),
                    " Parking"),
                React.createElement("div", null,
                    React.createElement("span", { className: 'arrow' }),
                    React.createElement("span", { className: "arrow" }))),
            React.createElement("div", { className: "body" },
                React.createElement("div", null,
                    React.createElement("span", { className: "user" })),
                React.createElement("div", null,
                    React.createElement("h1", null, "30"),
                    React.createElement("p", null, "KWH")),
                React.createElement("div", { className: "middle" },
                    React.createElement("h4", null, "INR 1000")),
                React.createElement("div", { className: "bottom" },
                    React.createElement("span", null),
                    "\u00A0 0.5% Lesser energy consumed"))));
    }
}
exports.default = VisitorWidget;


/***/ }),

/***/ "./src/components/Visitor.scss":
/*!*************************************!*\
  !*** ./src/components/Visitor.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./Visitor.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Visitor.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Visitor.tsx":
/*!************************************!*\
  !*** ./src/components/Visitor.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./Visitor.scss */ "./src/components/Visitor.scss");
class VisitorWidget extends React.Component {
    render() {
        return (React.createElement("div", { className: 'visitor-widget' },
            React.createElement("div", { className: "title" },
                "Hello, Haran ",
                React.createElement("span", { className: "calendar" })),
            React.createElement("div", { className: "body" },
                React.createElement("p", null, "Your Visitor is Here"),
                React.createElement("p", null, "Kishore Kumar"),
                React.createElement("p", null, "for the 10.00 am meeting"),
                React.createElement("div", { className: "bottom" },
                    React.createElement("div", { className: "heat" }, "37.5 \u2103 "),
                    React.createElement("div", null, "snooze"),
                    React.createElement("div", { className: "conf" }, "acknowledge")),
                React.createElement("p", { className: "small" }, "POWERED BY LUCY"))));
    }
}
exports.default = VisitorWidget;


/***/ }),

/***/ "./src/components/navigation_widgets/CreateRequest.tsx":
/*!*************************************************************!*\
  !*** ./src/components/navigation_widgets/CreateRequest.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const LinkWidgetTemplate_1 = __webpack_require__(/*! ../template/LinkWidgetTemplate */ "./src/components/template/LinkWidgetTemplate.tsx");
function CreateRequest(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(LinkWidgetTemplate_1.default, { linkTitle: 'Create Request', link: "#", imageSrc: "https://static.iviva.com/images/Adani_UXP/create-Request.svg" })));
}
exports.default = CreateRequest;


/***/ }),

/***/ "./src/components/navigation_widgets/MeetingRoom.tsx":
/*!***********************************************************!*\
  !*** ./src/components/navigation_widgets/MeetingRoom.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const LinkWidgetTemplate_1 = __webpack_require__(/*! ../template/LinkWidgetTemplate */ "./src/components/template/LinkWidgetTemplate.tsx");
function MeetingRoom(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(LinkWidgetTemplate_1.default, { linkTitle: 'Meeting Room Booking', link: "#", imageSrc: "https://static.iviva.com/images/Adani_UXP/condeco.png" })));
}
exports.default = MeetingRoom;


/***/ }),

/***/ "./src/components/template/LinkWidgetTemplate.scss":
/*!*********************************************************!*\
  !*** ./src/components/template/LinkWidgetTemplate.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./LinkWidgetTemplate.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/template/LinkWidgetTemplate.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/template/LinkWidgetTemplate.tsx":
/*!********************************************************!*\
  !*** ./src/components/template/LinkWidgetTemplate.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const WidgetTemplate_1 = __webpack_require__(/*! ./WidgetTemplate */ "./src/components/template/WidgetTemplate.tsx");
__webpack_require__(/*! ./LinkWidgetTemplate.scss */ "./src/components/template/LinkWidgetTemplate.scss");
function LinkWidgetTemplate(props) {
    let styles = {};
    if (props.background) {
        styles.background = props.background;
    }
    let content = React.createElement(React.Fragment, null,
        React.createElement("a", { href: props.link, target: "_blank", className: "link-widget" },
            React.createElement("div", { className: `lw-img-container `, style: styles },
                React.createElement("img", { src: props.imageSrc, alt: "link-icon" })),
            React.createElement("p", { className: "lw-title" }, props.linkTitle)));
    return (React.createElement(WidgetTemplate_1.default, { content: content }));
}
exports.default = LinkWidgetTemplate;


/***/ }),

/***/ "./src/components/template/WidgetTemplate.scss":
/*!*****************************************************!*\
  !*** ./src/components/template/WidgetTemplate.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./WidgetTemplate.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/template/WidgetTemplate.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/template/WidgetTemplate.tsx":
/*!****************************************************!*\
  !*** ./src/components/template/WidgetTemplate.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./WidgetTemplate.scss */ "./src/components/template/WidgetTemplate.scss");
function WidgetTemplate(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: `widget-block flex-row-center ${props.classes ? props.classes : ""} ` },
            React.createElement("div", { className: "wb-header " },
                React.createElement("div", { className: "wbh-title" }, props.title),
                React.createElement("div", { className: "whb-toolbar" }, props.toolbarContent !== null ?
                    props.toolbarContent
                    :
                        "")),
            React.createElement("div", { className: "wb-body" }, props.content),
            props.footer !== null ?
                React.createElement("div", { className: "wb-footer" }, props.footer)
                :
                    "")));
}
exports.default = WidgetTemplate;


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./index.scss */ "./src/index.scss");
const Visitor_1 = __webpack_require__(/*! ./components/Visitor */ "./src/components/Visitor.tsx");
const Parking_1 = __webpack_require__(/*! ./components/Parking */ "./src/components/Parking.tsx");
const MeetingRoom_1 = __webpack_require__(/*! ./components/navigation_widgets/MeetingRoom */ "./src/components/navigation_widgets/MeetingRoom.tsx");
const CreateRequest_1 = __webpack_require__(/*! ./components/navigation_widgets/CreateRequest */ "./src/components/navigation_widgets/CreateRequest.tsx");
const LinkWidgetTemplate_1 = __webpack_require__(/*! ./components/template/LinkWidgetTemplate */ "./src/components/template/LinkWidgetTemplate.tsx");
window.registerWidget({ "name": "MeetingRoomBookingWidget", "widget": MeetingRoom_1.default, configs: { layout: { w: 2, h: 6, isResizable: false }, container: { background: "transparent" } } });
window.registerWidget({ "name": "CreateRequestWidget", "widget": CreateRequest_1.default, configs: { layout: { w: 2, h: 6, isResizable: false }, container: { background: "transparent" } } });
// window.registerWidget({ "name": "FacilityBookingWidget", "widget": FacilityBooking, configs: { layout: { w: 2, h: 6, isResizable: false }, container: { background: "transparent" } } });
// window.registerWidget({ "name": "DeskBookingWidget", "widget": DeskBooking, configs: { layout: { w: 2, h: 6, isResizable: false }, container: { background: "transparent" } } });
// window.registerWidget({ "name": "QRWidget", "widget": QRBadge, configs: { layout: { w: 2, h: 6, isResizable: false }, container: { background: "transparent" } } });
// window.registerWidget({ "name": "ReportEmergencyWidget", "widget": ReportEmergency, configs: { layout: { w: 2, h: 6, isResizable: false }, container: { background: "transparent" } } });
// window.registerWidget({ "name": "RegisterVisitorsWidget", "widget": RegisterVisitor, configs: { layout: { w: 2, h: 6, isResizable: false }, container: { background: "transparent" } } });
window.registerWidget({
    "name": "VisitorWidget",
    "widget": Visitor_1.default,
    "configs": {
        "props": [
            { "name": "Name", "type": "string", "required": false }
        ]
    }
});
window.registerWidget({ "name": "ParkingWidget", "widget": Parking_1.default });
// window.registerWidget({ "name": "PersonalConsumptionWidget", "widget": PersonalConsumption });
// window.registerWidget({ "name": "CarbonFootPrintWidget", "widget": CarbonFootPrint });
// window.registerWidget({ "name": "FloorWiseConsumptionWidget", "widget": FloorWiseConsumption });
// window.registerWidget({ "name": "MonthlyConsumptionWidget", "widget": MonthlyConsumption });
window.registerWidget({
    "name": "LinkWidgetTemplate",
    "widget": LinkWidgetTemplate_1.default,
    "configs": {
        "props": [
            { "name": "link", "type": "string", "required": true },
            { "name": "imageSrc", "type": "string", "required": true },
            { "name": "linkTitle", "type": "string", "required": true },
            { "name": "background", "type": "string", "required": false }
        ]
    }
});
class Layout extends React.Component {
    componentWillMount() {
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "content" },
                React.createElement(LinkWidgetTemplate_1.default, { linkTitle: 'Meeting Room Booking', link: "#", imageSrc: "https://static.iviva.com/images/Adani_UXP/condeco.png" }))));
    }
}
// // render dom
// ReactDOM.render(
//     <Layout />,
//     document.getElementById("root")
// );


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map