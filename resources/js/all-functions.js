export const getCookie = name => {
  const cookie = document.cookie.split('=');
  let value = cookie[1].replaceAll('%20', ' ');
  value = value.replaceAll('%21', '');
  return value;
};

export const getCookieCombine = name => {
  const cookies = document.cookie.split(';');
  const cookie = cookies[0].split('=');
  let value = cookie[1].replaceAll('%20', ' ');
  value = value.replaceAll('%21', '');
  return value;
};

export const navigateCurrentPage = (button, num, current) => {
  button.addEventListener('click', function () {
    sessionStorage.setItem('current_page', num);
  });
  if (sessionStorage.getItem('current_page') == num) {
    current.classList.remove('current_page');
    button.classList.add('current_page');
  }
};
