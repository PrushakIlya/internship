import {checkEmail,checkEmailGo} from './api-type.js';
import {apiCheckEmail} from './api.js';

const create_firstname = document.getElementById('create_name');
const create_email = document.getElementById('create_email');
const create_submit = document.getElementById('create_submit');

const create_error_name = document.getElementById('create_error_name');
const create_error_email = document.getElementById('create_error_email');

if(create_firstname!==null && create_email!==null && create_submit!==null && create_error_name!==null && create_error_email!==null){
  create_firstname.oninput = function () {
    if (!create_firstname.value.match(/^(([A-Za-z]{3,10})(\s)([A-Za-z]{3,10}))$/g)) create_error_name.innerHTML = 'NAME has only letters, example: Ilya Prushak';
    else create_error_name.innerHTML = ' ';
  };
  
  create_email.oninput = function () {
    apiCheckEmail(checkEmail,create_email.value, create_error_email) || apiCheckEmail(checkEmailGo,create_email.value, create_error_email);
    if(!create_email.value.match(/^(([a-zA-Z0-9]{3,40})@([a-z]+).(com|yandex|ru))$/g)) create_error_email.innerHTML = 'EMAIL has letters and numbers, length[3,40]';
    else create_error_email.innerHTML = ' ';
  };
  
  document.addEventListener('DOMContentLoaded', function () {
    const callback = () => {
      if(create_error_name.textContent.length === 1 && create_error_email.textContent.length === 1) {
        create_submit.disabled = false;
        create_submit.className = 'btn success'
      }else{
        create_submit.disabled = true;
        create_submit.className = 'btn disabled'
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




