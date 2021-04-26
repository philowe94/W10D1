/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection{\n    constructor(htmlarr){\n        this.htmlarr = htmlarr;\n    }\n\n    html(str) {\n        //if it receives a str\n        if(str == \"\") {\n            for(let i = 0; i < this.htmlarr.length; i++){\n                this.htmlarr[i].innerHTML = \"\";\n            }\n        }\n        if(!!str){\n            //loop thru the htmlarr and make the innerHTML of each of them the str\n            for(let i = 0; i < this.htmlarr.length; i++){\n                this.htmlarr[i].innerHTML = str;\n            }\n        } else {\n            return this.htmlarr[0].innerHTML;\n        }\n    }\n\n    empty() {\n        this.html(\"\");\n    }\n\n    append(el){\n        if(el instanceof DOMNodeCollection){\n            let dnchtmls = el.htmlarr;\n            for(let i = 0; i < dnchtmls.length; i++) {\n                for(let y = 0; y < this.htmlarr.length; y++){\n                    this.htmlarr[y].innerHTML += dnchtmls[i].outerHTML;\n                }\n            }\n        } else if (el instanceof HTMLElement) {\n            for(let i = 0; y < this.htmlarr.length; i++){\n                this.htmlarr[i].innerHTML += el.outerHTML;\n            }\n        } else if (typeof el === 'string' || el instanceof String) {\n            for(let i = 0; i < this.htmlarr.length; i++){\n                \n                this.htmlarr[i].innerHTML += el;\n            }\n        }\n    }\n\n    attr(str, value) {\n        if(!value){\n            return this.htmlarr[0].getAttribute(str);\n        } else {\n            for(let i = 0; i < this.htmlarr.length; i++){\n                this.htmlarr[i].setAttribute(str, value);\n            }\n        }\n    }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("let DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nlet $l = function(arg) {\n    //if arg is an htmlelement,\n    //put in array and return a DNC instance\n    if(arg instanceof HTMLElement) {\n        return new DOMNodeCollection([arg])\n    } else {\n        let nodelist = document.querySelectorAll(arg);\n        let arr = [];\n        for(let i = 0; i < nodelist.length; i++) {\n            arr[i] = nodelist[i];\n        }\n        return new DOMNodeCollection(arr);\n    }\n}\n\nwindow.$l = $l;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;