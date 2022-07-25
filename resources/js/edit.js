
import { CHECKEMAIL, CHECKEMAILGO } from './api-type.js';
import { apiCheckEmail } from './api.js';
import { edit, editFirstname, editEmail, editSubmit, editErrorName, editErrorEmail } from './vars.js';
import { PATTERNFIRSTNAME, PATTERNEMAIL } from './expressions.js';
const task = window.location.pathname.split('/');


if (edit !== null) {
  editErrorName.innerHTML = ' ';
  editErrorEmail.innerHTML = ' ';
  const start_mail = editEmail.value;

  editFirstname.oninput = inputEditFirstname;
  const inputEditFirstname = () => {
    if (!editFirstname.value.match(PATTERNFIRSTNAME)) editErrorName.innerHTML = 'NAME has only letters, length[3,20]';
    else editErrorName.innerHTML = ' ';
  };

  editEmail.oninput = inputEditEmail;
  const inputEditEmail = () => {
    if (task[1] === 'two') {
      apiCheckEmail(CHECKEMAILGO, editEmail.value, editErrorEmail);
      start_mail !== editEmail.value && apiCheckEmail(CHECKEMAIL, editEmail.value, editErrorEmail);
    } else {
      apiCheckEmail(CHECKEMAIL, editEmail.value, editErrorEmail);
      start_mail !== editEmail.value && apiCheckEmail(CHECKEMAILGO, editEmail.value, editErrorEmail);
    }
    if (!editEmail.value.match(PATTERNEMAIL)) editErrorEmail.innerHTML = 'EMAIL has letters and numbers, length[3,40]';
    else editErrorEmail.innerHTML = ' ';
  };
  document.addEventListener('DOMContentLoaded', function () {
    const callback = () => {
      if (editErrorName.textContent.length === 1 && editErrorEmail.textContent.length === 1) {
        editSubmit.disabled = false;
        editSubmit.className = 'btn success';
      } else {
        editSubmit.disabled = true;
        editSubmit.className = 'btn disabled';
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
