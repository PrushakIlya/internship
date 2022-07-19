import {PATTERNNAME,PATTERNPASSWORD,PATTERNEMAIL} from './expressions.js';
import {NAMEERROR,PASSWORDERROR, MAILERROR} from './errors.js';
import { CHECKEMAILFORM } from './api-type.js';
import { apiCheckEmail } from './api.js';


const authEmail = document.getElementById('auth_email');
const authPassword = document.getElementById('auth_password');
const authName = document.getElementById('auth_name');
const authSubmit = document.getElementById('auth_submit');
const authErrorEmail = document.getElementById('auth_error_email');
const authErrorPassword = document.getElementById('auth_error_password');
const authErrorName = document.getElementById('auth_error_name');

if(authEmail!==null && authPassword!==null && authName!==null && authSubmit!==null && authErrorEmail!==null && authErrorPassword!==null && authErrorName!==0){  
  
  const getCookie = (name) => {
    const cookie = document.cookie.split('=');
    let value = cookie[1].replaceAll('%20',' ');
    value = value.replaceAll('%21','');
    return value;
  }
  
  if(document.cookie){
    authErrorName.textContent = getCookie(document.cookie);
  }

  const authEmailFunc = () => {
    if(!authEmail.value.match(PATTERNEMAIL)) authErrorEmail.textContent = MAILERROR;
    else authErrorEmail.textContent = ' ';
  }
  
  const authPasswordFunc = () => {
    if(!authPassword.value.match(PATTERNPASSWORD)) authErrorPassword.textContent = PASSWORDERROR;
    else authErrorPassword.textContent = ' ';
  }

  const authNameFunc = () => {
    if(!authName.value.match(PATTERNNAME)) authErrorName.textContent = NAMEERROR;
    else authErrorName.textContent = ' ';
  }

  authEmail.oninput = authEmailFunc;
  authPassword.oninput = authPasswordFunc;
  authName.oninput = authNameFunc;
  
  document.addEventListener('DOMContentLoaded', function () {
    const callback = () => {
      if (authErrorEmail.textContent.length === 1 && authErrorPassword.textContent.length === 1) {
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