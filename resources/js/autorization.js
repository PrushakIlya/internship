import { PATTERNNAME, PATTERNPASSWORD, PATTERNEMAIL } from './exports/expressions.js';
import { NAMEERROR, PASSWORDERROR, MAILERROR } from './exports/errors.js';
import { sectionAuthorisation, email, password, firstname, submit, errorEmail, errorPassword, errorFirstname } from './exports/getElementById.js';
import { getCookieCombine } from './all-functions.js';

if (sectionAuthorisation !== null) {
  if (document.cookie.includes('error')) {
    const cookies = document.cookie.split(';');
    cookies.forEach(element => {
      const el = element.split('=');
      if (el[0].trim() === 'error') {
        const value = el[1].replaceAll('%20', ' ');
        errorFirstname.textContent = value;
        return 0;
      }
    });
  }

  const emailFunc = () => {
    if (!email.value.match(PATTERNEMAIL)) errorEmail.textContent = MAILERROR;
    else errorEmail.textContent = ' ';
    if (email.value.length === 0) errorEmail.textContent = '';
  };

  const passwordFunc = () => {
    if (!password.value.match(PATTERNPASSWORD)) errorPassword.textContent = PASSWORDERROR;
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
        (errorEmail.textContent.length === 1 && errorPassword.textContent.length === 1 && errorFirstname.textContent.length === 1) ||
        (errorEmail.textContent.length === 0 &&
          email.value.length > 0 &&
          errorPassword.textContent.length === 0 &&
          password.value.length > 0 &&
          errorFirstname.textContent.length === 0 &&
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
