/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/api-type.js":
/*!**********************************!*\
  !*** ./resources/js/api-type.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHECKEMAIL": () => (/* binding */ CHECKEMAIL),
/* harmony export */   "CHECKEMAILGO": () => (/* binding */ CHECKEMAILGO)
/* harmony export */ });
var ROOT = 'http://localhost:3000';
var CHECKEMAIL = ROOT + '/api/checkEmail';
var CHECKEMAILGO = ROOT + '/api/checkEmailGo';

/***/ }),

/***/ "./resources/js/api.js":
/*!*****************************!*\
  !*** ./resources/js/api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiCheckEmail": () => (/* binding */ apiCheckEmail)
/* harmony export */ });
var apiCheckEmail = function apiCheckEmail(url, payload, error_block) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (body) {
    if (body === true) error_block.innerHTML = 'Email is taken';
  })["catch"](function (error) {
    return console.log(error);
  });
};

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vars.js */ "./resources/js/vars.js");
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vars_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _upload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload.js */ "./resources/js/upload.js");
/* harmony import */ var _upload_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_upload_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.js */ "./resources/js/create.js");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.js */ "./resources/js/edit.js");





/***/ }),

/***/ "./resources/js/create.js":
/*!********************************!*\
  !*** ./resources/js/create.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-type.js */ "./resources/js/api-type.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ "./resources/js/api.js");
/* harmony import */ var _expressions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expressions.js */ "./resources/js/expressions.js");



var task = window.location.pathname.split('/');
var create_firstname = document.getElementById('create_name');
var create_email = document.getElementById('create_email');
var create_submit = document.getElementById('create_submit');
var create_error_name = document.getElementById('create_error_name');
var create_error_email = document.getElementById('create_error_email');

if (create_firstname !== null && create_email !== null && create_submit !== null && create_error_name !== null && create_error_email !== null) {
  var inputCreateFirstName = function inputCreateFirstName() {
    if (!create_firstname.value.match(_expressions_js__WEBPACK_IMPORTED_MODULE_2__.PATTERNFIRSTNAME)) create_error_name.innerHTML = 'NAME has only letters, length[3,20]';else create_error_name.innerHTML = ' ';
  };

  var inputCreateEmail = function inputCreateEmail() {
    task[1] === 'two' ? (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.apiCheckEmail)(_api_type_js__WEBPACK_IMPORTED_MODULE_0__.CHECKEMAILGO, create_email.value, create_error_email) : (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.apiCheckEmail)(_api_type_js__WEBPACK_IMPORTED_MODULE_0__.CHECKEMAIL, create_email.value, create_error_email);
    if (!create_email.value.match(_expressions_js__WEBPACK_IMPORTED_MODULE_2__.PATTERNEMAIL)) create_error_email.innerHTML = 'EMAIL has letters and numbers, length[3,40]';else create_error_email.innerHTML = ' ';
  };

  create_firstname.oninput = inputCreateFirstName;
  ;
  create_email.oninput = inputCreateEmail;
  ;
  document.addEventListener('DOMContentLoaded', function () {
    var callback = function callback() {
      if (create_error_name.textContent.length === 1 && create_error_email.textContent.length === 1) {
        create_submit.disabled = false;
        create_submit.className = 'btn success';
      } else {
        create_submit.disabled = true;
        create_submit.className = 'btn disabled';
      }
    };

    var observer = new MutationObserver(callback);
    var elem = document.querySelector('body');
    observer.observe(elem, {
      childList: true,
      subtree: true
    });
  });
}

/***/ }),

/***/ "./resources/js/edit.js":
/*!******************************!*\
  !*** ./resources/js/edit.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-type.js */ "./resources/js/api-type.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ "./resources/js/api.js");
/* harmony import */ var _expressions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expressions.js */ "./resources/js/expressions.js");



var task = window.location.pathname.split('/');
var edit_firstname = document.getElementById('edit_name');
var edit_email = document.getElementById('edit_email');
var edit_submit = document.getElementById('edit_submit');
var edit_error_name = document.getElementById('edit_error_name');
var edit_error_email = document.getElementById('edit_error_email');

if (edit_email !== null && edit_submit !== null && edit_error_name !== null && edit_error_email !== null) {
  var inputEditFirstname = function inputEditFirstname() {
    if (!edit_firstname.value.match(_expressions_js__WEBPACK_IMPORTED_MODULE_2__.PATTERNFIRSTNAME)) edit_error_name.innerHTML = 'NAME has only letters, length[3,20]';else edit_error_name.innerHTML = ' ';
  };

  var inputEditEmail = function inputEditEmail() {
    if (task[1] === 'two') {
      (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.apiCheckEmail)(_api_type_js__WEBPACK_IMPORTED_MODULE_0__.CHECKEMAILGO, edit_email.value, edit_error_email);
      start_mail !== edit_email.value && (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.apiCheckEmail)(_api_type_js__WEBPACK_IMPORTED_MODULE_0__.CHECKEMAIL, edit_email.value, edit_error_email);
    } else {
      (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.apiCheckEmail)(_api_type_js__WEBPACK_IMPORTED_MODULE_0__.CHECKEMAIL, edit_email.value, edit_error_email);
      start_mail !== edit_email.value && (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.apiCheckEmail)(_api_type_js__WEBPACK_IMPORTED_MODULE_0__.CHECKEMAILGO, edit_email.value, edit_error_email);
    }

    if (!edit_email.value.match(_expressions_js__WEBPACK_IMPORTED_MODULE_2__.PATTERNEMAIL)) edit_error_email.innerHTML = 'EMAIL has letters and numbers, length[3,40]';else edit_error_email.innerHTML = ' ';
  };

  edit_error_name.innerHTML = ' ';
  edit_error_email.innerHTML = ' ';
  var start_mail = edit_email.value;
  edit_firstname.oninput = inputEditFirstname;
  ;
  edit_email.oninput = inputEditEmail;
  ;
  document.addEventListener('DOMContentLoaded', function () {
    var callback = function callback() {
      if (edit_error_name.textContent.length === 1 && edit_error_email.textContent.length === 1) {
        edit_submit.disabled = false;
        edit_submit.className = 'btn success';
      } else {
        edit_submit.disabled = true;
        edit_submit.className = 'btn disabled';
      }
    };

    var observer = new MutationObserver(callback);
    var elem = document.querySelector('body');
    observer.observe(elem, {
      childList: true,
      subtree: true
    });
  });
}

/***/ }),

/***/ "./resources/js/expressions.js":
/*!*************************************!*\
  !*** ./resources/js/expressions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PATTERNEMAIL": () => (/* binding */ PATTERNEMAIL),
/* harmony export */   "PATTERNFIRSTNAME": () => (/* binding */ PATTERNFIRSTNAME)
/* harmony export */ });
var PATTERNFIRSTNAME = /^(([A-Za-z]|.){3,50})$/g;
var PATTERNEMAIL = /^(([a-zA-Z0-9]{3,26})@([a-z]{3,10}).(com|yandex|ru))$/g;

/***/ }),

/***/ "./resources/js/upload.js":
/*!********************************!*\
  !*** ./resources/js/upload.js ***!
  \********************************/
/***/ (() => {

var upload_submit = document.getElementById('upload_submit');
var upload_file = document.getElementById('formFile');
var upload_errors = document.getElementById('upload_errors');

upload_file.oninput = function () {
  if (upload_file.files[0].size > 200000) {
    upload_errors.innerHTML = 'Max file size is 200kByt';
    upload_submit.disabled = true;
    console.log(upload_file.files[0].size);
  }

  if (upload_file.files[0].type !== 'image/png' && upload_file.files[0].type !== 'image/jpeg' && upload_file.files[0].type !== 'text/plain') {
    upload_errors.innerHTML = 'Only png,jpeg,txt';
    upload_submit.disabled = true;
    console.log(upload_file.files[0].type);
  } else {
    upload_errors.innerHTML = ' ';
    upload_submit.disabled = false;
  }
};

/***/ }),

/***/ "./resources/js/vars.js":
/*!******************************!*\
  !*** ./resources/js/vars.js ***!
  \******************************/
/***/ (() => {

var create_firstname = document.getElementById('create_name');
var create_email = document.getElementById('create_email');
var create_submit = document.getElementById('create_submit');
var create_error_name = document.getElementById('create_error_name');
var create_error_email = document.getElementById('create_error_email');

/***/ }),

/***/ "./resources/sass/app.sass":
/*!*********************************!*\
  !*** ./resources/sass/app.sass ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/app": 0,
/******/ 			"public/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/app"], () => (__webpack_require__("./resources/sass/app.sass")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;