import {checkEmail} from './api-type.js';
import {apiCheckEmail} from './api.js';
const edit_firstname = document.getElementById('edit_name');
const edit_lastname = document.getElementById('edit_lastname');
const edit_email = document.getElementById('edit_email');
const edit_submit = document.getElementById('edit_submit');

const edit_error_name = document.getElementById('edit_error_name');
const edit_error_lastname = document.getElementById('edit_error_lastname');
const edit_error_email = document.getElementById('edit_error_email');

if(edit_firstname!==null && edit_lastname!==null && edit_email!==null && edit_submit!==null && edit_error_name!==null && edit_error_lastname!==null && edit_error_email!==null){
  edit_error_name.innerHTML = ' ';
  edit_error_lastname.innerHTML = ' ';
  edit_error_email.innerHTML = ' ';
  
  const start_mail = edit_email.value;
  
  edit_firstname.oninput = function () {
    if (!edit_firstname.value.match(/^([A-Za-z]{3,20})$/g)) edit_error_name.innerHTML = 'NAME has only letters, length[3,20]';
    else edit_error_name.innerHTML = ' ';
  };
  
  edit_lastname.oninput = function () {
    if (!edit_lastname.value.match(/^([A-Za-z]{3,20})$/g)) edit_error_lastname.innerHTML = 'LASTNAME has only letters, length[3,20]';
    else edit_error_lastname.innerHTML = ' ';
  };
  
  edit_email.oninput = function () {
    if(start_mail !== edit_email.value) apiCheckEmail(checkEmail,edit_email.value, edit_error_email);
    if (!edit_email.value.match(/^(([a-zA-Z0-9]{3,40})@(gmail.com|yandex.ru|mail.ru))$/g)) edit_error_email.innerHTML = 'EMAIL has letters and numbers, length[3,40]';
    else edit_error_email.innerHTML = ' ';
  };
  document.addEventListener('DOMContentLoaded', function () {
    const callback = () => {
      if(edit_error_name.textContent.length === 1 && edit_error_lastname.textContent.length === 1 && edit_error_email.textContent.length === 1) {
        edit_submit.disabled = false;
        edit_submit.className = 'btn success'
      }
      else{
        edit_submit.disabled = true;
        edit_submit.className = 'btn disabled'
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




