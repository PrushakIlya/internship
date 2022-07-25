import { CHECKEMAIL, CHECKEMAILGO } from './api-type.js';
import { apiCheckEmail } from './api.js';
import { PATTERNFIRSTNAME, PATTERNEMAIL } from './expressions.js';
import { create, createFirstname, createEmail, createSubmit, createErrorName, createErrorEmail } from './vars.js';
const task = window.location.pathname.split('/');

if (create !== null) {
  createFirstname.oninput = inputCreateFirstName;
  function inputCreateFirstName() {
    if (!createFirstname.value.match(PATTERNFIRSTNAME)) createErrorName.innerHTML = 'NAME has only letters, length[3,20]';
    else createErrorName.innerHTML = ' ';
  }

  createEmail.oninput = inputCreateEmail;
  function inputCreateEmail() {
    task[1] === 'two'
      ? apiCheckEmail(CHECKEMAILGO, createEmail.value, createErrorEmail)
      : apiCheckEmail(CHECKEMAIL, createEmail.value, createErrorEmail);
    if (!createEmail.value.match(PATTERNEMAIL)) createErrorEmail.innerHTML = 'EMAIL has letters and numbers, length[3,40]';
    else createErrorEmail.innerHTML = ' ';
  }
  document.addEventListener('DOMContentLoaded', function () {
    const callback = () => {
      if (createErrorName.textContent.length === 1 && createErrorEmail.textContent.length === 1) {
        createSubmit.disabled = false;
        createSubmit.className = 'btn success';
      } else {
        createSubmit.disabled = true;
        createSubmit.className = 'btn disabled';
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
