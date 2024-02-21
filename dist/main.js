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

/***/ "./src/BST.js":
/*!********************!*\
  !*** ./src/BST.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildTree: () => (/* binding */ buildTree),\n/* harmony export */   deleteNode: () => (/* binding */ deleteNode),\n/* harmony export */   find: () => (/* binding */ find),\n/* harmony export */   height: () => (/* binding */ height),\n/* harmony export */   inOrder: () => (/* binding */ inOrder),\n/* harmony export */   insertNode: () => (/* binding */ insertNode),\n/* harmony export */   levelOrder: () => (/* binding */ levelOrder),\n/* harmony export */   postOrder: () => (/* binding */ postOrder),\n/* harmony export */   preOrder: () => (/* binding */ preOrder)\n/* harmony export */ });\n/* harmony import */ var _mergeSort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeSort */ \"./src/mergeSort.js\");\n\n\nclass Node {\n    constructor(data) {\n        this.data = data\n        this.left = null;\n        this.right = null;\n    }\n}\n\nclass Tree {\n    constructor(array) {\n        this.array = array\n        this.root = null;\n    }\n}\n\nfunction buildTree(arr) {\n\n    function cleanArr() {\n        let removeDuplicate = [];\n\n            arr.forEach(e => {\n                if (removeDuplicate.includes(e) != true) {\n                        removeDuplicate.push(e);\n                }\n            });\n\n        return (0,_mergeSort__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(removeDuplicate);\n    }\n\n    let sortedArr = cleanArr();\n\n    const makeBST = (start,end) => {\n        let array = sortedArr;\n        if (start > end) {\n            return null;\n        }\n\n        let mid = parseInt((start + end) / 2);\n        let node = new Node(array[mid]);\n        node.left = makeBST(start, mid - 1);\n        node.right = makeBST(mid + 1, end);\n        return node;\n    }\n\n    return { makeBST, sortedArr, cleanArr }\n}\n\nfunction insertNode(root, value) {\n    if (root === null) {\n        return new Node(value);\n    }\n\n    if (value < root.data) {\n        root.left = insertNode(root.left, value);\n    } else {\n        root.right = insertNode(root.right, value);\n    }\n\n    console.log(root);\n    return root;\n}\n   \nfunction deleteNode(root, k) {\n    if (root === null) {\n        return root;\n    }\n\n    if (root.data > k) {\n        root.left = deleteNode(root.left, k);\n        return root;\n    } else if (root.data < k) {\n        root.right = deleteNode(root.right, k);\n        return root;\n    }\n\n    if (root.left === null) {\n            let temp = root.right;\n            root = null;\n            return temp;\n    } else if (root.right === null) {\n            let temp = root.left;\n            root = null;\n            return temp;\n    }\n\n    else {\n        let succParent = root;\n\n        let succ = root.right;\n        while (succ.left !== null) {\n            succParent = succ;\n            succ = succ.left;\n        }\n\n        if (succParent !== root) {\n            succParent.left = succ.right;\n        } else {\n            succParent.right = succ.right;\n        }\n\n        root.data = succ.data;\n\n        succ = null;\n        return root;\n    }\n}\n\nfunction find(root, value) {\n    if (root === null) {\n        console.log(root);\n        return root;\n    }\n    if (root.data == value) {\n        console.log(root);\n        return root;\n    }\n\n    if (value < root.data) {\n        return root.left = find(root.left, value);\n    } else {\n        return root.right = find(root.right, value);\n    }\n}\n\nfunction levelOrder(root,callback) {\n    if (root === null) return root;\n    let q = [root];\n    let values = [];\n    while(q.length > 0) {\n        let currentNode = q[0];\n        console.log(q[0]);\n        values.push(currentNode.data);\n        if(typeof callback === 'function') callback(currentNode);\n        if(currentNode.left != null) q.push(currentNode.left);\n        if(currentNode.right != null) q.push(currentNode.right);\n        q.shift();\n    }\n    if(typeof callback != 'function') {\n        console.log(values);\n        return values;\n    }\n}\n\nfunction inOrder(root, callback) {\n    if (root == null) return root;\n    if(typeof callback != 'function') {\n        let values = [];\n\n        values = values.concat(inOrder(root.left));\n        values.push(root.data);\n        values = values.concat(inOrder(root.right));\n\n        let filterValues = values.filter(v => v != null);\n        return filterValues;\n    }\n\n    inOrder(root.left);\n    callback(root);\n    inOrder(root.right);\n}\n\nfunction preOrder(root, callback) {\n    if (root == null) return root;\n    if(typeof callback != 'function') {\n        let values = [];\n\n        values.push(root.data);\n        values = values.concat(preOrder(root.left));\n        values = values.concat(preOrder(root.right));\n\n        let filterValues = values.filter(v => v != null);\n        return filterValues;\n    }\n\n    callback(root);\n    preOrder(root.left);\n    preOrder(root.right);\n}\n\nfunction postOrder(root, callback) {\n    if (root == null) return root;\n    if(typeof callback != 'function') {\n        let values = [];\n\n        values = values.concat(postOrder(root.left));\n        values = values.concat(postOrder(root.right));\n        values.push(root.data);\n\n        let filterValues = values.filter(v => v != null);\n        return filterValues;\n    }\n\n    postOrder(root.left);\n    postOrder(root.right);\n    callback(root);\n}\n\nfunction height(root) {\n    if(root == null) return null;\n    let heightNum = 0;\n    let children = [];\n\n    if (Array.isArray(root) == true) {\n        let check = root.some(n => n.left != null || n.right != null);\n        if(check == true) {\n            heightNum += 1;\n            root.forEach(n => {\n                if (n.left != null) {\n                    children.push(n.left);\n                }\n            });\n            root.forEach(n => {\n                if (n.right != null) {\n                    children.push(n.right);\n                }\n            });\n            heightNum += height(children);\n        } else {\n            return 0;\n        }\n    }\n\n    if(root.left != null || root.right != null) {\n        heightNum += 1;\n        if(root.left != null) children.push(root.left);\n        if(root.right != null) children.push(root.right);\n        heightNum += height(children);\n    }\n\n    return heightNum;\n}\n\n\n\n\n\n//# sourceURL=webpack://linked-list/./src/BST.js?");

/***/ }),

/***/ "./src/hashmap.js":
/*!************************!*\
  !*** ./src/hashmap.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hashmap: () => (/* binding */ hashmap)\n/* harmony export */ });\n/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list */ \"./src/linked-list.js\");\n\n\nclass NodePair {\n    constructor(key, value) {\n        this.key = key;\n        this.value = value;\n    }\n}\n\nfunction hashmap() {\n    let allBuckets = [];\n    let addBucket = (size) => { \n        for (let i = 0; i < size; i++) {\n            let bucket = null;\n            allBuckets.push(bucket);\n        }\n    }\n    addBucket(16);\n\n    const hash = (key) => {\n        let hashCode = 0;\n      \n        const primeNumber = 31;\n        for (let i = 0; i < key.length; i++) {\n          hashCode = primeNumber * hashCode + key.charCodeAt(i);\n        }\n      \n        return hashCode % allBuckets.length;\n      }\n\n    const resize = () => {\n        const allNodes = allBuckets.filter(b => b != null);\n        const oldIndexes = [];\n        allNodes.forEach(b => {\n            let key = b.head.value.key; \n            oldIndexes.push([key, hash(key)]);\n        });\n        addBucket(allBuckets.length);\n        allNodes.forEach(b => {\n            let key = b.head.value.key; \n            oldIndexes.forEach(e => {\n                if (e[0] == key) {\n                    allBuckets[e[1]] = null;\n                }\n            });\n            let newIndex = hash(key);\n            allBuckets[newIndex] = b;\n        });\n    }\n\n    const filledBuckets = () => {\n        let filledBucket = 0;\n        allBuckets.forEach(bucket => {\n            if (bucket != null) {\n                filledBucket += 1\n            };\n        });\n        return filledBucket\n    }\n\n    const checkLoadFactor = () => {\n        let loadfactor = 0.75 * allBuckets.length;\n        if (filledBuckets() >= loadfactor) {\n            resize();\n        }\n    }\n\n    let filterNodes = () => { return allBuckets.filter(b => b != null) }\n\n    const overWriteValue = (key, value) => {\n        filterNodes().forEach(b => {\n            if(b.contains(key) == true) {\n                b.changeValue(key,value);\n                return true;\n            };\n        })\n    }\n\n    const set = (key, value) => {\n        if(overWriteValue(key, value) != true) {\n            let index = hash(key);\n            if (index < 0 || index >= allBuckets.length) {\n                throw new Error(\"Trying to access index out of bound\");\n            } \n            let linkedlist = new _linked_list__WEBPACK_IMPORTED_MODULE_0__.LinkedList;\n            allBuckets[index] = linkedlist;\n            if (allBuckets[index].head == null) {\n                allBuckets[index].prepend(new NodePair(key, value))\n            } else {\n                allBuckets[index].append(new NodePair(key, value));\n            }\n            checkLoadFactor();\n        }\n    }\n\n    const get = (key) => {\n        let index = hash(key);\n        if (allBuckets[index] == null) return null;\n        let node = allBuckets[index].head\n        while (allBuckets[index].head != null) {\n            if (node.value.key == key) {\n                return node.value.value;\n            }\n            node = node.next;\n        }\n        return null;\n    }\n\n    const has = (key) => {\n        let index = hash(key);\n        if (allBuckets[index] == null) return false;\n        let node = allBuckets[index].head;\n        while (allBuckets[index].head != null) {\n            if (node.value.key == key) {\n                return true;\n            }\n            node = node.next;\n        }\n    }\n\n    const remove = (key) => {\n        let index = hash(key);\n        if (allBuckets[index] == null) return false;\n        let node = allBuckets[index].head;\n        if (node.value.key == key) {\n            allBuckets[index] = null;\n            return true\n        } else {\n            while (allBuckets[index].head != null) {\n                if (node.value.key == key) {\n                    node = null;\n                    return true;\n                }\n                node = node.next;\n            }\n        }\n    }\n\n    const length = () => {\n        return filledBuckets();\n    }\n\n    const clear = () => {\n        allBuckets = [];\n        addBucket(16);\n        console.log(allBuckets);  \n    }\n\n    const keys = () => {\n        const allKeys = []\n        filterNodes().forEach(b => {\n            let node = b.head;\n            while (node != null) {\n                if (node.value.key) {     \n                   allKeys.push(node.value.key);\n                }\n                node = node.next;\n            }\n        });\n        return allKeys\n    }\n\n    const values = () => {\n        const allValues = []\n        filterNodes().forEach(b => {\n            let node = b.head;\n            while (node != null) {\n                if (node.value.value) {     \n                   allValues.push(node.value.value);\n                }\n                node = node.next;\n            }\n        });\n        return allValues;\n    }\n\n    const entries = () => {\n        const allKeyValue = [];\n        filterNodes().forEach(b => {\n            let node = b.head;\n            while (node != null) {\n                if (node.value.key) {     \n                   allKeyValue.push([node.value.key, node.value.value]);\n                }\n                node = node.next;\n            }\n        });\n        return allKeyValue;\n    }\n\n    return {set, get, has, remove, length, clear, keys, values, entries, allBuckets}\n}\n\n\n\n//# sourceURL=webpack://linked-list/./src/hashmap.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hashmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hashmap */ \"./src/hashmap.js\");\n/* harmony import */ var _mergeSort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeSort */ \"./src/mergeSort.js\");\n/* harmony import */ var _BST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BST */ \"./src/BST.js\");\n\n\n\n\nconst prettyPrint = (node, prefix = \"\", isLeft = true) => {\n  if (node === null) {\n    return;\n  }\n  if (node.right !== null) {\n    prettyPrint(node.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\n  }\n  console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.data}`);\n  if (node.left !== null) {\n    prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\n  }\n};\n\nlet test = (0,_hashmap__WEBPACK_IMPORTED_MODULE_0__.hashmap)();\ntest.set('a','aoll');\ntest.set('b','boll');\ntest.set('c','coll');\ntest.set('d','doll');\ntest.set('e','eoll');\ntest.set('f','foll');\ntest.set('g','goll');\ntest.set('h','holl');\ntest.set('i','uoll');\ntest.set('j','joll');\ntest.set('k','koll');\ntest.set('l','loll');\ntest.set('m','aoll');\nlet arr = [12,2,65,7,9];\nlet n = arr.length;\nlet tree = (0,_BST__WEBPACK_IMPORTED_MODULE_2__.buildTree)(arr);\nconsole.log(tree.makeBST(0,n));\nconsole.log((0,_mergeSort__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr));\nprettyPrint(tree.makeBST(0,n));\nlet root = null;\nroot = (0,_BST__WEBPACK_IMPORTED_MODULE_2__.insertNode)(root, 50);\nroot = (0,_BST__WEBPACK_IMPORTED_MODULE_2__.insertNode)(root, 30);\nroot = (0,_BST__WEBPACK_IMPORTED_MODULE_2__.insertNode)(root, 20);\nroot = (0,_BST__WEBPACK_IMPORTED_MODULE_2__.insertNode)(root, 40);\nroot = (0,_BST__WEBPACK_IMPORTED_MODULE_2__.insertNode)(root, 70);\nroot = (0,_BST__WEBPACK_IMPORTED_MODULE_2__.insertNode)(root, 60);\nprettyPrint(root);\nconsole.log((0,_BST__WEBPACK_IMPORTED_MODULE_2__.inOrder)(root));\nconsole.log((0,_BST__WEBPACK_IMPORTED_MODULE_2__.preOrder)(root));\nconsole.log((0,_BST__WEBPACK_IMPORTED_MODULE_2__.postOrder)(root));\nconsole.log((0,_BST__WEBPACK_IMPORTED_MODULE_2__.height)(root));\n\n//# sourceURL=webpack://linked-list/./src/index.js?");

/***/ }),

/***/ "./src/linked-list.js":
/*!****************************!*\
  !*** ./src/linked-list.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LinkedList: () => (/* binding */ LinkedList)\n/* harmony export */ });\nclass LinkedList {\n    head = null;\n    tail = null;\n\n    prepend(value) {\n       if (this.head === null) {\n        this.head = new node(value);\n       } else {\n        let nextValue = this.head;\n        if (nextValue.next == null) {\n            this.tail = nextValue;\n        }\n        this.head = new node(value, nextValue);\n       }\n    }\n\n    append(value) {\n        if (this.head == null) {\n            prepend(value);\n        }\n        else if(this.tail !== null) {\n            this.tail.next = new node(value);\n            this.tail = new node(value);\n        }  else {\n            this.tail = new node(value);\n            this.head.next = new node(value);\n        }\n    }\n\n    size() {\n        let size = 0;\n        let node = this.head;\n        while (this.head != null) {\n            node = node.next;\n            size++;\n            if (node.next == null) {\n                size++;\n                break;\n            }\n        }\n        return size;   \n    }\n\n    at(index) {\n        let size = 0;\n        let node = this.head;\n        while (this.head != null) {\n            node = node.next;\n            size++;\n            if (size === index) {\n                return node;\n            }\n        }\n    }\n\n    pop() {\n       let node = this.head;\n       while (this.head != null) {\n        if (node.next.value === this.tail.value || node.next.value.key == this.tail.value.key) {\n            node.next = null;\n            this.tail = node;\n            break;\n        } \n           node = node.next;\n       }  \n    }\n\n    contains(value) {\n        let node = this.head;\n        while (this.head != null) {\n            if (node.value.key == value || node.value == value) {\n               return true;\n            } \n\n            if (node.next == null) {\n                return false;\n            }\n            node = node.next;\n        }\n    }\n\n    find(value) {\n        let index = 0;\n        let node = this.head;\n        while (this.head != null) {\n            if (node.value.key == value || node.value == value) {\n                console.log(index);\n                break;\n            } \n\n            if (node.next == null) {\n                return null;\n            }\n            node = node.next;\n            index++;\n        }\n    }\n\n    toString() {\n        let string = `${this.head.value}`;\n        let node = this.head;\n        while (this.head != null) {\n            node = node.next;\n            if (node === null) {\n                string += '-> '+ null;\n                return string;\n\n            }\n            string += ' -> '+ node.value\n        }\n    }\n\n    ///Only if there is a key\n    changeValue(key, value) {\n        let node = this.head;\n        while (this.head != null) {\n            if (node.value.key == key) {\n                node.value.value = value;\n                break;\n            }\n            node = node.next;\n        }\n    }\n}\n\nclass node {\n    constructor(value = null, next = null) {\n        this.value = value;\n        this.next = next;\n    }\n}\n\n\n\n//# sourceURL=webpack://linked-list/./src/linked-list.js?");

/***/ }),

/***/ "./src/mergeSort.js":
/*!**************************!*\
  !*** ./src/mergeSort.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction checkSorted(arr) {\n    for (let i = 0; i < arr.length; i++) {\n        let nextEl = arr[i + 1]\n        if (arr[i] > nextEl) {\n            return false;\n        }\n    }             \n}\n\nfunction merge(leftH,rightH) {\n    let sortedArr = [];\n    if (leftH[0] <= rightH[0]) {\n        sortedArr.push(leftH[0]);\n        leftH.shift();\n        return sortedArr.concat(merge(leftH,rightH))\n    } else if(leftH.length === 0) {\n        return sortedArr.concat(rightH);\n    } else if (rightH.length === 0 ) {\n        return sortedArr.concat(leftH);\n    }  else {\n        sortedArr.push(rightH[0]);\n        rightH.shift();\n        return sortedArr.concat(merge(leftH,rightH))\n    }\n}\n\nfunction mergeSort(arr) { \n    let half = Math.ceil(arr.length / 2);\n    let leftHalf = arr.slice(0, half);\n    let rightHalf = arr.slice(half)\n    if (checkSorted(leftHalf) === false && \n        checkSorted(rightHalf) === false) {\n        leftHalf = mergeSort(leftHalf);\n        rightHalf = mergeSort(rightHalf);\n        return merge(leftHalf, rightHalf)\n    } else if(checkSorted(leftHalf) === false) {\n        leftHalf = mergeSort(leftHalf);\n        return merge(leftHalf,rightHalf);\n    } else if(checkSorted(rightHalf) === false) {\n        rightHalf = mergeSort(leftHalf,rightHalf);\n        return merge(leftHalf, rightHalf);\n    } else {\n        return merge(leftHalf,rightHalf);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mergeSort);\n\n//# sourceURL=webpack://linked-list/./src/mergeSort.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;