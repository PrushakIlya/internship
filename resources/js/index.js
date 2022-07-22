import { PATTERNNAME, PATTERNEMAIL, PATTERNPASSWORD } from './exports/expressions.js';
import { NAMEERROR, MAILERROR, PASSWORDERROR, PASSWORDERROR_NOT_EQUAL } from './exports/errors.js';
import { CHECKEMAIL } from './exports/api-type.js';
import { apiCheckEmail } from './exports/api.js';
import {
  firstname,
  lastname,
  email,
  password,
  passwordConf,
  submit,
  errorFirstname,
  errorLastname,
  errorEmail,
  errorPassword,
  errorPasswordConf,
  sectionIndex,
  successBlock,
} from './exports/getElementById.js';

if (sectionIndex !== null) {
  document.cookie.includes('success') && successBlock.classList.add('register_success');
  const firstnameFunc = () => {
    if (!firstname.value.match(PATTERNNAME)) errorFirstname.textContent = NAMEERROR;
    else errorFirstname.textContent = ' ';
    if (firstname.value.length === 0) errorFirstname.textContent = '';
  };

  const lastnameFunc = () => {
    if (!lastname.value.match(PATTERNNAME)) errorLastname.textContent = NAMEERROR;
    else errorLastname.textContent = ' ';
    if (lastname.value.length === 0) errorLastname.textContent = '';
  };

  const emailFunc = () => {
    if (!email.value.match(PATTERNEMAIL)) errorEmail.textContent = MAILERROR;
    else apiCheckEmail(CHECKEMAIL, email.value, errorEmail);
    if (email.value.length === 0) errorEmail.textContent = '';
  };

  const passwordFunc = () => {
    !password.value.match(PATTERNPASSWORD) ? (errorPassword.textContent = PASSWORDERROR) : (errorPassword.textContent = ' ');
    if (password.value.length === 0) errorPassword.textContent = '';
  };

  const passwordConfFunc = () => {
    password.value === passwordConf.value ? (errorPasswordConf.textContent = ' ') : (errorPassword.textContent = PASSWORDERROR_NOT_EQUAL);
    if (passwordConf.value.length === 0) errorPassword.textContent = '';
  };

  firstname.oninput = firstnameFunc;
  lastname.oninput = lastnameFunc;
  email.oninput = emailFunc;
  password.oninput = passwordFunc;
  passwordConf.oninput = passwordConfFunc;

  document.addEventListener('DOMContentLoaded', function () {
    const callback = () => {
      if (
        (errorFirstname.textContent.length === 1 &&
          errorLastname.textContent.length === 1 &&
          errorEmail.textContent.length === 1 &&
          errorPassword.textContent.length === 1 &&
          errorPasswordConf.textContent.length === 1) ||
        (errorFirstname.textContent.length === 0 &&
          firstname.value.length > 0 &&
          errorLastname.textContent.length === 0 &&
          lastname.value.length > 0 &&
          errorEmail.textContent.length === 0 &&
          email.value.length > 0 &&
          errorPassword.textContent.length === 0 &&
          password.value.length > 0 &&
          errorPasswordConf.textContent.length === 0 &&
          passwordConf.value.length > 0)
      ) {
        submit.disabled = false;
      } else {
        submit.disabled = true;
      }
    };
    let observer = new MutationObserver(callback);

    const elem = document.querySelector('body');

    observer.observe(elem, {
      childList: true,
      subtree: true,
    });
  });
}
