import {PATTERNNAME,PATTERNPASSWORD,PATTERNEMAIL} from './expressions.js';
import {NAMEERROR,PASSWORDERROR, MAILERROR} from './errors.js';
import { CHECKEMAILFORM } from './api-type.js';
import { apiCheckEmail } from './api.js';

const regEmail = document.getElementById('reg_email');
const regPassword = document.getElementById('reg_password');
const regName = document.getElementById('reg_name');
const regSubmit = document.getElementById('reg_submit');
const regErrorEmail = document.getElementById('reg_error_email');
const regErrorPassword = document.getElementById('reg_error_password');
const regErrorName = document.getElementById('reg_error_name');

if(regEmail!==null && regPassword!==null && regName!==null && regSubmit!==null && regErrorEmail!==null && regErrorPassword!==null && regErrorName!==0){  
  const regEmailFunc = () => {
    if(!regEmail.value.match(PATTERNEMAIL)) regErrorEmail.textContent = MAILERROR;
    else apiCheckEmail(CHECKEMAILFORM, regEmail.value, regErrorEmail);
  }
  
  const regPasswordFunc = () => {
    if(!regPassword.value.match(PATTERNPASSWORD)) regErrorPassword.textContent = PASSWORDERROR;
    else regErrorPassword.textContent = ' ';
  }

  const regNameFunc = () => {
    if(!regName.value.match(PATTERNNAME)) regErrorName.textContent = NAMEERROR;
    else regErrorName.textContent = ' ';
  }

  regEmail.oninput = regEmailFunc;
  regPassword.oninput = regPasswordFunc;
  regName.oninput = regNameFunc;
  
  document.addEventListener('DOMContentLoaded', function () {
    const callback = () => {
      if (regErrorEmail.textContent.length === 1 && regErrorPassword.textContent.length === 1) {
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
