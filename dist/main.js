/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hashmap.js":
/*!************************!*\
  !*** ./src/hashmap.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list */ \"./src/linked-list.js\");\n\n\nclass NodePair {\n    constructor(key, value) {\n        this.key = key;\n        this.value = value;\n    }\n}\n\nfunction hashmap() {\n    let allBuckets = [];\n    let addBucket = (size) => { \n        for (let i = 0; i < size; i++) {\n            let bucket = null;\n            allBuckets.push(bucket);\n        }\n    }\n    addBucket(16);\n\n    const hash = (key) => {\n        let hashCode = 0;\n      \n        const primeNumber = 31;\n        for (let i = 0; i < key.length; i++) {\n          hashCode = primeNumber * hashCode + key.charCodeAt(i);\n        }\n      \n        return hashCode % allBuckets.length;\n      }\n\n    const resize = () => {\n        const allNodes = allBuckets.filter(b => b != null);\n        const oldIndexes = [];\n        allNodes.forEach(b => {\n            let key = b.head.value.key; \n            oldIndexes.push([key, hash(key)]);\n        });\n        addBucket(allBuckets.length);\n        allNodes.forEach(b => {\n            let key = b.head.value.key; \n            oldIndexes.forEach(e => {\n                if (e[0] == key) {\n                    allBuckets[e[1]] = null;\n                }\n            });\n            let newIndex = hash(key);\n            allBuckets[newIndex] = b;\n        });\n    }\n\n    const filledBuckets = () => {\n        let filledBucket = 0;\n        allBuckets.forEach(bucket => {\n            if (bucket != null) {\n                filledBucket += 1\n            };\n        });\n        return filledBucket\n    }\n\n    const checkLoadFactor = () => {\n        let loadfactor = 0.75 * allBuckets.length;\n        if (filledBuckets() >= loadfactor) {\n            resize();\n        }\n    }\n\n    let filterNodes = () => { return allBuckets.filter(b => b != null) }\n\n    const overWriteValue = (key, value) => {\n        filterNodes().forEach(b => {\n            if(b.contains(key) == true) {\n                b.changeValue(key,value);\n                return true;\n            };\n        })\n    }\n\n    const set = (key, value) => {\n        if(overWriteValue(key, value) != true) {\n            let index = hash(key);\n            if (index < 0 || index >= allBuckets.length) {\n                throw new Error(\"Trying to access index out of bound\");\n            } \n            let linkedlist = new _linked_list__WEBPACK_IMPORTED_MODULE_0__.LinkedList;\n            allBuckets[index] = linkedlist;\n            if (allBuckets[index].head == null) {\n                allBuckets[index].prepend(new NodePair(key, value))\n            } else {\n                allBuckets[index].append(new NodePair(key, value));\n            }\n            checkLoadFactor();\n        }\n    }\n\n    const get = (key) => {\n        let index = hash(key);\n        if (allBuckets[index] == null) return null;\n        let node = allBuckets[index].head\n        while (allBuckets[index].head != null) {\n            if (node.value.key == key) {\n                return node.value.value;\n            }\n            node = node.next;\n        }\n        return null;\n    }\n\n    const has = (key) => {\n        let index = hash(key);\n        if (allBuckets[index] == null) return false;\n        let node = allBuckets[index].head;\n        while (allBuckets[index].head != null) {\n            if (node.value.key == key) {\n                return true;\n            }\n            node = node.next;\n        }\n    }\n\n    const remove = (key) => {\n        let index = hash(key);\n        if (allBuckets[index] == null) return false;\n        let node = allBuckets[index].head;\n        if (node.value.key == key) {\n            allBuckets[index] = null;\n            return true\n        } else {\n            while (allBuckets[index].head != null) {\n                if (node.value.key == key) {\n                    node = null;\n                    return true;\n                }\n                node = node.next;\n            }\n        }\n    }\n\n    const length = () => {\n        return filledBuckets();\n    }\n\n    const clear = () => {\n        allBuckets = [];\n        addBucket(16);\n        console.log(allBuckets);  \n    }\n\n    const keys = () => {\n        const allKeys = []\n        filterNodes().forEach(b => {\n            let node = b.head;\n            while (node != null) {\n                if (node.value.key) {     \n                   allKeys.push(node.value.key);\n                }\n                node = node.next;\n            }\n        });\n        return allKeys\n    }\n\n    const values = () => {\n        const allValues = []\n        filterNodes().forEach(b => {\n            let node = b.head;\n            while (node != null) {\n                if (node.value.value) {     \n                   allValues.push(node.value.value);\n                }\n                node = node.next;\n            }\n        });\n        return allValues;\n    }\n\n    const entries = () => {\n        const allKeyValue = [];\n        filterNodes().forEach(b => {\n            let node = b.head;\n            while (node != null) {\n                if (node.value.key) {     \n                   allKeyValue.push([node.value.key, node.value.value]);\n                }\n                node = node.next;\n            }\n        });\n        return allKeyValue;\n    }\n\n    return {set, get, has, remove, length, clear, keys, values, entries, allBuckets}\n}\n\nlet test = hashmap();\ntest.set('a','aoll');\ntest.set('b','boll');\ntest.set('c','coll');\ntest.set('d','doll');\ntest.set('e','eoll');\ntest.set('f','foll');\ntest.set('g','goll');\ntest.set('h','holl');\ntest.set('i','uoll');\ntest.set('j','joll');\ntest.set('k','koll');\ntest.set('l','loll');\ntest.set('m','aoll');\nconsole.log(test.has('i'))\n\n//# sourceURL=webpack://linked-list/./src/hashmap.js?");

/***/ }),

/***/ "./src/linked-list.js":
/*!****************************!*\
  !*** ./src/linked-list.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LinkedList: () => (/* binding */ LinkedList)\n/* harmony export */ });\nclass LinkedList {\n    head = null;\n    tail = null;\n\n    prepend(value) {\n       if (this.head === null) {\n        this.head = new node(value);\n       } else {\n        let nextValue = this.head;\n        if (nextValue.next == null) {\n            this.tail = nextValue;\n        }\n        this.head = new node(value, nextValue);\n       }\n    }\n\n    append(value) {\n        if (this.head == null) {\n            prepend(value);\n        }\n        else if(this.tail !== null) {\n            this.tail.next = new node(value);\n            this.tail = new node(value);\n        }  else {\n            this.tail = new node(value);\n            this.head.next = new node(value);\n        }\n    }\n\n    size() {\n        let size = 0;\n        let node = this.head;\n        while (this.head != null) {\n            node = node.next;\n            size++;\n            if (node.next == null) {\n                size++;\n                break;\n            }\n        }\n        return size;   \n    }\n\n    at(index) {\n        let size = 0;\n        let node = this.head;\n        while (this.head != null) {\n            node = node.next;\n            size++;\n            if (size === index) {\n                return node;\n            }\n        }\n    }\n\n    pop() {\n       let node = this.head;\n       while (this.head != null) {\n        if (node.next.value === this.tail.value || node.next.value.key == this.tail.value.key) {\n            node.next = null;\n            this.tail = node;\n            break;\n        } \n           node = node.next;\n       }  \n    }\n\n    contains(value) {\n        let node = this.head;\n        while (this.head != null) {\n            if (node.value.key == value || node.value == value) {\n               return true;\n            } \n\n            if (node.next == null) {\n                return false;\n            }\n            node = node.next;\n        }\n    }\n\n    find(value) {\n        let index = 0;\n        let node = this.head;\n        while (this.head != null) {\n            if (node.value.key == value || node.value == value) {\n                console.log(index);\n                break;\n            } \n\n            if (node.next == null) {\n                return null;\n            }\n            node = node.next;\n            index++;\n        }\n    }\n\n    toString() {\n        let string = `${this.head.value}`;\n        let node = this.head;\n        while (this.head != null) {\n            node = node.next;\n            if (node === null) {\n                string += '-> '+ null;\n                return string;\n\n            }\n            string += ' -> '+ node.value\n        }\n    }\n\n    ///Only if there is a key\n    changeValue(key, value) {\n        let node = this.head;\n        while (this.head != null) {\n            if (node.value.key == key) {\n                node.value.value = value;\n                break;\n            }\n            node = node.next;\n        }\n    }\n}\n\nclass node {\n    constructor(value = null, next = null) {\n        this.value = value;\n        this.next = next;\n    }\n}\n\n\n\n//# sourceURL=webpack://linked-list/./src/linked-list.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/hashmap.js");
/******/ 	
/******/ })()
;