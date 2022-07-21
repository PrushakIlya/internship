import { PATTERNNAME, PATTERNPASSWORD, PATTERNEMAIL } from './expressions.js';
import { NAMEERROR, PASSWORDERROR, MAILERROR } from './errors.js';
import { authEmail, authPassword, authName, authSubmit, authErrorEmail, authErrorPassword, authErrorName } from './vars.js';
import { getCookie } from './all-functions.js';

if (
  authEmail !== null &&
  authPassword !== null &&
  authName !== null &&
  authSubmit !== null &&
  authErrorEmail !== null &&
  authErrorPassword !== null &&
  authErrorName !== 0
) {
  if (document.cookie) {
    authErrorName.textContent = getCookie(document.cookie);
  }

  const authEmailFunc = () => {
    if (!authEmail.value.match(PATTERNEMAIL)) authErrorEmail.textContent = MAILERROR;
    else authErrorEmail.textContent = ' ';
    if (authEmail.value.length === 0) authErrorEmail.textContent = '';
  };

  const authPasswordFunc = () => {
    if (!authPassword.value.match(PATTERNPASSWORD)) authErrorPassword.textContent = PASSWORDERROR;
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
