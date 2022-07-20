import { PATTERNNAME, PATTERNEMAIL, PATTERNPASSWORD_REG } from './expressions.js';
import { NAMEERROR, MAILERROR, PASSWORDERROR_REG, PASSWORDERROR_EMPTY_REG, PASSWORDERROR_NOT_EQUAL_REG } from './errors.js';
import { CHECKEMAILREG } from './api-type';
import { apiCheckEmail } from './api';
import {
  regFirstname,
  regLastname,
  regEmail,
  regPass,
  regPassConf,
  regSubmit,
  regErrorFirstname,
  regErrorLastname,
  regErrorEmail,
  regErrorPass,
  regErrorPassConf,
  registration,
  successBlock,
} from './vars.js';

document.cookie && successBlock.classList.add('register_success');

if (registration !== null) {
  const regFirstnameFunc = () => {
    if (!regFirstname.value.match(PATTERNNAME)) regErrorFirstname.textContent = NAMEERROR;
    else regErrorFirstname.textContent = ' ';
    if (regFirstname.value.length === 0) regErrorFirstname.textContent = '';
  };

  const regLastnameFunc = () => {
    if (!regLastname.value.match(PATTERNNAME)) regErrorLastname.textContent = NAMEERROR;
    else regErrorLastname.textContent = ' ';
    if (regLastname.value.length === 0) regErrorLastname.textContent = '';
  };

  const regEmailFunc = () => {
    if (!regEmail.value.match(PATTERNEMAIL)) regErrorEmail.textContent = MAILERROR;
    else apiCheckEmail(CHECKEMAILREG, regEmail.value, regErrorEmail);
    if (regEmail.value.length === 0) regErrorEmail.textContent = '';
  };

  const regPassFunc = () => {
    !regPass.value.match(PATTERNPASSWORD_REG) ? (regErrorPass.textContent = PASSWORDERROR_REG) : (regErrorPass.textContent = ' ');
    if (regPass.value.length === 0) regErrorPass.textContent = '';
  };

  const regPassConfFunc = () => {
    regPass.value === regPassConf.value ? (regErrorPassConf.textContent = ' ') : (regErrorPass.textContent = PASSWORDERROR_NOT_EQUAL_REG);
    if (regPassConf.value.length === 0) regErrorPass.textContent = '';
  };

  regFirstname.oninput = regFirstnameFunc;
  regLastname.oninput = regLastnameFunc;
  regEmail.oninput = regEmailFunc;
  regPass.oninput = regPassFunc;
  regPassConf.oninput = regPassConfFunc;

  document.addEventListener('DOMContentLoaded', function () {
    const callback = () => {
      if (
        regErrorFirstname.textContent.length === 1 &&
        regErrorLastname.textContent.length === 1 &&
        regErrorEmail.textContent.length === 1 &&
        regErrorPass.textContent.length === 1 &&
        regErrorPassConf.textContent.length === 1
      ) {
        regSubmit.disabled = false;
      } else {
        regSubmit.disabled = true;
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
