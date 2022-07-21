/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/all-functions.js":
/*!***************************************!*\
  !*** ./resources/js/all-functions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCookie": () => (/* binding */ getCookie)
/* harmony export */ });
var getCookie = function getCookie(name) {
  var cookie = document.cookie.split('=');
  var value = cookie[1].replaceAll('%20', ' ');
  value = value.replaceAll('%21', '');
  return value;
};

/***/ }),

/***/ "./resources/js/api-type.js":
/*!**********************************!*\
  !*** ./resources/js/api-type.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHECKEMAIL": () => (/* binding */ CHECKEMAIL),
/* harmony export */   "CHECKEMAILFORM": () => (/* binding */ CHECKEMAILFORM),
/* harmony export */   "CHECKEMAILGO": () => (/* binding */ CHECKEMAILGO),
/* harmony export */   "CHECKEMAILREG": () => (/* binding */ CHECKEMAILREG)
/* harmony export */ });
var ROOT = 'http://localhost:3000';
var CHECKEMAIL = ROOT + '/api/checkEmail';
var CHECKEMAILGO = ROOT + '/api/checkEmailGo';
var CHECKEMAILFORM = ROOT + '/api/checkEmailForm';
var CHECKEMAILREG = ROOT + '/api/checkEmailReg';

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
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./resources/js/errors.js");

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
    if (body === true) error_block.innerHTML = _errors__WEBPACK_IMPORTED_MODULE_0__.AUTORIZATIONERROR;else error_block.innerHTML = ' ';
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
/* harmony import */ var _upload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.js */ "./resources/js/upload.js");
/* harmony import */ var _autorization_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autorization.js */ "./resources/js/autorization.js");
/* harmony import */ var _registration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration.js */ "./resources/js/registration.js");
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create.js */ "./resources/js/create.js");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit.js */ "./resources/js/edit.js");






/***/ }),

/***/ "./resources/js/autorization.js":
/*!**************************************!*\
  !*** ./resources/js/autorization.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _expressions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expressions.js */ "./resources/js/expressions.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors.js */ "./resources/js/errors.js");
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vars.js */ "./resources/js/vars.js");
/* harmony import */ var _all_functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-functions.js */ "./resources/js/all-functions.js");





if (_vars_js__WEBPACK_IMPORTED_MODULE_2__.authEmail !== null && _vars_js__WEBPACK_IMPORTED_MODULE_2__.authPassword !== null && _vars_js__WEBPACK_IMPORTED_MODULE_2__.authName !== null && _vars_js__WEBPACK_IMPORTED_MODULE_2__.authSubmit !== null && _vars_js__WEBPACK_IMPORTED_MODULE_2__.authErrorEmail !== null && _vars_js__WEBPACK_IMPORTED_MODULE_2__.authErrorPassword !== null && _vars_js__WEBPACK_IMPORTED_MODULE_2__.authErrorName !== 0) {
  if (document.cookie) {
    _vars_js__WEBPACK_IMPORTED_MODULE_2__.authErrorName.textContent = (0,_all_functions_js__WEBPACK_IMPORTED_MODULE_3__.getCookie)(document.cookie);
  }

  var authEmailFunc = function authEmailFunc() {
    if (!_vars_js__WEBPACK_IMPORTED_MODULE_2__.authEmail.value.match(_expressions_js__WEBPACK_IMPORTED_MODULE_0__.PATTERNEMAIL)) _vars_js__WEBPACK_IMPORTED_MODULE_2__.authErrorEmail.textContent = _errors_js__WEBPACK_IMPORTED_MODULE_1__.MAILERROR;else _vars_js__WEBPACK_IMPORTED_MODULE_2__.authErrorEmail.textContent = ' ';
    if (_vars_js__WEBPACK_IMPORTED_MODULE_2__.authEmail.value.length === 0) _vars_js__WEBPACK_IMPORTED_MODULE_2__.authErrorEmail.textContent = '';
  };

  var authPasswordFunc = function authPasswordFunc() {
    if (!_vars_js__WEBPACK_IMPORTED_MODULE_2__.authPassword.value.match(_expressions_js__WEBPACK_IMPORTED_MODULE_0__.PATTERNPASSWORD)) _vars_js__WEBPACK_IMPORTED_MODULE_2__.authErrorPassword.textContent = _errors_js__WEBPACK_IMPORTED_MODULE_1__.PASSWORDERROR;else _vars_js__WEBPACK_IMPORTED_MODULE_2__.authErrorPassword.textContent = ' ';
    if (_vars_js__WEBPACK_IMPORTED_MODULE_2__.authPassword.value.length === 0) _vars_js__WEBPACK_IMPORTED_MODULE_2__.authErrorPassword.textContent = '';
  };

  var authNameFunc = function authNameFunc() {
    if (!_vars_js__WEBPACK_IMPORTED_MODULE_2__.authName.value.match(_expressions_js__WEBPACK_IMPORTED_MODULE_0__.PATTERNNAME)) _vars_js__WEBPACK_IMPORTED_MODULE_2__.authErrorName.textContent = _errors_js__WEBPACK_IMPORTED_MODULE_1__.NAMEERROR;else _vars_js__WEBPACK_IMPORTED_MODULE_2__.authErrorName.textContent = ' ';
    if (_vars_js__WEBPACK_IMPORTED_MODULE_2__.authName.value.length === 0) _vars_js__WEBPACK_IMPORTED_MODULE_2__.authErrorName.textContent = '';
  };

  _vars_js__WEBPACK_IMPORTED_MODULE_2__.authEmail.oninput = authEmailFunc;
  _vars_js__WEBPACK_IMPORTED_MODULE_2__.authPassword.oninput = authPasswordFunc;
  _vars_js__WEBPACK_IMPORTED_MODULE_2__.authName.oninput = authNameFunc;
  document.addEventListener('DOMContentLoaded', function () {
    var callback = function callback() {
      if (_vars_js__WEBPACK_IMPORTED_MODULE_2__.authErrorEmail.textContent.length === 1 && _vars_js__WEBPACK_IMPORTED_MODULE_2__.authErrorPassword.textContent.length === 1 && _vars_js__WEBPACK_IMPORTED_MODULE_2__.authErrorName.textContent.length === 1 || _vars_js__WEBPACK_IMPORTED_MODULE_2__.authErrorEmail.textContent.length === 0 && _vars_js__WEBPACK_IMPORTED_MODULE_2__.authEmail.value.length > 0 && _vars_js__WEBPACK_IMPORTED_MODULE_2__.authErrorPassword.textContent.length === 0 && _vars_js__WEBPACK_IMPORTED_MODULE_2__.authPassword.value.length > 0 && _vars_js__WEBPACK_IMPORTED_MODULE_2__.authErrorName.textContent.length === 0 && _vars_js__WEBPACK_IMPORTED_MODULE_2__.authName.value.length > 0) {
        _vars_js__WEBPACK_IMPORTED_MODULE_2__.authSubmit.disabled = false;
      } else {
        _vars_js__WEBPACK_IMPORTED_MODULE_2__.authSubmit.disabled = true;
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

/***/ "./resources/js/create.js":
/*!********************************!*\
  !*** ./resources/js/create.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-type.js */ "./resources/js/api-type.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ "./resources/js/api.js");
/* harmony import */ var _expressions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expressions.js */ "./resources/js/expressions.js");
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vars.js */ "./resources/js/vars.js");




var task = window.location.pathname.split('/');

if (_vars_js__WEBPACK_IMPORTED_MODULE_3__.createFirstname !== null && _vars_js__WEBPACK_IMPORTED_MODULE_3__.createEmail !== null && _vars_js__WEBPACK_IMPORTED_MODULE_3__.createSubmit !== null && _vars_js__WEBPACK_IMPORTED_MODULE_3__.createErrorName !== null && _vars_js__WEBPACK_IMPORTED_MODULE_3__.createErrorEmail !== null) {
  var inputCreateFirstName = function inputCreateFirstName() {
    if (!_vars_js__WEBPACK_IMPORTED_MODULE_3__.createFirstname.value.match(_expressions_js__WEBPACK_IMPORTED_MODULE_2__.PATTERNFIRSTNAME)) _vars_js__WEBPACK_IMPORTED_MODULE_3__.createErrorName.innerHTML = 'NAME has only letters, length[3,20]';else _vars_js__WEBPACK_IMPORTED_MODULE_3__.createErrorName.innerHTML = ' ';
  };

  var inputCreateEmail = function inputCreateEmail() {
    task[1] === 'two' ? (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.apiCheckEmail)(_api_type_js__WEBPACK_IMPORTED_MODULE_0__.CHECKEMAILGO, _vars_js__WEBPACK_IMPORTED_MODULE_3__.createEmail.value, _vars_js__WEBPACK_IMPORTED_MODULE_3__.createErrorEmail) : (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.apiCheckEmail)(_api_type_js__WEBPACK_IMPORTED_MODULE_0__.CHECKEMAIL, _vars_js__WEBPACK_IMPORTED_MODULE_3__.createEmail.value, _vars_js__WEBPACK_IMPORTED_MODULE_3__.createErrorEmail);
    if (!_vars_js__WEBPACK_IMPORTED_MODULE_3__.createEmail.value.match(_expressions_js__WEBPACK_IMPORTED_MODULE_2__.PATTERNEMAIL)) _vars_js__WEBPACK_IMPORTED_MODULE_3__.createErrorEmail.innerHTML = 'EMAIL has letters and numbers, length[3,40]';else _vars_js__WEBPACK_IMPORTED_MODULE_3__.createErrorEmail.innerHTML = ' ';
  };

  _vars_js__WEBPACK_IMPORTED_MODULE_3__.createFirstname.oninput = inputCreateFirstName;
  ;
  _vars_js__WEBPACK_IMPORTED_MODULE_3__.createEmail.oninput = inputCreateEmail;
  ;
  document.addEventListener('DOMContentLoaded', function () {
    var callback = function callback() {
      if (_vars_js__WEBPACK_IMPORTED_MODULE_3__.createErrorName.textContent.length === 1 && _vars_js__WEBPACK_IMPORTED_MODULE_3__.createErrorEmail.textContent.length === 1) {
        _vars_js__WEBPACK_IMPORTED_MODULE_3__.createSubmit.disabled = false;
        _vars_js__WEBPACK_IMPORTED_MODULE_3__.createSubmit.className = 'btn success';
      } else {
        _vars_js__WEBPACK_IMPORTED_MODULE_3__.createSubmit.disabled = true;
        _vars_js__WEBPACK_IMPORTED_MODULE_3__.createSubmit.className = 'btn disabled';
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
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vars.js */ "./resources/js/vars.js");
/* harmony import */ var _expressions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expressions.js */ "./resources/js/expressions.js");




var task = window.location.pathname.split('/');

if (_vars_js__WEBPACK_IMPORTED_MODULE_2__.editEmail !== null && _vars_js__WEBPACK_IMPORTED_MODULE_2__.editSubmit !== null && _vars_js__WEBPACK_IMPORTED_MODULE_2__.editErrorName !== null && _vars_js__WEBPACK_IMPORTED_MODULE_2__.editErrorEmail !== null) {
  _vars_js__WEBPACK_IMPORTED_MODULE_2__.editErrorName.innerHTML = ' ';
  _vars_js__WEBPACK_IMPORTED_MODULE_2__.editErrorEmail.innerHTML = ' ';
  var start_mail = _vars_js__WEBPACK_IMPORTED_MODULE_2__.editEmail.value;
  _vars_js__WEBPACK_IMPORTED_MODULE_2__.editFirstname.oninput = inputEditFirstname;

  var inputEditFirstname = function inputEditFirstname() {
    if (!_vars_js__WEBPACK_IMPORTED_MODULE_2__.editFirstname.value.match(_expressions_js__WEBPACK_IMPORTED_MODULE_3__.PATTERNFIRSTNAME)) _vars_js__WEBPACK_IMPORTED_MODULE_2__.editErrorName.innerHTML = 'NAME has only letters, length[3,20]';else _vars_js__WEBPACK_IMPORTED_MODULE_2__.editErrorName.innerHTML = ' ';
  };

  _vars_js__WEBPACK_IMPORTED_MODULE_2__.editEmail.oninput = inputEditEmail;

  var inputEditEmail = function inputEditEmail() {
    if (task[1] === 'two') {
      (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.apiCheckEmail)(_api_type_js__WEBPACK_IMPORTED_MODULE_0__.CHECKEMAILGO, _vars_js__WEBPACK_IMPORTED_MODULE_2__.editEmail.value, _vars_js__WEBPACK_IMPORTED_MODULE_2__.editErrorEmail);
      start_mail !== _vars_js__WEBPACK_IMPORTED_MODULE_2__.editEmail.value && (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.apiCheckEmail)(_api_type_js__WEBPACK_IMPORTED_MODULE_0__.CHECKEMAIL, _vars_js__WEBPACK_IMPORTED_MODULE_2__.editEmail.value, _vars_js__WEBPACK_IMPORTED_MODULE_2__.editErrorEmail);
    } else {
      (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.apiCheckEmail)(_api_type_js__WEBPACK_IMPORTED_MODULE_0__.CHECKEMAIL, _vars_js__WEBPACK_IMPORTED_MODULE_2__.editEmail.value, _vars_js__WEBPACK_IMPORTED_MODULE_2__.editErrorEmail);
      start_mail !== _vars_js__WEBPACK_IMPORTED_MODULE_2__.editEmail.value && (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.apiCheckEmail)(_api_type_js__WEBPACK_IMPORTED_MODULE_0__.CHECKEMAILGO, _vars_js__WEBPACK_IMPORTED_MODULE_2__.editEmail.value, _vars_js__WEBPACK_IMPORTED_MODULE_2__.editErrorEmail);
    }

    if (!_vars_js__WEBPACK_IMPORTED_MODULE_2__.editEmail.value.match(_expressions_js__WEBPACK_IMPORTED_MODULE_3__.PATTERNEMAIL)) _vars_js__WEBPACK_IMPORTED_MODULE_2__.editErrorEmail.innerHTML = 'EMAIL has letters and numbers, length[3,40]';else _vars_js__WEBPACK_IMPORTED_MODULE_2__.editErrorEmail.innerHTML = ' ';
  };

  document.addEventListener('DOMContentLoaded', function () {
    var callback = function callback() {
      if (_vars_js__WEBPACK_IMPORTED_MODULE_2__.editErrorName.textContent.length === 1 && _vars_js__WEBPACK_IMPORTED_MODULE_2__.editErrorEmail.textContent.length === 1) {
        _vars_js__WEBPACK_IMPORTED_MODULE_2__.editSubmit.disabled = false;
        _vars_js__WEBPACK_IMPORTED_MODULE_2__.editSubmit.className = 'btn success';
      } else {
        _vars_js__WEBPACK_IMPORTED_MODULE_2__.editSubmit.disabled = true;
        _vars_js__WEBPACK_IMPORTED_MODULE_2__.editSubmit.className = 'btn disabled';
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

/***/ "./resources/js/errors.js":
/*!********************************!*\
  !*** ./resources/js/errors.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTORIZATIONERROR": () => (/* binding */ AUTORIZATIONERROR),
/* harmony export */   "MAILERROR": () => (/* binding */ MAILERROR),
/* harmony export */   "NAMEERROR": () => (/* binding */ NAMEERROR),
/* harmony export */   "PASSWORDERROR": () => (/* binding */ PASSWORDERROR),
/* harmony export */   "PASSWORDERROR_EMPTY_REG": () => (/* binding */ PASSWORDERROR_EMPTY_REG),
/* harmony export */   "PASSWORDERROR_NOT_EQUAL_REG": () => (/* binding */ PASSWORDERROR_NOT_EQUAL_REG),
/* harmony export */   "PASSWORDERROR_REG": () => (/* binding */ PASSWORDERROR_REG),
/* harmony export */   "UPLOADERRORS_1": () => (/* binding */ UPLOADERRORS_1),
/* harmony export */   "UPLOADERRORS_2": () => (/* binding */ UPLOADERRORS_2)
/* harmony export */ });
var UPLOADERRORS_1 = 'Max file size is 200kByt';
var UPLOADERRORS_2 = 'Only png,jpeg,txt';
var MAILERROR = 'example: dgg34d@test.by';
var NAMEERROR = 'Only latters[3-20]';
var PASSWORDERROR = 'Only latters and numbers[10-20]';
var AUTORIZATIONERROR = 'Email is taken';
var PASSWORDERROR_REG = 'upper and lower case latters, numbers, symbols[6-20]';
var PASSWORDERROR_EMPTY_REG = 'Password is empty';
var PASSWORDERROR_NOT_EQUAL_REG = 'Password is not equal';

/***/ }),

/***/ "./resources/js/expressions.js":
/*!*************************************!*\
  !*** ./resources/js/expressions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PATTERNEMAIL": () => (/* binding */ PATTERNEMAIL),
/* harmony export */   "PATTERNFIRSTNAME": () => (/* binding */ PATTERNFIRSTNAME),
/* harmony export */   "PATTERNNAME": () => (/* binding */ PATTERNNAME),
/* harmony export */   "PATTERNPASSWORD": () => (/* binding */ PATTERNPASSWORD),
/* harmony export */   "PATTERNPASSWORD_REG": () => (/* binding */ PATTERNPASSWORD_REG)
/* harmony export */ });
var PATTERNFIRSTNAME = /^(([A-Za-z]|.){3,50})$/g;
var PATTERNEMAIL = /^(([a-zA-Z0-9]{3,26})@([a-z]{3,10}).(com|ru|by))$/g;
var PATTERNNAME = /^([A-Za-z]{3,20})$/g;
var PATTERNPASSWORD = /^([A-Za-z0-9]{10,20})$/g;
var PATTERNPASSWORD_REG = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=_-]).{8,15})$/g;

/***/ }),

/***/ "./resources/js/registration.js":
/*!**************************************!*\
  !*** ./resources/js/registration.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _expressions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expressions.js */ "./resources/js/expressions.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors.js */ "./resources/js/errors.js");
/* harmony import */ var _api_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-type */ "./resources/js/api-type.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./resources/js/api.js");
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vars.js */ "./resources/js/vars.js");





document.cookie && _vars_js__WEBPACK_IMPORTED_MODULE_4__.successBlock.classList.add('register_success');

if (_vars_js__WEBPACK_IMPORTED_MODULE_4__.registration !== null) {
  var regFirstnameFunc = function regFirstnameFunc() {
    if (!_vars_js__WEBPACK_IMPORTED_MODULE_4__.regFirstname.value.match(_expressions_js__WEBPACK_IMPORTED_MODULE_0__.PATTERNNAME)) _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorFirstname.textContent = _errors_js__WEBPACK_IMPORTED_MODULE_1__.NAMEERROR;else _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorFirstname.textContent = ' ';
    if (_vars_js__WEBPACK_IMPORTED_MODULE_4__.regFirstname.value.length === 0) _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorFirstname.textContent = '';
  };

  var regLastnameFunc = function regLastnameFunc() {
    if (!_vars_js__WEBPACK_IMPORTED_MODULE_4__.regLastname.value.match(_expressions_js__WEBPACK_IMPORTED_MODULE_0__.PATTERNNAME)) _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorLastname.textContent = _errors_js__WEBPACK_IMPORTED_MODULE_1__.NAMEERROR;else _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorLastname.textContent = ' ';
    if (_vars_js__WEBPACK_IMPORTED_MODULE_4__.regLastname.value.length === 0) _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorLastname.textContent = '';
  };

  var regEmailFunc = function regEmailFunc() {
    if (!_vars_js__WEBPACK_IMPORTED_MODULE_4__.regEmail.value.match(_expressions_js__WEBPACK_IMPORTED_MODULE_0__.PATTERNEMAIL)) _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorEmail.textContent = _errors_js__WEBPACK_IMPORTED_MODULE_1__.MAILERROR;else (0,_api__WEBPACK_IMPORTED_MODULE_3__.apiCheckEmail)(_api_type__WEBPACK_IMPORTED_MODULE_2__.CHECKEMAILREG, _vars_js__WEBPACK_IMPORTED_MODULE_4__.regEmail.value, _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorEmail);
    if (_vars_js__WEBPACK_IMPORTED_MODULE_4__.regEmail.value.length === 0) _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorEmail.textContent = '';
  };

  var regPassFunc = function regPassFunc() {
    !_vars_js__WEBPACK_IMPORTED_MODULE_4__.regPass.value.match(_expressions_js__WEBPACK_IMPORTED_MODULE_0__.PATTERNPASSWORD_REG) ? _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorPass.textContent = _errors_js__WEBPACK_IMPORTED_MODULE_1__.PASSWORDERROR_REG : _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorPass.textContent = ' ';
    if (_vars_js__WEBPACK_IMPORTED_MODULE_4__.regPass.value.length === 0) _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorPass.textContent = '';
  };

  var regPassConfFunc = function regPassConfFunc() {
    _vars_js__WEBPACK_IMPORTED_MODULE_4__.regPass.value === _vars_js__WEBPACK_IMPORTED_MODULE_4__.regPassConf.value ? _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorPassConf.textContent = ' ' : _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorPass.textContent = _errors_js__WEBPACK_IMPORTED_MODULE_1__.PASSWORDERROR_NOT_EQUAL_REG;
    if (_vars_js__WEBPACK_IMPORTED_MODULE_4__.regPassConf.value.length === 0) _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorPass.textContent = '';
  };

  _vars_js__WEBPACK_IMPORTED_MODULE_4__.regFirstname.oninput = regFirstnameFunc;
  _vars_js__WEBPACK_IMPORTED_MODULE_4__.regLastname.oninput = regLastnameFunc;
  _vars_js__WEBPACK_IMPORTED_MODULE_4__.regEmail.oninput = regEmailFunc;
  _vars_js__WEBPACK_IMPORTED_MODULE_4__.regPass.oninput = regPassFunc;
  _vars_js__WEBPACK_IMPORTED_MODULE_4__.regPassConf.oninput = regPassConfFunc;
  document.addEventListener('DOMContentLoaded', function () {
    var callback = function callback() {
      if (_vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorFirstname.textContent.length === 1 && _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorLastname.textContent.length === 1 && _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorEmail.textContent.length === 1 && _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorPass.textContent.length === 1 && _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorPassConf.textContent.length === 1 || _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorFirstname.textContent.length === 0 && _vars_js__WEBPACK_IMPORTED_MODULE_4__.regFirstname.value.length > 0 && _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorLastname.textContent.length === 0 && _vars_js__WEBPACK_IMPORTED_MODULE_4__.regLastname.value.length > 0 && _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorEmail.textContent.length === 0 && _vars_js__WEBPACK_IMPORTED_MODULE_4__.regEmail.value.length > 0 && _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorPass.textContent.length === 0 && _vars_js__WEBPACK_IMPORTED_MODULE_4__.regPass.value.length > 0 && _vars_js__WEBPACK_IMPORTED_MODULE_4__.regErrorPassConf.textContent.length === 0 && _vars_js__WEBPACK_IMPORTED_MODULE_4__.regPassConf.value.length > 0) {
        _vars_js__WEBPACK_IMPORTED_MODULE_4__.regSubmit.disabled = false;
      } else {
        _vars_js__WEBPACK_IMPORTED_MODULE_4__.regSubmit.disabled = true;
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

/***/ "./resources/js/upload.js":
/*!********************************!*\
  !*** ./resources/js/upload.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./resources/js/errors.js");
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vars.js */ "./resources/js/vars.js");



if (_vars_js__WEBPACK_IMPORTED_MODULE_1__.uploadSubmit !== null && _vars_js__WEBPACK_IMPORTED_MODULE_1__.uploadFile !== null && _vars_js__WEBPACK_IMPORTED_MODULE_1__.uploadErrors !== null) {
  _vars_js__WEBPACK_IMPORTED_MODULE_1__.uploadFile.oninput = function () {
    if (_vars_js__WEBPACK_IMPORTED_MODULE_1__.uploadFile.files[0].size > 200000) {
      _vars_js__WEBPACK_IMPORTED_MODULE_1__.uploadErrors.innerHTML = _errors_js__WEBPACK_IMPORTED_MODULE_0__.UPLOADERRORS_1;
      _vars_js__WEBPACK_IMPORTED_MODULE_1__.uploadSubmit.disabled = true;
    }

    if (_vars_js__WEBPACK_IMPORTED_MODULE_1__.uploadFile.files[0].type !== 'image/png' && _vars_js__WEBPACK_IMPORTED_MODULE_1__.uploadFile.files[0].type !== 'image/jpeg' && _vars_js__WEBPACK_IMPORTED_MODULE_1__.uploadFile.files[0].type !== 'text/plain') {
      _vars_js__WEBPACK_IMPORTED_MODULE_1__.uploadErrors.innerHTML = _errors_js__WEBPACK_IMPORTED_MODULE_0__.UPLOADERRORS_2;
      _vars_js__WEBPACK_IMPORTED_MODULE_1__.uploadSubmit.disabled = true;
    } else {
      _vars_js__WEBPACK_IMPORTED_MODULE_1__.uploadErrors.innerHTML = ' ';
      _vars_js__WEBPACK_IMPORTED_MODULE_1__.uploadSubmit.disabled = false;
    }
  };
}

/***/ }),

/***/ "./resources/js/vars.js":
/*!******************************!*\
  !*** ./resources/js/vars.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authEmail": () => (/* binding */ authEmail),
/* harmony export */   "authErrorEmail": () => (/* binding */ authErrorEmail),
/* harmony export */   "authErrorName": () => (/* binding */ authErrorName),
/* harmony export */   "authErrorPassword": () => (/* binding */ authErrorPassword),
/* harmony export */   "authName": () => (/* binding */ authName),
/* harmony export */   "authPassword": () => (/* binding */ authPassword),
/* harmony export */   "authSubmit": () => (/* binding */ authSubmit),
/* harmony export */   "createEmail": () => (/* binding */ createEmail),
/* harmony export */   "createErrorEmail": () => (/* binding */ createErrorEmail),
/* harmony export */   "createErrorName": () => (/* binding */ createErrorName),
/* harmony export */   "createFirstname": () => (/* binding */ createFirstname),
/* harmony export */   "createSubmit": () => (/* binding */ createSubmit),
/* harmony export */   "editEmail": () => (/* binding */ editEmail),
/* harmony export */   "editErrorEmail": () => (/* binding */ editErrorEmail),
/* harmony export */   "editErrorName": () => (/* binding */ editErrorName),
/* harmony export */   "editFirstname": () => (/* binding */ editFirstname),
/* harmony export */   "editSubmit": () => (/* binding */ editSubmit),
/* harmony export */   "regEmail": () => (/* binding */ regEmail),
/* harmony export */   "regErrorEmail": () => (/* binding */ regErrorEmail),
/* harmony export */   "regErrorFirstname": () => (/* binding */ regErrorFirstname),
/* harmony export */   "regErrorLastname": () => (/* binding */ regErrorLastname),
/* harmony export */   "regErrorPass": () => (/* binding */ regErrorPass),
/* harmony export */   "regErrorPassConf": () => (/* binding */ regErrorPassConf),
/* harmony export */   "regFirstname": () => (/* binding */ regFirstname),
/* harmony export */   "regLastname": () => (/* binding */ regLastname),
/* harmony export */   "regPass": () => (/* binding */ regPass),
/* harmony export */   "regPassConf": () => (/* binding */ regPassConf),
/* harmony export */   "regSubmit": () => (/* binding */ regSubmit),
/* harmony export */   "registration": () => (/* binding */ registration),
/* harmony export */   "successBlock": () => (/* binding */ successBlock),
/* harmony export */   "uploadErrors": () => (/* binding */ uploadErrors),
/* harmony export */   "uploadFile": () => (/* binding */ uploadFile),
/* harmony export */   "uploadSubmit": () => (/* binding */ uploadSubmit)
/* harmony export */ });
var uploadSubmit = document.getElementById('upload_submit');
var uploadFile = document.getElementById('formFile');
var uploadErrors = document.getElementById('upload_errors');
var authEmail = document.getElementById('auth_email');
var authPassword = document.getElementById('auth_password');
var authName = document.getElementById('auth_name');
var authSubmit = document.getElementById('auth_submit');
var authErrorEmail = document.getElementById('auth_error_email');
var authErrorPassword = document.getElementById('auth_error_password');
var authErrorName = document.getElementById('auth_error_name');
var createFirstname = document.getElementById('create_name');
var createEmail = document.getElementById('create_email');
var createSubmit = document.getElementById('create_submit');
var createErrorName = document.getElementById('create_error_name');
var createErrorEmail = document.getElementById('create_error_email');
var editFirstname = document.getElementById('edit_name');
var editEmail = document.getElementById('edit_email');
var editSubmit = document.getElementById('edit_submit');
var editErrorName = document.getElementById('edit_error_name');
var editErrorEmail = document.getElementById('edit_error_email');
var regFirstname = document.getElementById('reg_firstname');
var regLastname = document.getElementById('reg_lastname');
var regEmail = document.getElementById('reg_email');
var regPass = document.getElementById('reg_pass');
var regPassConf = document.getElementById('reg_pass_conf');
var regSubmit = document.getElementById('reg_submit');
var regErrorFirstname = document.getElementById('reg_error_firstname');
var regErrorLastname = document.getElementById('reg_error_lastname');
var regErrorEmail = document.getElementById('reg_error_email');
var regErrorPass = document.getElementById('reg_error_pass');
var regErrorPassConf = document.getElementById('reg_error_pass_conf');
var registration = document.getElementById('registration');
var successBlock = document.getElementById('success_block');

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