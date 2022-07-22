import { PATTERNNAME, PATTERNPASSWORD_REG, PATTERNEMAIL } from './expressions.js';
import { NAMEERROR, PASSWORDERROR_REG, MAILERROR } from './errors.js';
import { combineAuthorisation, authEmail, authPassword, authName, authSubmit, authErrorEmail, authErrorPassword, authErrorName } from './vars.js';
import { getCookieCombine } from './all-functions.js';

if (combineAuthorisation !== null) {
  if (  document.cookie.includes('error')) {
    authErrorName.textContent = getCookieCombine(document.cookie);
  }

  const authEmailFunc = () => {
    if (!authEmail.value.match(PATTERNEMAIL)) authErrorEmail.textContent = MAILERROR;
    else authErrorEmail.textContent = ' ';
    if (authEmail.value.length === 0) authErrorEmail.textContent = '';
  };

  const authPasswordFunc = () => {
    if (!authPassword.value.match(PATTERNPASSWORD_REG)) authErrorPassword.textContent = PASSWORDERROR_REG;
    else authErrorPassword.textContent = ' ';
    if (authPassword.value.length === 0) authErrorPassword.textContent = '';
  };

  const authNameFunc = () => {
    if (!authName.value.match(PATTERNNAME)) authErrorName.textContent = NAMEERROR;
    else authErrorName.textContent = ' ';
    if (authName.value.length === 0) authErrorName.textContent = '';
  };

  authEmail.oninput = authEmailFunc;
  authPassword.oninput = authPasswordFunc;
  authName.oninput = authNameFunc;

  document.addEventListener('DOMContentLoaded', function () {
    const callback = () => {
      if (
        (authErrorEmail.textContent.length === 1 && authErrorPassword.textContent.length === 1 && authErrorName.textContent.length === 1) ||
        (authErrorEmail.textContent.length === 0 &&
          authEmail.value.length > 0 &&
          authErrorPassword.textContent.length === 0 &&
          authPassword.value.length > 0 &&
          authErrorName.textContent.length === 0 &&
          authName.value.length > 0)
      ) {
        authSubmit.disabled = false;
      } else {
        authSubmit.disabled = true;
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
