/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/api-type.js":
/*!**********************************!*\
  !*** ./resources/js/api-type.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkEmail": () => (/* binding */ checkEmail),
/* harmony export */   "checkEmailGo": () => (/* binding */ checkEmailGo)
/* harmony export */ });
var ROOT = 'http://localhost:3000';
var checkEmail = ROOT + '/api/checkEmail';
var checkEmailGo = ROOT + '/api/checkEmailGo';

/***/ }),

/***/ "./resources/js/api.js":
/*!*****************************!*\
  !*** ./resources/js/api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    console.log(body);
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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-type.js */ "./resources/js/api-type.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ "./resources/js/api.js");
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.js */ "./resources/js/create.js");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.js */ "./resources/js/edit.js");





/***/ }),

/***/ "./resources/js/create.js":
/*!********************************!*\
  !*** ./resources/js/create.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-type.js */ "./resources/js/api-type.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ "./resources/js/api.js");


var create_firstname = document.getElementById('create_name');
var create_email = document.getElementById('create_email');
var create_submit = document.getElementById('create_submit');
var create_error_name = document.getElementById('create_error_name');
var create_error_email = document.getElementById('create_error_email');

if (create_firstname !== null && create_email !== null && create_submit !== null && create_error_name !== null && create_error_email !== null) {
  create_firstname.oninput = function () {
    if (!create_firstname.value.match(/^(([A-Za-z]{3,10})(\s)([A-Za-z]{3,10}))$/g)) create_error_name.innerHTML = 'NAME has only letters, length[3,20]';else create_error_name.innerHTML = ' ';
  };

  create_email.oninput = function () {
    (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.apiCheckEmail)(_api_type_js__WEBPACK_IMPORTED_MODULE_0__.checkEmail, create_email.value, create_error_email) || (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.apiCheckEmail)(_api_type_js__WEBPACK_IMPORTED_MODULE_0__.checkEmailGo, create_email.value, create_error_email);
    if (!create_email.value.match(/^(([a-zA-Z0-9]{3,40})@([a-z]+).(com|yandex|ru))$/g)) create_error_email.innerHTML = 'EMAIL has letters and numbers, length[3,40]';else create_error_email.innerHTML = ' ';
  };

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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-type.js */ "./resources/js/api-type.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ "./resources/js/api.js");


var edit_firstname = document.getElementById('edit_name');
var edit_email = document.getElementById('edit_email');
var edit_submit = document.getElementById('edit_submit');
var edit_error_name = document.getElementById('edit_error_name');
var edit_error_email = document.getElementById('edit_error_email');

if (edit_email !== null && edit_submit !== null && edit_error_name !== null && edit_error_email !== null) {
  edit_error_name.innerHTML = ' ';
  edit_error_email.innerHTML = ' ';
  var start_mail = edit_email.value;

  edit_firstname.oninput = function () {
    if (!edit_firstname.value.match(/^(([A-Za-z]{3,10})(\s)([A-Za-z]{3,10}))$/g)) edit_error_name.innerHTML = 'NAME has only letters, length[3,20]';else edit_error_name.innerHTML = ' ';
  };

  edit_email.oninput = function () {
    if (start_mail !== edit_email.value) (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.apiCheckEmail)(_api_type_js__WEBPACK_IMPORTED_MODULE_0__.checkEmail, edit_email.value, edit_error_email);
    if (!edit_email.value.match(/^(([a-zA-Z0-9]{3,40})@([a-z]+).(com|yandex|ru))$/g)) edit_error_email.innerHTML = 'EMAIL has letters and numbers, length[3,40]';else edit_error_email.innerHTML = ' ';
  };

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

/***/ "./resources/sass/app.sass":
/*!*********************************!*\
  !*** ./resources/sass/app.sass ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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