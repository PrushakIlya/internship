import { PATTERNNAME, PATTERNPASSWORD, PATTERNEMAIL } from './exports/expressions.js';
import { NAMEERROR, PASSWORDERROR_REG, MAILERROR } from './exports/errors.js';
import { sectionAuthorisation, email, password, firstname, submit, errorEmail, errorPassword, errorFirstname } from './exports/getElementById.js';
import { getCookieCombine } from './all-functions.js';

if (sectionAuthorisation !== null) {
  if (document.cookie.includes('error')) {
    errorName.textContent = getCookieCombine(document.cookie);
  }

  const emailFunc = () => {
    if (!email.value.match(PATTERNEMAIL)) errorEmail.textContent = MAILERROR;
    else errorEmail.textContent = ' ';
    if (email.value.length === 0) errorEmail.textContent = '';
  };

  const passwordFunc = () => {
    if (!password.value.match(PATTERNPASSWORD)) errorPassword.textContent = PASSWORDERROR_REG;
    else errorPassword.textContent = ' ';
    if (password.value.length === 0) errorPassword.textContent = '';
  };

  const firstnameFunc = () => {
    if (!firstname.value.match(PATTERNNAME)) errorFirstname.textContent = NAMEERROR;
    else errorFirstname.textContent = ' ';
    if (firstname.value.length === 0) errorFirstname.textContent = '';
  };

  email.oninput = emailFunc;
  password.oninput = passwordFunc;
  firstname.oninput = firstnameFunc;

  document.addEventListener('DOMContentLoaded', function () {
    const callback = () => {
      if (
        (errorEmail.textContent.length === 1 && errorPassword.textContent.length === 1 && errorName.textContent.length === 1) ||
        (errorEmail.textContent.length === 0 &&
          email.value.length > 0 &&
          errorPassword.textContent.length === 0 &&
          password.value.length > 0 &&
          errorName.textContent.length === 0 &&
          firstname.value.length > 0)
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
