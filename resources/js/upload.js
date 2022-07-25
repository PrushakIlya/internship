import { UPLOADERRORS_1, UPLOADERRORS_2 } from './errors.js';
import { upload, uploadSubmit, uploadFile, uploadErrors } from './vars.js';

if (upload !== null) {
  uploadFile.oninput = function () {
    if (uploadFile.value.length === 0) {
      uploadErrors.innerHTML = UPLOADERRORS_2;
      uploadSubmit.disabled = true;
    } else {
      if (uploadFile.files[0].size > 200000) {
        uploadErrors.innerHTML = UPLOADERRORS_1;
        uploadSubmit.disabled = true;
      }
      if (uploadFile.files[0].type !== 'image/png' && uploadFile.files[0].type !== 'image/jpeg' && uploadFile.files[0].type !== 'text/plain') {
        uploadErrors.innerHTML = UPLOADERRORS_2;
        uploadSubmit.disabled = true;
      } else {
        uploadErrors.innerHTML = ' ';
        uploadSubmit.disabled = false;
      }
    }
  }
}