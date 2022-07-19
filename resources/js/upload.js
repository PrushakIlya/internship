import {UPLOADERRORS_1,UPLOADERRORS_2} from './errors';

const uploadSubmit = document.getElementById('upload_submit');
const uploadFile = document.getElementById('formFile');
const uploadErrors = document.getElementById('upload_errors');

if(uploadSubmit!==null && uploadFile!==null && uploadErrors!==null){
  uploadFile.oninput = function (){
    if(uploadFile.files[0].size > 200000){
      uploadErrors.innerHTML = UPLOADERRORS_1;
      uploadSubmit.disabled = true;
    }
    if(uploadFile.files[0].type !== 'image/png' && uploadFile.files[0].type !== 'image/jpeg' && uploadFile.files[0].type !== 'text/plain'){
      uploadErrors.innerHTML = UPLOADERRORS_2;
      uploadSubmit.disabled = true;
    }
    else {
      uploadErrors.innerHTML = ' ';
      uploadSubmit.disabled = false;
    }
  }
}

