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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/CarbonFootPrint.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/CarbonFootPrint.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".carbon-widget {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: white;\n  box-sizing: border-box; }\n  .carbon-widget * {\n    font-family: \"AvenirNext\", sans-serif; }\n  .carbon-widget .title {\n    display: flex;\n    width: 100%;\n    height: 10%;\n    justify-content: space-between;\n    align-items: center;\n    box-sizing: border-box;\n    font-size: 20px;\n    color: gray; }\n    .carbon-widget .title div .calendar {\n      background-image: url(https://static.iviva.com/images/Adani_UXP/calendar_min_icon.png);\n      width: 20px;\n      height: 20px;\n      background-size: contain;\n      background-position: center;\n      background-repeat: no-repeat;\n      display: inline-block; }\n    .carbon-widget .title div .button {\n      display: inline-block;\n      font-size: 12px;\n      width: auto;\n      height: auto;\n      padding: 4px 10px;\n      border-radius: 40px;\n      margin: 0 4px;\n      color: black; }\n      .carbon-widget .title div .button.active {\n        background-color: #d4fdc1; }\n  .carbon-widget .body {\n    width: 100%;\n    height: 90%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    padding-top: 25px; }\n    .carbon-widget .body div {\n      width: 100%;\n      display: flex;\n      flex-wrap: nowrap;\n      align-items: center;\n      justify-content: flex-start;\n      margin: 15px 0; }\n      .carbon-widget .body div .stat-tile {\n        width: auto;\n        margin: 0 25px 0 0; }\n        .carbon-widget .body div .stat-tile div {\n          width: auto;\n          display: flex;\n          flex-direction: column;\n          margin: auto 6px; }\n          .carbon-widget .body div .stat-tile div h1,\n          .carbon-widget .body div .stat-tile div p {\n            width: 100%;\n            margin: 4px 0;\n            text-align: left;\n            font-size: 18px;\n            font-weight: normal; }\n          .carbon-widget .body div .stat-tile div p {\n            font-size: 10px; }\n        .carbon-widget .body div .stat-tile .icon {\n          width: 40px;\n          height: 40px;\n          display: inline-block;\n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: contain; }\n          .carbon-widget .body div .stat-tile .icon.energy {\n            background-image: url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"33\" height=\"33\" viewBox=\"0 0 33 33\"%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23535353;%7D.b%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ccircle class=\"a\" cx=\"16.5\" cy=\"16.5\" r=\"16.5\"/%3E%3Cpath class=\"b\" d=\"M7.316,1.928,2.571,8.256H7.316L4.153,14.583,15.226,6.674H8.9l4.746-4.746Z\" transform=\"translate(7.385 8.602)\"/%3E%3C/svg%3E'); }\n          .carbon-widget .body div .stat-tile .icon.cloud {\n            background-image: url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"33\" height=\"33\" viewBox=\"0 0 33 33\"%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23535353;%7D.b%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ccircle class=\"a\" cx=\"16.5\" cy=\"16.5\" r=\"16.5\"/%3E%3Cpath class=\"b\" d=\"M7.608,12.061a3.251,3.251,0,0,1,.734-2.08A3.188,3.188,0,0,1,10.2,8.817a4.046,4.046,0,0,1,6.454-2.311,3.955,3.955,0,0,1,1.428,2.22H18.3A3.258,3.258,0,0,1,20.68,9.7a3.2,3.2,0,0,1,.982,2.352,3.253,3.253,0,0,1-.305,1.4,3.377,3.377,0,0,1-.85,1.131v.025a2.07,2.07,0,0,1-.462,1.312,2.007,2.007,0,0,1-1.155.734,2.574,2.574,0,0,1-2.1,1.964,1.443,1.443,0,0,1-1.081,2.385,1.36,1.36,0,0,1-1.015-.429,1.4,1.4,0,0,1-.421-1.023,1.347,1.347,0,0,1,.083-.47h-.083a1.775,1.775,0,0,1-1.758-1.758,1.6,1.6,0,0,1,.248-.883,2.05,2.05,0,0,1-.924-1.032H10.785V15.4a3.323,3.323,0,0,1-2.253-1.048A3.184,3.184,0,0,1,7.608,12.061Zm1.155-.206a2.367,2.367,0,0,0,2.368,2.377,2.32,2.32,0,0,0,1.131-.281,2.529,2.529,0,0,0,.858,1.535,2.448,2.448,0,0,0,1.667.611,2.5,2.5,0,0,0,1.832-.759,1.591,1.591,0,0,0,1.271.586,1.691,1.691,0,0,0,1.7-1.7,2.374,2.374,0,0,0,.784-.858,2.327,2.327,0,0,0,.289-1.131,2.232,2.232,0,0,0-.7-1.667,2.349,2.349,0,0,0-1.692-.685,2.323,2.323,0,0,0-1.263.363,2.729,2.729,0,0,0,.066-.652,2.743,2.743,0,0,0-.85-2.03,2.931,2.931,0,0,0-4.06-.033,2.724,2.724,0,0,0-.883,1.956h-.14a2.3,2.3,0,0,0-1.675.693A2.276,2.276,0,0,0,8.763,11.854Z\" transform=\"translate(1.332 3.3)\"/%3E%3C/svg%3E'); }\n          .carbon-widget .body div .stat-tile .icon.tree {\n            background-image: url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"33\" height=\"33\" viewBox=\"0 0 33 33\"%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23535353;%7D.b%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ccircle class=\"a\" cx=\"16.5\" cy=\"16.5\" r=\"16.5\"/%3E%3Cpath class=\"b\" d=\"M14.215,4.221a.43.43,0,0,1-.2-.369,4.239,4.239,0,0,0-8.443,0,.432.432,0,0,1-.2.369A4.25,4.25,0,0,0,6.717,11.8a1.159,1.159,0,0,0,.738.039,1.953,1.953,0,0,0,.369-1.433,1.4,1.4,0,0,0-.657-.328A2.506,2.506,0,0,1,5.324,7.664,2.466,2.466,0,0,1,5.98,5.981a2.3,2.3,0,0,1,.614-.49,1.451,1.451,0,0,0,.738-1.272,2.357,2.357,0,0,1,.122-.778,2.5,2.5,0,0,1,4.753,0,2.357,2.357,0,0,1,.122.778,1.365,1.365,0,0,0,.739,1.264,1.722,1.722,0,0,1,.612.487,2.445,2.445,0,0,1,.657,1.682,2.485,2.485,0,0,1-2.5,2.5,2.87,2.87,0,0,0-2.869,2.859v1.633a1.528,1.528,0,0,0,.123.739,1.849,1.849,0,0,0,1.475,0,1.421,1.421,0,0,0,.126-.739V12.973A1.109,1.109,0,0,1,11.8,11.864,4.211,4.211,0,0,0,14.225,4.2l-.01.021Z\" transform=\"translate(7 8.769)\"/%3E%3C/svg%3E'); }\n      .carbon-widget .body div.chart {\n        width: 100%;\n        max-height: 250px; }\n", ""]);
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

/***/ "./src/components/CarbonFootPrint.scss":
/*!*********************************************!*\
  !*** ./src/components/CarbonFootPrint.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./CarbonFootPrint.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/CarbonFootPrint.scss");

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

/***/ "./src/components/CarbonFootPrint.tsx":
/*!********************************************!*\
  !*** ./src/components/CarbonFootPrint.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Recharts = __webpack_require__(/*! recharts */ "recharts");
// import * as Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
__webpack_require__(/*! ./CarbonFootPrint.scss */ "./src/components/CarbonFootPrint.scss");
class CarbonFootPrint extends React.Component {
    render() {
        const data = [
            {
                name: '2017', uv: 10
            },
            {
                name: '2018', uv: 12
            },
            {
                name: '2019', uv: 9
            },
            {
                name: '2020', uv: 11
            }
        ];
        // const options: Highcharts.Options = {
        //     chart: {
        //         type: 'area'
        //     },
        //     title: {
        //         text: ''
        //     },
        //     xAxis: {
        //         allowDecimals: false,
        //         labels: {
        //             formatter: function () {
        //                 return this.value.toString(); // clean, unformatted number for year
        //             }
        //         },
        //         accessibility: {
        //             rangeDescription: 'Range: 2017 to 2020.'
        //         }
        //     },
        //     yAxis: {
        //         title: {
        //             text: 'Values'
        //         },
        //         labels: {
        //             formatter: function () {
        //                 return this.value.toString();
        //             }
        //         },
        //         min: 0,
        //         max: 20,
        //     },
        //     tooltip: {
        //         pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        //     },
        //     plotOptions: {
        //         area: {
        //             pointStart: 2016,
        //             marker: {
        //                 enabled: false,
        //                 symbol: 'circle',
        //                 radius: 2,
        //                 states: {
        //                     hover: {
        //                         enabled: true
        //                     }
        //                 }
        //             }
        //         }
        //     },
        //     series: [{
        //         type: 'area',
        //         data: [
        //             null, 10, 13, 9, 11, null
        //         ]
        //     }]
        // }
        // const chartProps = HighchartsReact.defaultProps;
        return (React.createElement("div", { className: 'carbon-widget' },
            React.createElement("div", { className: "title" },
                React.createElement("div", null,
                    React.createElement("span", { className: "calendar" }),
                    " Carbon FootPrint"),
                React.createElement("div", null,
                    React.createElement("span", { className: 'button active' }, "Daily"),
                    React.createElement("span", { className: "button" }, "Week"),
                    React.createElement("span", { className: "button" }, "Monthly"))),
            React.createElement("div", { className: "body" },
                React.createElement("div", { className: "stat" },
                    React.createElement("div", { className: "stat-tile" },
                        React.createElement("div", { className: "icon energy" }),
                        React.createElement("div", null,
                            React.createElement("h1", null, "10 kWh "),
                            React.createElement("p", null, "Power Consumed"))),
                    React.createElement("div", { className: "stat-tile" },
                        React.createElement("div", { className: "icon cloud" }),
                        React.createElement("div", null,
                            React.createElement("h1", null, "11 tonnes "),
                            React.createElement("p", null, "CO2 Emitted"))),
                    React.createElement("div", { className: "stat-tile" },
                        React.createElement("div", { className: "icon tree" }),
                        React.createElement("div", null,
                            React.createElement("h1", null, "514 Trees "),
                            React.createElement("p", null, "Trees to offset CO2")))),
                React.createElement("div", { className: "chart" },
                    React.createElement(Recharts.ResponsiveContainer, null,
                        React.createElement(Recharts.AreaChart, { data: data, margin: {
                                top: 10, right: 30, left: 0, bottom: 0,
                            } },
                            React.createElement(Recharts.CartesianGrid, { strokeDasharray: "3 3" }),
                            React.createElement(Recharts.XAxis, { dataKey: "name" }),
                            React.createElement(Recharts.YAxis, null),
                            React.createElement(Recharts.Tooltip, null),
                            React.createElement(Recharts.Area, { type: "monotone", dataKey: "uv", stroke: "#8884d8", fill: "#8884d8" })))))));
    }
}
exports.default = CarbonFootPrint;


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
const CarbonFootPrint_1 = __webpack_require__(/*! ./components/CarbonFootPrint */ "./src/components/CarbonFootPrint.tsx");
window.registerWidget({ "name": "CarbonFootPrintWidget", "widget": CarbonFootPrint_1.default });
class Layout extends React.Component {
    componentWillMount() {
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "content" })));
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

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "Recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Recharts;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map