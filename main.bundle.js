(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100vh;
}
body {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 5fr;
}
.game-title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
}
.main-game-area {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.main-game-area > div {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.player1-grid-container,
.player2-grid-container {
  border: solid black;
  height: 25em;
  width: 25em;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
.grid-cell {
  height: 2.46rem;
  width: 2.46rem;
  border: 1px solid black;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid-cell:hover {
  background-color: rgba(255, 2, 2, 0.822);
}
.player1-grid-area,
.player2-grid-area {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.ships-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.ships-container {
  min-width: 200px;
  width: 80%;
  height: 40%;
  border: solid black;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
}
.ships-container > .ship {
  height: 2.46rem;
}
.ship:hover {
  cursor: pointer;
  background-color: aqua;
}
.carrier > *,
.battleship > *,
.destroyer > *,
.submarine > *,
.patrol > * {
  flex: 1;
  border: 2px solid black;
}
.carrier {
  display: flex;
  width: 12.3rem;
}
.battleship {
  display: flex;
  width: 9.84rem;
}
.destroyer {
  display: flex;
  width: 7.38rem;
}
.submarine {
  display: flex;
  width: 7.38rem;
}
.patrol {
  display: flex;
  width: 4.92rem;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;AACA;EACE,YAAY;EACZ,aAAa;EACb,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,qCAAqC;AACvC;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;;EAEE,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,eAAe;EACf,uBAAuB;AACzB;AACA;EACE,eAAe;EACf,cAAc;EACd,uBAAuB;EACvB,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,wCAAwC;AAC1C;AACA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,gBAAgB;EAChB,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,kCAAkC;AACpC;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,sBAAsB;AACxB;AACA;;;;;EAKE,OAAO;EACP,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,cAAc;AAChB;AACA;EACE,aAAa;EACb,cAAc;AAChB;AACA;EACE,aAAa;EACb,cAAc;AAChB;AACA;EACE,aAAa;EACb,cAAc;AAChB;AACA;EACE,aAAa;EACb,cAAc;AAChB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100vh;\n}\nbody {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 1fr 5fr;\n}\n.game-title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 100px;\n}\n.main-game-area {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.main-game-area > div {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n}\n.player1-grid-container,\n.player2-grid-container {\n  border: solid black;\n  height: 25em;\n  width: 25em;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n.grid-cell {\n  height: 2.46rem;\n  width: 2.46rem;\n  border: 1px solid black;\n  font-weight: 900;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.grid-cell:hover {\n  background-color: rgba(255, 2, 2, 0.822);\n}\n.player1-grid-area,\n.player2-grid-area {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.ships-area {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.ships-container {\n  min-width: 200px;\n  width: 80%;\n  height: 40%;\n  border: solid black;\n  display: grid;\n  grid-template-rows: repeat(5, 1fr);\n}\n.ships-container > .ship {\n  height: 2.46rem;\n}\n.ship:hover {\n  cursor: pointer;\n  background-color: aqua;\n}\n.carrier > *,\n.battleship > *,\n.destroyer > *,\n.submarine > *,\n.patrol > * {\n  flex: 1;\n  border: 2px solid black;\n}\n.carrier {\n  display: flex;\n  width: 12.3rem;\n}\n.battleship {\n  display: flex;\n  width: 9.84rem;\n}\n.destroyer {\n  display: flex;\n  width: 7.38rem;\n}\n.submarine {\n  display: flex;\n  width: 7.38rem;\n}\n.patrol {\n  display: flex;\n  width: 4.92rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Gameboard/gameboard.js":
/*!************************************!*\
  !*** ./src/Gameboard/gameboard.js ***!
  \************************************/
/***/ ((module) => {

class Gameboard {
  #totalShips;
  #totalSunkShips;
  #loser;
  constructor() {
    this.gameBoard = [
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}], 
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}], 
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}], 
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}], 
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}], 
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}], 
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}], 
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}], 
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}], 
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}]
    ];
    this.#totalShips = 0;
    this.#totalSunkShips = 0;
    
    
  }
 
  #addToTotalShips(){
    this.#totalShips+= 1
  }
  #sunkShipsObserver = {subs:[this.checkIfGameIsOver.bind(this)],
    
    addSubs(sub){
      this.subs.push(sub)
    },
    notify(){
      this.subs.forEach((sub)=>sub())
    },
  }
 
   #notOnTheBoard(element){
    if(element > 10 || element< 0){
      return true;
    }
  }
  placeShip(ship, start, end){
    
    if(start.some(this.#notOnTheBoard)||end.some(this.#notOnTheBoard)){
      throw new Error("Ship must be on the board")
    }
    let checkIfAllAreVacant = (start,end)=>{
      let greaterNum;
      let smallerNum;
      let sameNum;
      let samePosition=""
      /* Finds all cells between start coordinate and end coordinate and throws an error if any of them are not vacant. AKA
      user is trying to place a ship where there already is a ship*/
      if(start[0]!==end[0]){
        if(start[0]>end[0]){
          greaterNum = start[0]
          smallerNum = end[0];
          sameNum = start[1]
          samePosition = "V"
        }else{
          greaterNum = end[0]
          smallerNum = start[0]
          sameNum = start[1]
          samePosition = "V"
        }
      }else{
        if(start[1]>end[1]){
          greaterNum = start[1]
          smallerNum = end[1];
          sameNum = start[0]
          samePosition = "H"
        }else{
          greaterNum = end[1]
          smallerNum = start[1]
          sameNum = start[0]
          samePosition = "H"
        }
      }
      for(let i = smallerNum; i <= greaterNum; i++){
       if(samePosition == "H"){
        if(this.gameBoard[sameNum][i].ship !== null){
          throw new Error("All target cells must be vacant in order to place the ship")
        }
       }else{
        if(this.gameBoard[i][sameNum].ship !== null){
          throw new Error("All target cells must be vacant in order to place the ship")
        }
       }
      }
      return {greaterNum,smallerNum,sameNum,samePosition}

    }

    if(start[0]==end[0]||start[1]==end[1]){
    let checkResult = checkIfAllAreVacant(start,end);
    for(let i = checkResult.smallerNum;i <= checkResult.greaterNum; i++ ){
      if(checkResult.samePosition == "H"){
        this.gameBoard[checkResult.sameNum][i].ship = ship;
        
     
      }else{
        this.gameBoard[i][checkResult.sameNum].ship = ship;
     
      }
    }
    }else{
      throw new Error("You can only place ships vertically or horizontally")
    }
    this.#addToTotalShips()
  }
  placeAttack(coordinates){
    let attackStatus;
    if(coordinates.some(this.#notOnTheBoard)){
      throw new Error("Coordinates must be on the gameboard")
    }
    if(this.gameBoard[coordinates[0]][coordinates[1]].hit === true || this.gameBoard[coordinates[0]][coordinates[1]].miss === true){
      throw new Error("You can't attack the same cell twice")
    }else if(this.gameBoard[coordinates[0]][coordinates[1]].ship === null){
      this.gameBoard[coordinates[0]][coordinates[1]].miss = true;
      attackStatus = "miss";
    }else{
      this.gameBoard[coordinates[0]][coordinates[1]].hit = true;
      this.gameBoard[coordinates[0]][coordinates[1]].ship.hit()
      attackStatus = "hit";

       if(this.gameBoard[coordinates[0]][coordinates[1]].ship.isSunk()){
        attackStatus = this.checkIfGameIsOver();
           
          
      } 
      
    }
    return attackStatus
  }
  checkIfGameIsOver(){
   this.#totalSunkShips = this.#totalSunkShips + 1;
    if(this.#totalShips == this.#totalSunkShips){
      return "all sunk"
    }  else{
      return "one sunk"
    }
  }

}

module.exports = Gameboard;


/***/ }),

/***/ "./src/Player/players.js":
/*!*******************************!*\
  !*** ./src/Player/players.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Gameboard = __webpack_require__(/*! ../Gameboard/gameboard.js */ "./src/Gameboard/gameboard.js");
let Ship = __webpack_require__(/*! ../Ship/ships.js */ "./src/Ship/ships.js");
class Player {
  constructor(name) {
    this.name = name;
    this.board = new Gameboard();
    this.patrol = new Ship(2);
    this.submarine = new Ship(3);
    this.destroyer = new Ship(3);
    this.battleship = new Ship(4);
    this.carrier = new Ship(5);
  }
}
module.exports = Player;


/***/ }),

/***/ "./src/Ship/ships.js":
/*!***************************!*\
  !*** ./src/Ship/ships.js ***!
  \***************************/
/***/ ((module) => {

class Ship {
  constructor(length) {
    this.length = length;
    this.hitCount = 0;
    this.sunk = false;
  }
  hit() {
    this.hitCount += 1;
  }
  isSunk() {
    if (this.length === this.hitCount) {
      this.sunk = true;
      return this.sunk;
    }
  }
}

module.exports = Ship;


/***/ }),

/***/ "./src/gameController/gameController.js":
/*!**********************************************!*\
  !*** ./src/gameController/gameController.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Player = __webpack_require__(/*! ../Player/players.js */ "./src/Player/players.js");
let player1 = new Player("player1");
let player2 = new Player("player2");

class GameController {
  #activePlayer;
  #gameStage = "beg";
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.#activePlayer = this.player1;
    this.player1PlacedShips = [];
    this.player2PlacedShips = [];
  }

  getActivePlayer() {
    return this.#activePlayer;
  }
  switchActivePlayer() {
    if (this.#activePlayer === this.player1) {
      this.#activePlayer = this.player2;
    } else {
      this.#activePlayer = this.player1;
    }
  }
  getOtherPlayer() {
    if (this.#activePlayer == this.player1) {
      return this.player2;
    } else {
      return this.player1;
    }
  }
  placeShips(ship, start) {
    let end = [+start[0], +start[1] + this.#activePlayer[ship].length - 1];
    this.#activePlayer.board.placeShip(this.#activePlayer[ship], start, end);
  }

  placeAttack(row, col) {
    let attackStatus = this.getOtherPlayer().board.placeAttack([row, col]);

    return attackStatus;
  }
  getGameStage() {
    return this.#gameStage;
  }

  switchGameStage() {
    if (this.#gameStage == "beg") {
      this.#gameStage = "mid";
    } else {
      this.#gameStage = "beg";
    }
  }
}
let game = new GameController(player1, player2);
module.exports = { game, player1, player2 };


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");

let screenController = __webpack_require__(/*! ./updateDOM/updateDOM.js */ "./src/updateDOM/updateDOM.js");
let { game, player1, player2 } = __webpack_require__(/*! ./gameController/gameController.js */ "./src/gameController/gameController.js");
let player2Grid = document.querySelector(".player2-grid-container");
let player1Ships = document.querySelector(".player1.ships-container");
let player2Ships = document.querySelector(".player2.ships-container");
let player1Grid = document.querySelector(".player1-grid-container");
screenController.createGridCells();

/* Placing ships stage */
player1Ships.addEventListener("click", (event) => {
  if (game.getGameStage() == "beg" && game.getActivePlayer() === player1) {
    let selectedShipEventTarget = event.target.parentElement.classList[1];
    let player1ShipContainer = document.querySelector(
      ".player1.ships-container"
    );
    player1ShipContainer.setAttribute(
      "data-selectedShip",
      selectedShipEventTarget
    );
  } else {
    event.preventDefault();
  }
});

player1Grid.addEventListener("click", (event) => {
  if (game.getGameStage() == "beg" && game.getActivePlayer() === player1) {
    let rowCoord = event.target.dataset.row;
    let colCoord = event.target.dataset.col;
    let player1ShipContainer = document.querySelector(
      ".player1.ships-container"
    );
    let selectedShip = player1ShipContainer.dataset.selectedship;

    game.placeShips(selectedShip, [+rowCoord, +colCoord]);
    screenController.placeShipsDOM(
      event.target,
      player1[selectedShip].length,
      "player1"
    );
    let shipDOM = document.querySelector(`.player1 .${selectedShip}`);
    shipDOM.remove();

    player1ShipContainer.dataset.selectedship = "";

    if (!player1ShipContainer.firstElementChild) {
      let player1GridClass = ".player1";

      game.switchActivePlayer();
      screenController.hideBoard(player1GridClass);
      screenController.displayActivePlayer(game.getActivePlayer().name);
    }
    event.stopImmediatePropagation();
  } else {
    event.preventDefault();
  }
});

player2Ships.addEventListener("click", (event) => {
  if (game.getGameStage() == "beg" && game.getActivePlayer() === player2) {
    let selectedShipEventTarget = event.target.parentElement.classList[1];
    let player2ShipContainer = document.querySelector(
      ".player2.ships-container"
    );
    player2ShipContainer.setAttribute(
      "data-selectedShip",
      selectedShipEventTarget
    );
  } else {
    event.preventDefault();
  }
});

player2Grid.addEventListener("click", (event) => {
  if (game.getGameStage() == "beg" && game.getActivePlayer() === player2) {
    let rowCoord = event.target.dataset.row;
    let colCoord = event.target.dataset.col;
    let player2ShipContainer = document.querySelector(
      ".player2.ships-container"
    );
    let selectedShip = player2ShipContainer.dataset.selectedship;

    game.placeShips(selectedShip, [+rowCoord, +colCoord]);
    screenController.placeShipsDOM(
      event.target,
      player2[selectedShip].length,
      "player2"
    );
    let shipDOM = document.querySelector(`.player2 .${selectedShip}`);
    shipDOM.remove();
    player2ShipContainer.dataset.selectedship = "";
    if (!player2ShipContainer.firstElementChild) {
      let player2GridClass = ".player2";

      game.switchActivePlayer();
      screenController.hideBoard(player2GridClass);
      game.switchGameStage();
      screenController.displayActivePlayer(game.getActivePlayer().name);
      event.stopImmediatePropagation();
    }
  } else {
    event.preventDefault();
  }
});
/* Attacking ships stage */
player2Grid.addEventListener("click", (event) => {
  let player2Grid = document.querySelector(".player2-grid-container");
  if (
    game.getGameStage() == "mid" &&
    game.getActivePlayer() === player1 &&
    event.target.parentElement == player2Grid
  ) {
    let rowCoord = event.target.dataset.row;
    let colCoord = event.target.dataset.col;
    let status = game.placeAttack(+rowCoord, +colCoord);
    screenController.placeAttacksDOM(status, event.target);
    if (status === "all sunk") {
      screenController.displayWinner(game.getActivePlayer().name);
      let player2GridClass = ".player2";
      let player1GridClass = ".player1";
      screenController.revealBoard(
        player2GridClass,
        game.getOtherPlayer().board.gameBoard
      );
      screenController.revealBoard(
        player1GridClass,
        game.getActivePlayer().board.gameBoard
      );
      return;
    }

    game.switchActivePlayer();
    screenController.displayActivePlayer(game.getActivePlayer().name);
  }
});
player1Grid.addEventListener("click", (event) => {
  let player1Grid = document.querySelector(".player1-grid-container");
  if (
    game.getGameStage() == "mid" &&
    game.getActivePlayer() === player2 &&
    event.target.parentElement == player1Grid
  ) {
    let rowCoord = event.target.dataset.row;
    let colCoord = event.target.dataset.col;
    let status = game.placeAttack(+rowCoord, +colCoord);
    screenController.placeAttacksDOM(status, event.target);
    if (status === "all sunk") {
      screenController.displayWinner(game.getActivePlayer().name);
      let player2GridClass = ".player2";
      let player1GridClass = ".player1";
      screenController.revealBoard(
        player1GridClass,
        game.getOtherPlayer().board.gameBoard
      );
      screenController.revealBoard(
        player2GridClass,
        game.getActivePlayer().board.gameBoard
      );
      return;
    }

    game.switchActivePlayer();

    screenController.displayActivePlayer(game.getActivePlayer().name);
  }
});


/***/ }),

/***/ "./src/updateDOM/updateDOM.js":
/*!************************************!*\
  !*** ./src/updateDOM/updateDOM.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

class UIController {
  placeAttacksDOM(attackStatus, target) {
    const missIcon = document.createElement("p");
    missIcon.textContent = "*";
    const hitIcon = document.createElement("p");
    hitIcon.textContent = "X";
    let colorRed = "rgb(235, 45, 45)";
    if (attackStatus == "miss") {
      target.appendChild(missIcon);
    } else if (attackStatus == "hit") {
      target.appendChild(hitIcon);
      target.style.backgroundColor = colorRed;
    } else if (attackStatus == "one sunk") {
      target.appendChild(hitIcon);
      target.style.backgroundColor = colorRed;

      let audioElement = document.createElement("audio");
      audioElement.setAttribute("autoplay", "");
      let audioSource = document.createElement("source");
      audioSource.setAttribute("src", `${__webpack_require__(/*! ../Assets/fart.mp3 */ "./src/Assets/fart.mp3")}`);
      audioSource.setAttribute("type", "audio/mpeg");
      audioElement.appendChild(audioSource);
      audioElement.style.display = "hidden";
      target.appendChild(audioElement);
    } else {
      target.appendChild(hitIcon);
      target.style.backgroundColor = colorRed;

      let audioElement = document.createElement("audio");
      audioElement.setAttribute("autoplay", "");
      let audioSource = document.createElement("source");
      audioSource.setAttribute("src", `${__webpack_require__(/*! ../Assets/battleshit.mp3 */ "./src/Assets/battleshit.mp3")}`);
      audioSource.setAttribute("type", "audio/mpeg");
      audioElement.appendChild(audioSource);
      audioElement.style.display = "hidden";
      target.appendChild(audioElement);
    }
  }

  createGridCells() {
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        let gridCellplayer1 = document.createElement("div");
        gridCellplayer1.classList.add("grid-cell");
        gridCellplayer1.setAttribute("data-row", row);
        gridCellplayer1.setAttribute("data-col", col);
        let gridCellplayer2 = document.createElement("div");
        gridCellplayer2.classList.add("grid-cell");
        gridCellplayer2.setAttribute("data-row", row);
        gridCellplayer2.setAttribute("data-col", col);
        let player1Grid = document.querySelector(".player1-grid-container");
        let player2Grid = document.querySelector(".player2-grid-container");

        player1Grid.appendChild(gridCellplayer1);
        player2Grid.appendChild(gridCellplayer2);
      }
    }
  }
  placeShipsDOM(eventTarget, shipLength, player1) {
    if (player1 == "player1") {
      for (let i = 0; i < shipLength; i++) {
        let element = document.querySelector(
          `.player1-grid-container > [data-row = '${
            eventTarget.dataset.row
          }'][data-col = '${+eventTarget.dataset.col + i}']`
        );

        element.style.backgroundColor = "rgb(45, 203, 235)";
      }
    } else {
      for (let i = 0; i < shipLength; i++) {
        let element = document.querySelector(
          `.player2-grid-container > [data-row = '${
            eventTarget.dataset.row
          }'][data-col = '${+eventTarget.dataset.col + i}']`
        );

        element.style.backgroundColor = "rgb(45, 203, 235)";
      }
    }
  }
  displayActivePlayer(player1) {
    let gameHeader = document.querySelector(".game-title");
    gameHeader.textContent = `it is ${player1}'s turn `;
  }
  displayWinner(player1) {
    let gameHeader = document.querySelector(".game-title");
    gameHeader.textContent = `${player1}'s the winner! `;
  }
  hideBoard(boardToHideClass) {
    let boardToHideDOM = document.querySelector(
      `${boardToHideClass}-grid-container`
    );

    for (let element of boardToHideDOM.children) {
      while (element.firstElementChild) {
        element.removeChild(element.firstElementChild);
      }
      element.style.backgroundColor = "";
    }
  }
  revealBoard(boardToShowClass, boardToShow) {
    const missIcon = document.createElement("p");
    missIcon.textContent = "*";
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        if (boardToShow[row][col].ship == null) {
          continue;
        } else if (
          boardToShow[row][col].ship !== null &&
          boardToShow[row][col].hit == false
        ) {
          let gridCell = document.querySelector(
            `${boardToShowClass}-grid-container [data-row = '${row}'][data-col = '${col}']`
          );
          gridCell.style.backgroundColor = "rgb(45, 203, 235)";

          gridCell.appendChild(missIcon);
        } else if (
          boardToShow[row][col].ship !== null &&
          boardToShow[row][col].hit == true
        ) {
          let gridCell = document.querySelector(
            `${boardToShowClass}-grid-container [data-row = '${row}'][data-col = '${col}']`
          );
          gridCell.style.backgroundColor = "rgb(235, 45, 45)";
        }
      }
    }
  }
}
let screenController = new UIController();
module.exports = screenController;
/* module.exports = placeAttacksDOM; */


/***/ }),

/***/ "./src/Assets/battleshit.mp3":
/*!***********************************!*\
  !*** ./src/Assets/battleshit.mp3 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ba61ccf8d2afd4ddb090.mp3";

/***/ }),

/***/ "./src/Assets/fart.mp3":
/*!*****************************!*\
  !*** ./src/Assets/fart.mp3 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b50e28836b65948baa9f.mp3";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUM7QUFDM1gsVUFBVSxvQ0FBb0MsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUM7QUFDM1gsVUFBVSxvQ0FBb0MsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUM7QUFDM1gsVUFBVSxvQ0FBb0MsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUM7QUFDM1gsVUFBVSxvQ0FBb0MsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUM7QUFDM1gsVUFBVSxvQ0FBb0MsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUM7QUFDM1gsVUFBVSxvQ0FBb0MsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUM7QUFDM1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFD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QTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsUUFBUTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxTQUFTLGlCQUFpQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixVQUFVO0FBQ2hDLHdCQUF3QixVQUFVO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQiwrQkFBK0IsSUFBSSxpQkFBaUIsSUFBSTtBQUN4RjtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUIsK0JBQStCLElBQUksaUJBQWlCLElBQUk7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1BsYXllci9wbGF5ZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvU2hpcC9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVDb250cm9sbGVyL2dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91cGRhdGVET00vdXBkYXRlRE9NLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcbn1cbi5nYW1lLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG59XG4ubWFpbi1nYW1lLWFyZWEge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xufVxuLm1haW4tZ2FtZS1hcmVhID4gZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xufVxuLnBsYXllcjEtZ3JpZC1jb250YWluZXIsXG4ucGxheWVyMi1ncmlkLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogc29saWQgYmxhY2s7XG4gIGhlaWdodDogMjVlbTtcbiAgd2lkdGg6IDI1ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uZ3JpZC1jZWxsIHtcbiAgaGVpZ2h0OiAyLjQ2cmVtO1xuICB3aWR0aDogMi40NnJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmdyaWQtY2VsbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyLCAyLCAwLjgyMik7XG59XG4ucGxheWVyMS1ncmlkLWFyZWEsXG4ucGxheWVyMi1ncmlkLWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zaGlwcy1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2hpcHMtY29udGFpbmVyIHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIGJvcmRlcjogc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XG59XG4uc2hpcHMtY29udGFpbmVyID4gLnNoaXAge1xuICBoZWlnaHQ6IDIuNDZyZW07XG59XG4uc2hpcDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cbi5jYXJyaWVyID4gKixcbi5iYXR0bGVzaGlwID4gKixcbi5kZXN0cm95ZXIgPiAqLFxuLnN1Ym1hcmluZSA+ICosXG4ucGF0cm9sID4gKiB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuLmNhcnJpZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTIuM3JlbTtcbn1cbi5iYXR0bGVzaGlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDkuODRyZW07XG59XG4uZGVzdHJveWVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDcuMzhyZW07XG59XG4uc3VibWFyaW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDcuMzhyZW07XG59XG4ucGF0cm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDQuOTJyZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTs7RUFFRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUN4QjtBQUNBOzs7OztFQUtFLE9BQU87RUFDUCx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXG59XFxuLmdhbWUtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTAwcHg7XFxufVxcbi5tYWluLWdhbWUtYXJlYSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuLm1haW4tZ2FtZS1hcmVhID4gZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxufVxcbi5wbGF5ZXIxLWdyaWQtY29udGFpbmVyLFxcbi5wbGF5ZXIyLWdyaWQtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDI1ZW07XFxuICB3aWR0aDogMjVlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLmdyaWQtY2VsbCB7XFxuICBoZWlnaHQ6IDIuNDZyZW07XFxuICB3aWR0aDogMi40NnJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ncmlkLWNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIsIDIsIDAuODIyKTtcXG59XFxuLnBsYXllcjEtZ3JpZC1hcmVhLFxcbi5wbGF5ZXIyLWdyaWQtYXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnNoaXBzLWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnNoaXBzLWNvbnRhaW5lciB7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogNDAlO1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG4uc2hpcHMtY29udGFpbmVyID4gLnNoaXAge1xcbiAgaGVpZ2h0OiAyLjQ2cmVtO1xcbn1cXG4uc2hpcDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG4uY2FycmllciA+ICosXFxuLmJhdHRsZXNoaXAgPiAqLFxcbi5kZXN0cm95ZXIgPiAqLFxcbi5zdWJtYXJpbmUgPiAqLFxcbi5wYXRyb2wgPiAqIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuLmNhcnJpZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMi4zcmVtO1xcbn1cXG4uYmF0dGxlc2hpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDkuODRyZW07XFxufVxcbi5kZXN0cm95ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA3LjM4cmVtO1xcbn1cXG4uc3VibWFyaW5lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNy4zOHJlbTtcXG59XFxuLnBhdHJvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDQuOTJyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBHYW1lYm9hcmQge1xuICAjdG90YWxTaGlwcztcbiAgI3RvdGFsU3Vua1NoaXBzO1xuICAjbG9zZXI7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2FtZUJvYXJkID0gW1xuICAgICAgICBbe3NoaXA6IG51bGwsIG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfV0sIFxuICAgICAgICBbe3NoaXA6IG51bGwsIG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfV0sIFxuICAgICAgICBbe3NoaXA6IG51bGwsIG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfV0sIFxuICAgICAgICBbe3NoaXA6IG51bGwsIG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfV0sIFxuICAgICAgICBbe3NoaXA6IG51bGwsIG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfV0sIFxuICAgICAgICBbe3NoaXA6IG51bGwsIG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfV0sIFxuICAgICAgICBbe3NoaXA6IG51bGwsIG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfV0sIFxuICAgICAgICBbe3NoaXA6IG51bGwsIG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfV0sIFxuICAgICAgICBbe3NoaXA6IG51bGwsIG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfV0sIFxuICAgICAgICBbe3NoaXA6IG51bGwsIG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfSx7c2hpcDogbnVsbCxtaXNzOiBmYWxzZSwgaGl0OiBmYWxzZX0se3NoaXA6IG51bGwsbWlzczogZmFsc2UsIGhpdDogZmFsc2V9LHtzaGlwOiBudWxsLG1pc3M6IGZhbHNlLCBoaXQ6IGZhbHNlfV1cbiAgICBdO1xuICAgIHRoaXMuI3RvdGFsU2hpcHMgPSAwO1xuICAgIHRoaXMuI3RvdGFsU3Vua1NoaXBzID0gMDtcbiAgICBcbiAgICBcbiAgfVxuIFxuICAjYWRkVG9Ub3RhbFNoaXBzKCl7XG4gICAgdGhpcy4jdG90YWxTaGlwcys9IDFcbiAgfVxuICAjc3Vua1NoaXBzT2JzZXJ2ZXIgPSB7c3ViczpbdGhpcy5jaGVja0lmR2FtZUlzT3Zlci5iaW5kKHRoaXMpXSxcbiAgICBcbiAgICBhZGRTdWJzKHN1Yil7XG4gICAgICB0aGlzLnN1YnMucHVzaChzdWIpXG4gICAgfSxcbiAgICBub3RpZnkoKXtcbiAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKChzdWIpPT5zdWIoKSlcbiAgICB9LFxuICB9XG4gXG4gICAjbm90T25UaGVCb2FyZChlbGVtZW50KXtcbiAgICBpZihlbGVtZW50ID4gMTAgfHwgZWxlbWVudDwgMCl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcGxhY2VTaGlwKHNoaXAsIHN0YXJ0LCBlbmQpe1xuICAgIFxuICAgIGlmKHN0YXJ0LnNvbWUodGhpcy4jbm90T25UaGVCb2FyZCl8fGVuZC5zb21lKHRoaXMuI25vdE9uVGhlQm9hcmQpKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlNoaXAgbXVzdCBiZSBvbiB0aGUgYm9hcmRcIilcbiAgICB9XG4gICAgbGV0IGNoZWNrSWZBbGxBcmVWYWNhbnQgPSAoc3RhcnQsZW5kKT0+e1xuICAgICAgbGV0IGdyZWF0ZXJOdW07XG4gICAgICBsZXQgc21hbGxlck51bTtcbiAgICAgIGxldCBzYW1lTnVtO1xuICAgICAgbGV0IHNhbWVQb3NpdGlvbj1cIlwiXG4gICAgICAvKiBGaW5kcyBhbGwgY2VsbHMgYmV0d2VlbiBzdGFydCBjb29yZGluYXRlIGFuZCBlbmQgY29vcmRpbmF0ZSBhbmQgdGhyb3dzIGFuIGVycm9yIGlmIGFueSBvZiB0aGVtIGFyZSBub3QgdmFjYW50LiBBS0FcbiAgICAgIHVzZXIgaXMgdHJ5aW5nIHRvIHBsYWNlIGEgc2hpcCB3aGVyZSB0aGVyZSBhbHJlYWR5IGlzIGEgc2hpcCovXG4gICAgICBpZihzdGFydFswXSE9PWVuZFswXSl7XG4gICAgICAgIGlmKHN0YXJ0WzBdPmVuZFswXSl7XG4gICAgICAgICAgZ3JlYXRlck51bSA9IHN0YXJ0WzBdXG4gICAgICAgICAgc21hbGxlck51bSA9IGVuZFswXTtcbiAgICAgICAgICBzYW1lTnVtID0gc3RhcnRbMV1cbiAgICAgICAgICBzYW1lUG9zaXRpb24gPSBcIlZcIlxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBncmVhdGVyTnVtID0gZW5kWzBdXG4gICAgICAgICAgc21hbGxlck51bSA9IHN0YXJ0WzBdXG4gICAgICAgICAgc2FtZU51bSA9IHN0YXJ0WzFdXG4gICAgICAgICAgc2FtZVBvc2l0aW9uID0gXCJWXCJcbiAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKHN0YXJ0WzFdPmVuZFsxXSl7XG4gICAgICAgICAgZ3JlYXRlck51bSA9IHN0YXJ0WzFdXG4gICAgICAgICAgc21hbGxlck51bSA9IGVuZFsxXTtcbiAgICAgICAgICBzYW1lTnVtID0gc3RhcnRbMF1cbiAgICAgICAgICBzYW1lUG9zaXRpb24gPSBcIkhcIlxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBncmVhdGVyTnVtID0gZW5kWzFdXG4gICAgICAgICAgc21hbGxlck51bSA9IHN0YXJ0WzFdXG4gICAgICAgICAgc2FtZU51bSA9IHN0YXJ0WzBdXG4gICAgICAgICAgc2FtZVBvc2l0aW9uID0gXCJIXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yKGxldCBpID0gc21hbGxlck51bTsgaSA8PSBncmVhdGVyTnVtOyBpKyspe1xuICAgICAgIGlmKHNhbWVQb3NpdGlvbiA9PSBcIkhcIil7XG4gICAgICAgIGlmKHRoaXMuZ2FtZUJvYXJkW3NhbWVOdW1dW2ldLnNoaXAgIT09IG51bGwpe1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFsbCB0YXJnZXQgY2VsbHMgbXVzdCBiZSB2YWNhbnQgaW4gb3JkZXIgdG8gcGxhY2UgdGhlIHNoaXBcIilcbiAgICAgICAgfVxuICAgICAgIH1lbHNle1xuICAgICAgICBpZih0aGlzLmdhbWVCb2FyZFtpXVtzYW1lTnVtXS5zaGlwICE9PSBudWxsKXtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbGwgdGFyZ2V0IGNlbGxzIG11c3QgYmUgdmFjYW50IGluIG9yZGVyIHRvIHBsYWNlIHRoZSBzaGlwXCIpXG4gICAgICAgIH1cbiAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge2dyZWF0ZXJOdW0sc21hbGxlck51bSxzYW1lTnVtLHNhbWVQb3NpdGlvbn1cblxuICAgIH1cblxuICAgIGlmKHN0YXJ0WzBdPT1lbmRbMF18fHN0YXJ0WzFdPT1lbmRbMV0pe1xuICAgIGxldCBjaGVja1Jlc3VsdCA9IGNoZWNrSWZBbGxBcmVWYWNhbnQoc3RhcnQsZW5kKTtcbiAgICBmb3IobGV0IGkgPSBjaGVja1Jlc3VsdC5zbWFsbGVyTnVtO2kgPD0gY2hlY2tSZXN1bHQuZ3JlYXRlck51bTsgaSsrICl7XG4gICAgICBpZihjaGVja1Jlc3VsdC5zYW1lUG9zaXRpb24gPT0gXCJIXCIpe1xuICAgICAgICB0aGlzLmdhbWVCb2FyZFtjaGVja1Jlc3VsdC5zYW1lTnVtXVtpXS5zaGlwID0gc2hpcDtcbiAgICAgICAgXG4gICAgIFxuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkW2ldW2NoZWNrUmVzdWx0LnNhbWVOdW1dLnNoaXAgPSBzaGlwO1xuICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgfWVsc2V7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2FuIG9ubHkgcGxhY2Ugc2hpcHMgdmVydGljYWxseSBvciBob3Jpem9udGFsbHlcIilcbiAgICB9XG4gICAgdGhpcy4jYWRkVG9Ub3RhbFNoaXBzKClcbiAgfVxuICBwbGFjZUF0dGFjayhjb29yZGluYXRlcyl7XG4gICAgbGV0IGF0dGFja1N0YXR1cztcbiAgICBpZihjb29yZGluYXRlcy5zb21lKHRoaXMuI25vdE9uVGhlQm9hcmQpKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvb3JkaW5hdGVzIG11c3QgYmUgb24gdGhlIGdhbWVib2FyZFwiKVxuICAgIH1cbiAgICBpZih0aGlzLmdhbWVCb2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dLmhpdCA9PT0gdHJ1ZSB8fCB0aGlzLmdhbWVCb2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dLm1pc3MgPT09IHRydWUpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbid0IGF0dGFjayB0aGUgc2FtZSBjZWxsIHR3aWNlXCIpXG4gICAgfWVsc2UgaWYodGhpcy5nYW1lQm9hcmRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXS5zaGlwID09PSBudWxsKXtcbiAgICAgIHRoaXMuZ2FtZUJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0ubWlzcyA9IHRydWU7XG4gICAgICBhdHRhY2tTdGF0dXMgPSBcIm1pc3NcIjtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuZ2FtZUJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0uaGl0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuZ2FtZUJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0uc2hpcC5oaXQoKVxuICAgICAgYXR0YWNrU3RhdHVzID0gXCJoaXRcIjtcblxuICAgICAgIGlmKHRoaXMuZ2FtZUJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0uc2hpcC5pc1N1bmsoKSl7XG4gICAgICAgIGF0dGFja1N0YXR1cyA9IHRoaXMuY2hlY2tJZkdhbWVJc092ZXIoKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICB9IFxuICAgICAgXG4gICAgfVxuICAgIHJldHVybiBhdHRhY2tTdGF0dXNcbiAgfVxuICBjaGVja0lmR2FtZUlzT3Zlcigpe1xuICAgdGhpcy4jdG90YWxTdW5rU2hpcHMgPSB0aGlzLiN0b3RhbFN1bmtTaGlwcyArIDE7XG4gICAgaWYodGhpcy4jdG90YWxTaGlwcyA9PSB0aGlzLiN0b3RhbFN1bmtTaGlwcyl7XG4gICAgICByZXR1cm4gXCJhbGwgc3Vua1wiXG4gICAgfSAgZWxzZXtcbiAgICAgIHJldHVybiBcIm9uZSBzdW5rXCJcbiAgICB9XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZDtcbiIsImxldCBHYW1lYm9hcmQgPSByZXF1aXJlKFwiLi4vR2FtZWJvYXJkL2dhbWVib2FyZC5qc1wiKTtcbmxldCBTaGlwID0gcmVxdWlyZShcIi4uL1NoaXAvc2hpcHMuanNcIik7XG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMucGF0cm9sID0gbmV3IFNoaXAoMik7XG4gICAgdGhpcy5zdWJtYXJpbmUgPSBuZXcgU2hpcCgzKTtcbiAgICB0aGlzLmRlc3Ryb3llciA9IG5ldyBTaGlwKDMpO1xuICAgIHRoaXMuYmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQpO1xuICAgIHRoaXMuY2FycmllciA9IG5ldyBTaGlwKDUpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdENvdW50ID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgfVxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRDb3VudCArPSAxO1xuICB9XG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IHRoaXMuaGl0Q291bnQpIHtcbiAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5zdW5rO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCJsZXQgUGxheWVyID0gcmVxdWlyZShcIi4uL1BsYXllci9wbGF5ZXJzLmpzXCIpO1xubGV0IHBsYXllcjEgPSBuZXcgUGxheWVyKFwicGxheWVyMVwiKTtcbmxldCBwbGF5ZXIyID0gbmV3IFBsYXllcihcInBsYXllcjJcIik7XG5cbmNsYXNzIEdhbWVDb250cm9sbGVyIHtcbiAgI2FjdGl2ZVBsYXllcjtcbiAgI2dhbWVTdGFnZSA9IFwiYmVnXCI7XG4gIGNvbnN0cnVjdG9yKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICB0aGlzLnBsYXllcjEgPSBwbGF5ZXIxO1xuICAgIHRoaXMucGxheWVyMiA9IHBsYXllcjI7XG4gICAgdGhpcy4jYWN0aXZlUGxheWVyID0gdGhpcy5wbGF5ZXIxO1xuICAgIHRoaXMucGxheWVyMVBsYWNlZFNoaXBzID0gW107XG4gICAgdGhpcy5wbGF5ZXIyUGxhY2VkU2hpcHMgPSBbXTtcbiAgfVxuXG4gIGdldEFjdGl2ZVBsYXllcigpIHtcbiAgICByZXR1cm4gdGhpcy4jYWN0aXZlUGxheWVyO1xuICB9XG4gIHN3aXRjaEFjdGl2ZVBsYXllcigpIHtcbiAgICBpZiAodGhpcy4jYWN0aXZlUGxheWVyID09PSB0aGlzLnBsYXllcjEpIHtcbiAgICAgIHRoaXMuI2FjdGl2ZVBsYXllciA9IHRoaXMucGxheWVyMjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jYWN0aXZlUGxheWVyID0gdGhpcy5wbGF5ZXIxO1xuICAgIH1cbiAgfVxuICBnZXRPdGhlclBsYXllcigpIHtcbiAgICBpZiAodGhpcy4jYWN0aXZlUGxheWVyID09IHRoaXMucGxheWVyMSkge1xuICAgICAgcmV0dXJuIHRoaXMucGxheWVyMjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucGxheWVyMTtcbiAgICB9XG4gIH1cbiAgcGxhY2VTaGlwcyhzaGlwLCBzdGFydCkge1xuICAgIGxldCBlbmQgPSBbK3N0YXJ0WzBdLCArc3RhcnRbMV0gKyB0aGlzLiNhY3RpdmVQbGF5ZXJbc2hpcF0ubGVuZ3RoIC0gMV07XG4gICAgdGhpcy4jYWN0aXZlUGxheWVyLmJvYXJkLnBsYWNlU2hpcCh0aGlzLiNhY3RpdmVQbGF5ZXJbc2hpcF0sIHN0YXJ0LCBlbmQpO1xuICB9XG5cbiAgcGxhY2VBdHRhY2socm93LCBjb2wpIHtcbiAgICBsZXQgYXR0YWNrU3RhdHVzID0gdGhpcy5nZXRPdGhlclBsYXllcigpLmJvYXJkLnBsYWNlQXR0YWNrKFtyb3csIGNvbF0pO1xuXG4gICAgcmV0dXJuIGF0dGFja1N0YXR1cztcbiAgfVxuICBnZXRHYW1lU3RhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2dhbWVTdGFnZTtcbiAgfVxuXG4gIHN3aXRjaEdhbWVTdGFnZSgpIHtcbiAgICBpZiAodGhpcy4jZ2FtZVN0YWdlID09IFwiYmVnXCIpIHtcbiAgICAgIHRoaXMuI2dhbWVTdGFnZSA9IFwibWlkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2dhbWVTdGFnZSA9IFwiYmVnXCI7XG4gICAgfVxuICB9XG59XG5sZXQgZ2FtZSA9IG5ldyBHYW1lQ29udHJvbGxlcihwbGF5ZXIxLCBwbGF5ZXIyKTtcbm1vZHVsZS5leHBvcnRzID0geyBnYW1lLCBwbGF5ZXIxLCBwbGF5ZXIyIH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmxldCBzY3JlZW5Db250cm9sbGVyID0gcmVxdWlyZShcIi4vdXBkYXRlRE9NL3VwZGF0ZURPTS5qc1wiKTtcbmxldCB7IGdhbWUsIHBsYXllcjEsIHBsYXllcjIgfSA9IHJlcXVpcmUoXCIuL2dhbWVDb250cm9sbGVyL2dhbWVDb250cm9sbGVyLmpzXCIpO1xubGV0IHBsYXllcjJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIyLWdyaWQtY29udGFpbmVyXCIpO1xubGV0IHBsYXllcjFTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMS5zaGlwcy1jb250YWluZXJcIik7XG5sZXQgcGxheWVyMlNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIyLnNoaXBzLWNvbnRhaW5lclwiKTtcbmxldCBwbGF5ZXIxR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMS1ncmlkLWNvbnRhaW5lclwiKTtcbnNjcmVlbkNvbnRyb2xsZXIuY3JlYXRlR3JpZENlbGxzKCk7XG5cbi8qIFBsYWNpbmcgc2hpcHMgc3RhZ2UgKi9cbnBsYXllcjFTaGlwcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChnYW1lLmdldEdhbWVTdGFnZSgpID09IFwiYmVnXCIgJiYgZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKSA9PT0gcGxheWVyMSkge1xuICAgIGxldCBzZWxlY3RlZFNoaXBFdmVudFRhcmdldCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFsxXTtcbiAgICBsZXQgcGxheWVyMVNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIucGxheWVyMS5zaGlwcy1jb250YWluZXJcIlxuICAgICk7XG4gICAgcGxheWVyMVNoaXBDb250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgICAgXCJkYXRhLXNlbGVjdGVkU2hpcFwiLFxuICAgICAgc2VsZWN0ZWRTaGlwRXZlbnRUYXJnZXRcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn0pO1xuXG5wbGF5ZXIxR3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChnYW1lLmdldEdhbWVTdGFnZSgpID09IFwiYmVnXCIgJiYgZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKSA9PT0gcGxheWVyMSkge1xuICAgIGxldCByb3dDb29yZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnJvdztcbiAgICBsZXQgY29sQ29vcmQgPSBldmVudC50YXJnZXQuZGF0YXNldC5jb2w7XG4gICAgbGV0IHBsYXllcjFTaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLnBsYXllcjEuc2hpcHMtY29udGFpbmVyXCJcbiAgICApO1xuICAgIGxldCBzZWxlY3RlZFNoaXAgPSBwbGF5ZXIxU2hpcENvbnRhaW5lci5kYXRhc2V0LnNlbGVjdGVkc2hpcDtcblxuICAgIGdhbWUucGxhY2VTaGlwcyhzZWxlY3RlZFNoaXAsIFsrcm93Q29vcmQsICtjb2xDb29yZF0pO1xuICAgIHNjcmVlbkNvbnRyb2xsZXIucGxhY2VTaGlwc0RPTShcbiAgICAgIGV2ZW50LnRhcmdldCxcbiAgICAgIHBsYXllcjFbc2VsZWN0ZWRTaGlwXS5sZW5ndGgsXG4gICAgICBcInBsYXllcjFcIlxuICAgICk7XG4gICAgbGV0IHNoaXBET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyMSAuJHtzZWxlY3RlZFNoaXB9YCk7XG4gICAgc2hpcERPTS5yZW1vdmUoKTtcblxuICAgIHBsYXllcjFTaGlwQ29udGFpbmVyLmRhdGFzZXQuc2VsZWN0ZWRzaGlwID0gXCJcIjtcblxuICAgIGlmICghcGxheWVyMVNoaXBDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgIGxldCBwbGF5ZXIxR3JpZENsYXNzID0gXCIucGxheWVyMVwiO1xuXG4gICAgICBnYW1lLnN3aXRjaEFjdGl2ZVBsYXllcigpO1xuICAgICAgc2NyZWVuQ29udHJvbGxlci5oaWRlQm9hcmQocGxheWVyMUdyaWRDbGFzcyk7XG4gICAgICBzY3JlZW5Db250cm9sbGVyLmRpc3BsYXlBY3RpdmVQbGF5ZXIoZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKS5uYW1lKTtcbiAgICB9XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH0gZWxzZSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufSk7XG5cbnBsYXllcjJTaGlwcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChnYW1lLmdldEdhbWVTdGFnZSgpID09IFwiYmVnXCIgJiYgZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKSA9PT0gcGxheWVyMikge1xuICAgIGxldCBzZWxlY3RlZFNoaXBFdmVudFRhcmdldCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFsxXTtcbiAgICBsZXQgcGxheWVyMlNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIucGxheWVyMi5zaGlwcy1jb250YWluZXJcIlxuICAgICk7XG4gICAgcGxheWVyMlNoaXBDb250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgICAgXCJkYXRhLXNlbGVjdGVkU2hpcFwiLFxuICAgICAgc2VsZWN0ZWRTaGlwRXZlbnRUYXJnZXRcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn0pO1xuXG5wbGF5ZXIyR3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChnYW1lLmdldEdhbWVTdGFnZSgpID09IFwiYmVnXCIgJiYgZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKSA9PT0gcGxheWVyMikge1xuICAgIGxldCByb3dDb29yZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnJvdztcbiAgICBsZXQgY29sQ29vcmQgPSBldmVudC50YXJnZXQuZGF0YXNldC5jb2w7XG4gICAgbGV0IHBsYXllcjJTaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLnBsYXllcjIuc2hpcHMtY29udGFpbmVyXCJcbiAgICApO1xuICAgIGxldCBzZWxlY3RlZFNoaXAgPSBwbGF5ZXIyU2hpcENvbnRhaW5lci5kYXRhc2V0LnNlbGVjdGVkc2hpcDtcblxuICAgIGdhbWUucGxhY2VTaGlwcyhzZWxlY3RlZFNoaXAsIFsrcm93Q29vcmQsICtjb2xDb29yZF0pO1xuICAgIHNjcmVlbkNvbnRyb2xsZXIucGxhY2VTaGlwc0RPTShcbiAgICAgIGV2ZW50LnRhcmdldCxcbiAgICAgIHBsYXllcjJbc2VsZWN0ZWRTaGlwXS5sZW5ndGgsXG4gICAgICBcInBsYXllcjJcIlxuICAgICk7XG4gICAgbGV0IHNoaXBET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyMiAuJHtzZWxlY3RlZFNoaXB9YCk7XG4gICAgc2hpcERPTS5yZW1vdmUoKTtcbiAgICBwbGF5ZXIyU2hpcENvbnRhaW5lci5kYXRhc2V0LnNlbGVjdGVkc2hpcCA9IFwiXCI7XG4gICAgaWYgKCFwbGF5ZXIyU2hpcENvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgbGV0IHBsYXllcjJHcmlkQ2xhc3MgPSBcIi5wbGF5ZXIyXCI7XG5cbiAgICAgIGdhbWUuc3dpdGNoQWN0aXZlUGxheWVyKCk7XG4gICAgICBzY3JlZW5Db250cm9sbGVyLmhpZGVCb2FyZChwbGF5ZXIyR3JpZENsYXNzKTtcbiAgICAgIGdhbWUuc3dpdGNoR2FtZVN0YWdlKCk7XG4gICAgICBzY3JlZW5Db250cm9sbGVyLmRpc3BsYXlBY3RpdmVQbGF5ZXIoZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKS5uYW1lKTtcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59KTtcbi8qIEF0dGFja2luZyBzaGlwcyBzdGFnZSAqL1xucGxheWVyMkdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBsZXQgcGxheWVyMkdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjItZ3JpZC1jb250YWluZXJcIik7XG4gIGlmIChcbiAgICBnYW1lLmdldEdhbWVTdGFnZSgpID09IFwibWlkXCIgJiZcbiAgICBnYW1lLmdldEFjdGl2ZVBsYXllcigpID09PSBwbGF5ZXIxICYmXG4gICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgPT0gcGxheWVyMkdyaWRcbiAgKSB7XG4gICAgbGV0IHJvd0Nvb3JkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQucm93O1xuICAgIGxldCBjb2xDb29yZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmNvbDtcbiAgICBsZXQgc3RhdHVzID0gZ2FtZS5wbGFjZUF0dGFjaygrcm93Q29vcmQsICtjb2xDb29yZCk7XG4gICAgc2NyZWVuQ29udHJvbGxlci5wbGFjZUF0dGFja3NET00oc3RhdHVzLCBldmVudC50YXJnZXQpO1xuICAgIGlmIChzdGF0dXMgPT09IFwiYWxsIHN1bmtcIikge1xuICAgICAgc2NyZWVuQ29udHJvbGxlci5kaXNwbGF5V2lubmVyKGdhbWUuZ2V0QWN0aXZlUGxheWVyKCkubmFtZSk7XG4gICAgICBsZXQgcGxheWVyMkdyaWRDbGFzcyA9IFwiLnBsYXllcjJcIjtcbiAgICAgIGxldCBwbGF5ZXIxR3JpZENsYXNzID0gXCIucGxheWVyMVwiO1xuICAgICAgc2NyZWVuQ29udHJvbGxlci5yZXZlYWxCb2FyZChcbiAgICAgICAgcGxheWVyMkdyaWRDbGFzcyxcbiAgICAgICAgZ2FtZS5nZXRPdGhlclBsYXllcigpLmJvYXJkLmdhbWVCb2FyZFxuICAgICAgKTtcbiAgICAgIHNjcmVlbkNvbnRyb2xsZXIucmV2ZWFsQm9hcmQoXG4gICAgICAgIHBsYXllcjFHcmlkQ2xhc3MsXG4gICAgICAgIGdhbWUuZ2V0QWN0aXZlUGxheWVyKCkuYm9hcmQuZ2FtZUJvYXJkXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGdhbWUuc3dpdGNoQWN0aXZlUGxheWVyKCk7XG4gICAgc2NyZWVuQ29udHJvbGxlci5kaXNwbGF5QWN0aXZlUGxheWVyKGdhbWUuZ2V0QWN0aXZlUGxheWVyKCkubmFtZSk7XG4gIH1cbn0pO1xucGxheWVyMUdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBsZXQgcGxheWVyMUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjEtZ3JpZC1jb250YWluZXJcIik7XG4gIGlmIChcbiAgICBnYW1lLmdldEdhbWVTdGFnZSgpID09IFwibWlkXCIgJiZcbiAgICBnYW1lLmdldEFjdGl2ZVBsYXllcigpID09PSBwbGF5ZXIyICYmXG4gICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgPT0gcGxheWVyMUdyaWRcbiAgKSB7XG4gICAgbGV0IHJvd0Nvb3JkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQucm93O1xuICAgIGxldCBjb2xDb29yZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmNvbDtcbiAgICBsZXQgc3RhdHVzID0gZ2FtZS5wbGFjZUF0dGFjaygrcm93Q29vcmQsICtjb2xDb29yZCk7XG4gICAgc2NyZWVuQ29udHJvbGxlci5wbGFjZUF0dGFja3NET00oc3RhdHVzLCBldmVudC50YXJnZXQpO1xuICAgIGlmIChzdGF0dXMgPT09IFwiYWxsIHN1bmtcIikge1xuICAgICAgc2NyZWVuQ29udHJvbGxlci5kaXNwbGF5V2lubmVyKGdhbWUuZ2V0QWN0aXZlUGxheWVyKCkubmFtZSk7XG4gICAgICBsZXQgcGxheWVyMkdyaWRDbGFzcyA9IFwiLnBsYXllcjJcIjtcbiAgICAgIGxldCBwbGF5ZXIxR3JpZENsYXNzID0gXCIucGxheWVyMVwiO1xuICAgICAgc2NyZWVuQ29udHJvbGxlci5yZXZlYWxCb2FyZChcbiAgICAgICAgcGxheWVyMUdyaWRDbGFzcyxcbiAgICAgICAgZ2FtZS5nZXRPdGhlclBsYXllcigpLmJvYXJkLmdhbWVCb2FyZFxuICAgICAgKTtcbiAgICAgIHNjcmVlbkNvbnRyb2xsZXIucmV2ZWFsQm9hcmQoXG4gICAgICAgIHBsYXllcjJHcmlkQ2xhc3MsXG4gICAgICAgIGdhbWUuZ2V0QWN0aXZlUGxheWVyKCkuYm9hcmQuZ2FtZUJvYXJkXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGdhbWUuc3dpdGNoQWN0aXZlUGxheWVyKCk7XG5cbiAgICBzY3JlZW5Db250cm9sbGVyLmRpc3BsYXlBY3RpdmVQbGF5ZXIoZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKS5uYW1lKTtcbiAgfVxufSk7XG4iLCJjbGFzcyBVSUNvbnRyb2xsZXIge1xuICBwbGFjZUF0dGFja3NET00oYXR0YWNrU3RhdHVzLCB0YXJnZXQpIHtcbiAgICBjb25zdCBtaXNzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1pc3NJY29uLnRleHRDb250ZW50ID0gXCIqXCI7XG4gICAgY29uc3QgaGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGhpdEljb24udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICBsZXQgY29sb3JSZWQgPSBcInJnYigyMzUsIDQ1LCA0NSlcIjtcbiAgICBpZiAoYXR0YWNrU3RhdHVzID09IFwibWlzc1wiKSB7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobWlzc0ljb24pO1xuICAgIH0gZWxzZSBpZiAoYXR0YWNrU3RhdHVzID09IFwiaGl0XCIpIHtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChoaXRJY29uKTtcbiAgICAgIHRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclJlZDtcbiAgICB9IGVsc2UgaWYgKGF0dGFja1N0YXR1cyA9PSBcIm9uZSBzdW5rXCIpIHtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChoaXRJY29uKTtcbiAgICAgIHRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclJlZDtcblxuICAgICAgbGV0IGF1ZGlvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKTtcbiAgICAgIGF1ZGlvRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhdXRvcGxheVwiLCBcIlwiKTtcbiAgICAgIGxldCBhdWRpb1NvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIik7XG4gICAgICBhdWRpb1NvdXJjZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYCR7cmVxdWlyZShcIi4uL0Fzc2V0cy9mYXJ0Lm1wM1wiKX1gKTtcbiAgICAgIGF1ZGlvU291cmNlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJhdWRpby9tcGVnXCIpO1xuICAgICAgYXVkaW9FbGVtZW50LmFwcGVuZENoaWxkKGF1ZGlvU291cmNlKTtcbiAgICAgIGF1ZGlvRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJoaWRkZW5cIjtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChhdWRpb0VsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoaGl0SWNvbik7XG4gICAgICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JSZWQ7XG5cbiAgICAgIGxldCBhdWRpb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XG4gICAgICBhdWRpb0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXV0b3BsYXlcIiwgXCJcIik7XG4gICAgICBsZXQgYXVkaW9Tb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xuICAgICAgYXVkaW9Tb3VyY2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIGAke3JlcXVpcmUoXCIuLi9Bc3NldHMvYmF0dGxlc2hpdC5tcDNcIil9YCk7XG4gICAgICBhdWRpb1NvdXJjZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYXVkaW8vbXBlZ1wiKTtcbiAgICAgIGF1ZGlvRWxlbWVudC5hcHBlbmRDaGlsZChhdWRpb1NvdXJjZSk7XG4gICAgICBhdWRpb0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiaGlkZGVuXCI7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoYXVkaW9FbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVHcmlkQ2VsbHMoKSB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgICAgbGV0IGdyaWRDZWxscGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdyaWRDZWxscGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1jZWxsXCIpO1xuICAgICAgICBncmlkQ2VsbHBsYXllcjEuc2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIiwgcm93KTtcbiAgICAgICAgZ3JpZENlbGxwbGF5ZXIxLnNldEF0dHJpYnV0ZShcImRhdGEtY29sXCIsIGNvbCk7XG4gICAgICAgIGxldCBncmlkQ2VsbHBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBncmlkQ2VsbHBsYXllcjIuY2xhc3NMaXN0LmFkZChcImdyaWQtY2VsbFwiKTtcbiAgICAgICAgZ3JpZENlbGxwbGF5ZXIyLnNldEF0dHJpYnV0ZShcImRhdGEtcm93XCIsIHJvdyk7XG4gICAgICAgIGdyaWRDZWxscGxheWVyMi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiLCBjb2wpO1xuICAgICAgICBsZXQgcGxheWVyMUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjEtZ3JpZC1jb250YWluZXJcIik7XG4gICAgICAgIGxldCBwbGF5ZXIyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMi1ncmlkLWNvbnRhaW5lclwiKTtcblxuICAgICAgICBwbGF5ZXIxR3JpZC5hcHBlbmRDaGlsZChncmlkQ2VsbHBsYXllcjEpO1xuICAgICAgICBwbGF5ZXIyR3JpZC5hcHBlbmRDaGlsZChncmlkQ2VsbHBsYXllcjIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwbGFjZVNoaXBzRE9NKGV2ZW50VGFyZ2V0LCBzaGlwTGVuZ3RoLCBwbGF5ZXIxKSB7XG4gICAgaWYgKHBsYXllcjEgPT0gXCJwbGF5ZXIxXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLnBsYXllcjEtZ3JpZC1jb250YWluZXIgPiBbZGF0YS1yb3cgPSAnJHtcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRhdGFzZXQucm93XG4gICAgICAgICAgfSddW2RhdGEtY29sID0gJyR7K2V2ZW50VGFyZ2V0LmRhdGFzZXQuY29sICsgaX0nXWBcbiAgICAgICAgKTtcblxuICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDQ1LCAyMDMsIDIzNSlcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAucGxheWVyMi1ncmlkLWNvbnRhaW5lciA+IFtkYXRhLXJvdyA9ICcke1xuICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGF0YXNldC5yb3dcbiAgICAgICAgICB9J11bZGF0YS1jb2wgPSAnJHsrZXZlbnRUYXJnZXQuZGF0YXNldC5jb2wgKyBpfSddYFxuICAgICAgICApO1xuXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoNDUsIDIwMywgMjM1KVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBkaXNwbGF5QWN0aXZlUGxheWVyKHBsYXllcjEpIHtcbiAgICBsZXQgZ2FtZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS10aXRsZVwiKTtcbiAgICBnYW1lSGVhZGVyLnRleHRDb250ZW50ID0gYGl0IGlzICR7cGxheWVyMX0ncyB0dXJuIGA7XG4gIH1cbiAgZGlzcGxheVdpbm5lcihwbGF5ZXIxKSB7XG4gICAgbGV0IGdhbWVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtdGl0bGVcIik7XG4gICAgZ2FtZUhlYWRlci50ZXh0Q29udGVudCA9IGAke3BsYXllcjF9J3MgdGhlIHdpbm5lciEgYDtcbiAgfVxuICBoaWRlQm9hcmQoYm9hcmRUb0hpZGVDbGFzcykge1xuICAgIGxldCBib2FyZFRvSGlkZURPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgJHtib2FyZFRvSGlkZUNsYXNzfS1ncmlkLWNvbnRhaW5lcmBcbiAgICApO1xuXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBib2FyZFRvSGlkZURPTS5jaGlsZHJlbikge1xuICAgICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcbiAgICB9XG4gIH1cbiAgcmV2ZWFsQm9hcmQoYm9hcmRUb1Nob3dDbGFzcywgYm9hcmRUb1Nob3cpIHtcbiAgICBjb25zdCBtaXNzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1pc3NJY29uLnRleHRDb250ZW50ID0gXCIqXCI7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgICAgaWYgKGJvYXJkVG9TaG93W3Jvd11bY29sXS5zaGlwID09IG51bGwpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBib2FyZFRvU2hvd1tyb3ddW2NvbF0uc2hpcCAhPT0gbnVsbCAmJlxuICAgICAgICAgIGJvYXJkVG9TaG93W3Jvd11bY29sXS5oaXQgPT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgbGV0IGdyaWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAke2JvYXJkVG9TaG93Q2xhc3N9LWdyaWQtY29udGFpbmVyIFtkYXRhLXJvdyA9ICcke3Jvd30nXVtkYXRhLWNvbCA9ICcke2NvbH0nXWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGdyaWRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDQ1LCAyMDMsIDIzNSlcIjtcblxuICAgICAgICAgIGdyaWRDZWxsLmFwcGVuZENoaWxkKG1pc3NJY29uKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBib2FyZFRvU2hvd1tyb3ddW2NvbF0uc2hpcCAhPT0gbnVsbCAmJlxuICAgICAgICAgIGJvYXJkVG9TaG93W3Jvd11bY29sXS5oaXQgPT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICBsZXQgZ3JpZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYCR7Ym9hcmRUb1Nob3dDbGFzc30tZ3JpZC1jb250YWluZXIgW2RhdGEtcm93ID0gJyR7cm93fSddW2RhdGEtY29sID0gJyR7Y29sfSddYFxuICAgICAgICAgICk7XG4gICAgICAgICAgZ3JpZENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjM1LCA0NSwgNDUpXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmxldCBzY3JlZW5Db250cm9sbGVyID0gbmV3IFVJQ29udHJvbGxlcigpO1xubW9kdWxlLmV4cG9ydHMgPSBzY3JlZW5Db250cm9sbGVyO1xuLyogbW9kdWxlLmV4cG9ydHMgPSBwbGFjZUF0dGFja3NET007ICovXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=