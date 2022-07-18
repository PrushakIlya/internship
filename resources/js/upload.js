const upload_submit = document.getElementById('upload_submit');
const upload_file = document.getElementById('formFile');
const upload_errors = document.getElementById('upload_errors');

upload_file.oninput = function (){
  if(upload_file.files[0].size > 200000){
    upload_errors.innerHTML = 'Max file size is 200kByt';
    upload_submit.disabled = true;
    console.log(upload_file.files[0].size);
  }
  if(upload_file.files[0].type !== 'image/png' && upload_file.files[0].type !== 'image/jpeg' && upload_file.files[0].type !== 'text/plain'){
    upload_errors.innerHTML = 'Only png,jpeg,txt';
    upload_submit.disabled = true;
    console.log(upload_file.files[0].type);
  }
  else {
    upload_errors.innerHTML = ' ';
    upload_submit.disabled = false;
  }
}
