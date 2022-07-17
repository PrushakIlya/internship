export const apiCheckEmail = (url,payload,error_block) => {
  fetch(url,{
    method: 'POST',
    body: JSON.stringify(payload),
    headers:{
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(body => {
      console.log(body)
      if(body === true) error_block.innerHTML = 'Email is taken';
    })
    .catch(error => console.log(error));
};