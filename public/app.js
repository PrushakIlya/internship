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
/* harmony export */   "checkEmail": () => (/* binding */ checkEmail)
/* harmony export */ });
var ROOT = 'http://localhost:3000';
var checkEmail = ROOT + '/checkEmail';

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


var firstname = document.getElementById('name');
var lastname = document.getElementById('lastname');
var email = document.getElementById('email');
var submit = document.getElementById('submit');
var error_name = document.getElementById('error_name');
var error_lastname = document.getElementById('error_lastname');
var error_email = document.getElementById('error_email');

firstname.oninput = function () {
  if (!firstname.value.match(/^([A-Za-z]{3,20})$/g)) error_name.innerHTML = 'NAME has only letters, length[3,20]';else error_name.innerHTML = ' ';
};

lastname.oninput = function () {
  if (!lastname.value.match(/^([A-Za-z]{3,20})$/g)) error_lastname.innerHTML = 'LASTNAME has only letters, length[3,20]';else error_lastname.innerHTML = ' ';
};

email.oninput = function () {
  (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.apiCheckEmail)(_api_type_js__WEBPACK_IMPORTED_MODULE_0__.checkEmail, email.value, error_email);
  if (!email.value.match(/^(([a-zA-Z0-9]{3,40})@(gmail.com|yandex.ru|mail.ru))$/g)) error_email.innerHTML = 'EMAIL has letters and numbers, length[3,40]';else error_email.innerHTML = ' ';
};

document.addEventListener('DOMContentLoaded', function () {
  var callback = function callback() {
    console.log(error_name.textContent.length);

    if (error_name.textContent.length === 1 && error_lastname.textContent.length === 1 && error_email.textContent.length === 1) {
      submit.disabled = false;
      submit.className = 'btn success';
    } else {
      submit.disabled = true;
      submit.className = 'btn disabled';
    }
  };

  var observer = new MutationObserver(callback);
  var elem = document.querySelector('body');
  observer.observe(elem, {
    childList: true,
    subtree: true
  });
});

/***/ }),

/***/ "./resources/js/edit.js":
/*!******************************!*\
  !*** ./resources/js/edit.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-type.js */ "./resources/js/api-type.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ "./resources/js/api.js");


var firstname = document.getElementById('name');
var lastname = document.getElementById('lastname');
var email = document.getElementById('email');
var submit = document.getElementById('submit');
var error_name = document.getElementById('error_name');
var error_lastname = document.getElementById('error_lastname');
var error_email = document.getElementById('error_email');
error_name.innerHTML = ' ';
error_lastname.innerHTML = ' ';
error_email.innerHTML = ' ';
var start_mail = email.value;

firstname.oninput = function () {
  if (!firstname.value.match(/^([A-Za-z]{3,20})$/g)) error_name.innerHTML = 'NAME has only letters, length[3,20]';else error_name.innerHTML = ' ';
};

lastname.oninput = function () {
  if (!lastname.value.match(/^([A-Za-z]{3,20})$/g)) error_lastname.innerHTML = 'LASTNAME has only letters, length[3,20]';else error_lastname.innerHTML = ' ';
};

email.oninput = function () {
  if (start_mail !== email.value) (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.apiCheckEmail)(_api_type_js__WEBPACK_IMPORTED_MODULE_0__.checkEmail, email.value, error_email);
  if (!email.value.match(/^(([a-zA-Z0-9]{3,40})@(gmail.com|yandex.ru|mail.ru))$/g)) error_email.innerHTML = 'EMAIL has letters and numbers, length[3,40]';else error_email.innerHTML = ' ';
};

document.addEventListener('DOMContentLoaded', function () {
  var callback = function callback() {
    if (error_name.textContent.length === 1 && error_lastname.textContent.length === 1 && error_email.textContent.length === 1) {
      submit.disabled = false;
      submit.className = 'btn success';
    } else {
      submit.disabled = true;
      submit.className = 'btn disabled';
    }
  };

  var observer = new MutationObserver(callback);
  var elem = document.querySelector('body');
  observer.observe(elem, {
    childList: true,
    subtree: true
  });
});

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