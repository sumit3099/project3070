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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assignment2_js__ = __webpack_require__(2);

// document.body.appendChild(document.createElement("input"));
// document.getElementsByTagName("input")[0].setAttribute("id", "task");
// document.getElementsByTagName("input")[0].setAttribute("type", "text");
// document.body.appendChild(document.createElement("button"));
// document.getElementsByTagName("button")[0].setAttribute("id", "add");
// document.getElementsByTagName("button")[0].innerHTML = "Add";
// document.body.appendChild(document.createElement("div"));
// document.getElementsByTagName("div")[0].setAttribute("id", "todos");
// var list = new Array;
// const status = new Array;
// var add = () => {
//     let task = document.getElementById('task').value;
//     status.push("Todo");
//     list.push(task);
//     document.getElementById('task').value = "";
//     show();
// }
// function remove() {
//     let id = this.getAttribute('id');
//     list.splice(id, 1);
//     show();

// }

// function stodo() {
//     let id = this.getAttribute('id');

//     status[id] = "Todo";
//     console.log(status);
//     show();

// }

// function sprogress() {
//     let id = this.getAttribute('id');


//     status[id] = "Progress";
//     console.log(status);
//     show();

// }

// function sdoneformv() {
//     let id = this.getAttribute('id');


//     status[id] = "Done";
//     console.log(status);
//     show();

// }

class person {
    constructor(fname, lname, parentfname, parentlname) {
        this.fname = fname;
        this.lname = lname;
        this.parentfname = parentfname;
        this.parentlname = parentlname;
    }
}

var add = () => {
    console.log("abc");
    var v = document.getElementById('formv').value;
    if (v === 'form1') {
        const p = new person(document.getElementById('f1f1').value, document.getElementById('f1f2').value, document.getElementById('f1f3').value, document.getElementById('f1f4').value);

    }
    if (v === 'form2') {
        const p = new person(document.getElementById('f2f1').value, document.getElementById('f2f2').value, document.getElementById('f2f3').value, document.getElementById('f2f4').value);
    }
    show(p);
}
var show = (p) => {
    console.log(p.fname);
    console.log(p.lname);
    console.log(p.parentfname);
    console.log(p.parentlname);

}


var Formvisblity = () => {
    var v = document.getElementById('formv').value;
    if (v === 'form1') {
        document.getElementById('form1').style.display = 'block';
        document.getElementById('form2').style.display = 'none';
    }
    if (v === 'form2') {
        document.getElementById('form1').style.display = 'none';
        document.getElementById('form2').style.display = 'block';
    }
}
document.getElementById('formv').addEventListener("change", Formvisblity);


document.getElementById('form1button').addEventListener('click', add);

document.getElementById('form2button').addEventListener('click', add);
// show();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export show */
 var show = (p) => {
     console.log(p.fname);
     console.log(p.lname);
     console.log(p.parentfname);
     console.log(p.parentlname);

 }
 

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
(function webpackMissingModule() { throw new Error("Cannot find module \"dev-server\""); }());


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assignment2_js__ = __webpack_require__(2);

// document.body.appendChild(document.createElement("input"));
// document.getElementsByTagName("input")[0].setAttribute("id", "task");
// document.getElementsByTagName("input")[0].setAttribute("type", "text");
// document.body.appendChild(document.createElement("button"));
// document.getElementsByTagName("button")[0].setAttribute("id", "add");
// document.getElementsByTagName("button")[0].innerHTML = "Add";
// document.body.appendChild(document.createElement("div"));
// document.getElementsByTagName("div")[0].setAttribute("id", "todos");
// var list = new Array;
// const status = new Array;
// var add = () => {
//     let task = document.getElementById('task').value;
//     status.push("Todo");
//     list.push(task);
//     document.getElementById('task').value = "";
//     show();
// }
// function remove() {
//     let id = this.getAttribute('id');
//     list.splice(id, 1);
//     show();

// }

// function stodo() {
//     let id = this.getAttribute('id');

//     status[id] = "Todo";
//     console.log(status);
//     show();

// }

// function sprogress() {
//     let id = this.getAttribute('id');


//     status[id] = "Progress";
//     console.log(status);
//     show();

// }

// function sdoneformv() {
//     let id = this.getAttribute('id');


//     status[id] = "Done";
//     console.log(status);
//     show();

// }

class person {
    constructor(fname, lname, parentfname, parentlname) {
        this.fname = fname;
        this.lname = lname;
        this.parentfname = parentfname;
        this.parentlname = parentlname;
    }
}

var add = () => {
    console.log("abc");
    var v = document.getElementById('formv').value;
    if (v === 'form1') {
        const p = new person(document.getElementById('f1f1').value, document.getElementById('f1f2').value, document.getElementById('f1f3').value, document.getElementById('f1f4').value);

    }
    if (v === 'form2') {
        const p = new person(document.getElementById('f2f1').value, document.getElementById('f2f2').value, document.getElementById('f2f3').value, document.getElementById('f2f4').value);
    }
    show(p);
}
var show = (p) => {
    console.log(p.fname);
    console.log(p.lname);
    console.log(p.parentfname);
    console.log(p.parentlname);

}


var Formvisblity = () => {
    var v = document.getElementById('formv').value;
    if (v === 'form1') {
        document.getElementById('form1').style.display = 'block';
        document.getElementById('form2').style.display = 'none';
    }
    if (v === 'form2') {
        document.getElementById('form1').style.display = 'none';
        document.getElementById('form2').style.display = 'block';
    }
}
document.getElementById('formv').addEventListener("change", Formvisblity);


document.getElementById('form1button').addEventListener('click', add);

document.getElementById('form2button').addEventListener('click', add);
// show();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export show */
var show = (p) => {
    console.log(p.fname);
    console.log(p.lname);
    console.log(p.parentfname);
    console.log(p.parentlname);

}

/***/ })
/******/ ]);

/***/ })
/******/ ]);