import {checkEmail} from './api-type.js';
import {apiCheckEmail} from './api.js';

const firstname = document.getElementById('name');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const submit = document.getElementById('submit');

const error_name = document.getElementById('error_name');
const error_lastname = document.getElementById('error_lastname');
const error_email = document.getElementById('error_email');

firstname.oninput = function () {
  if (!firstname.value.match(/^([A-Za-z]{3,20})$/g)) error_name.innerHTML = 'NAME has only letters, length[3,20]';
  else error_name.innerHTML = ' ';
};

lastname.oninput = function () {
  if (!lastname.value.match(/^([A-Za-z]{3,20})$/g)) error_lastname.innerHTML = 'LASTNAME has only letters, length[3,20]';
  else error_lastname.innerHTML = ' ';
};

email.oninput = function () {
  apiCheckEmail(checkEmail,email.value, error_email);
  if (!email.value.match(/^(([a-zA-Z0-9]{3,40})@(gmail.com|yandex.ru|mail.ru))$/g)) error_email.innerHTML = 'EMAIL has letters and numbers, length[3,40]';
  else error_email.innerHTML = ' ';
};

document.addEventListener('DOMContentLoaded', function () {
  const callback = () => {
    if(error_name.textContent.length === 1 && error_lastname.textContent.length === 1 && error_email.textContent.length === 1) {
      submit.disabled = false;
    }else{
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



