import {CHECKEMAIL,CHECKEMAILGO} from './api-type.js';
import {apiCheckEmail} from './api.js';
import { PATTERNFIRSTNAME,PATTERNEMAIL } from './expressions.js';
const task = window.location.pathname.split('/');

const edit_firstname = document.getElementById('edit_name');
const edit_email = document.getElementById('edit_email');
const edit_submit = document.getElementById('edit_submit');

const edit_error_name = document.getElementById('edit_error_name');
const edit_error_email = document.getElementById('edit_error_email');

if(edit_email!==null && edit_submit!==null && edit_error_name!==null && edit_error_email!==null){
  edit_error_name.innerHTML = ' ';
  edit_error_email.innerHTML = ' ';
  
  const start_mail = edit_email.value;
  
  edit_firstname.oninput = inputEditFirstname;
  function inputEditFirstname() {
    if (!edit_firstname.value.match(PATTERNFIRSTNAME)) edit_error_name.innerHTML = 'NAME has only letters, length[3,20]';
    else edit_error_name.innerHTML = ' ';
  };
  
  edit_email.oninput = inputEditEmail;
  function inputEditEmail() {
    if(task[1] === 'two'){
      apiCheckEmail(CHECKEMAILGO, edit_email.value, edit_error_email);
      start_mail !== edit_email.value && apiCheckEmail(CHECKEMAIL,edit_email.value, edit_error_email);
    }
    else{
      apiCheckEmail(CHECKEMAIL, edit_email.value, edit_error_email);
      start_mail !== edit_email.value && apiCheckEmail(CHECKEMAILGO,edit_email.value, edit_error_email);
    }
    if (!edit_email.value.match(PATTERNEMAIL)) edit_error_email.innerHTML = 'EMAIL has letters and numbers, length[3,40]';
    else edit_error_email.innerHTML = ' ';
  };
  document.addEventListener('DOMContentLoaded', function () {
    const callback = () => {
      if(edit_error_name.textContent.length === 1 && edit_error_email.textContent.length === 1) {
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




