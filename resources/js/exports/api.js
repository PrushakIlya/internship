export const apiCheckEmail = (url, payload, error_block) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(body => {
      if (body === true) error_block.innerHTML = 'Something wrong';
      else error_block.innerHTML = ' ';
    })
    .catch(error => console.log(error));
};
