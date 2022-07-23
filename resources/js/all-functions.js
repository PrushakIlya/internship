export const getCookie = name => {
  const cookie = document.cookie.split('=');
  let value = cookie[1].replaceAll('%20', ' ');
  value = value.replaceAll('%21', '');
  return value;
};

// export const getCookieCombine = () => {
//   if (document.cookie.includes('error')) {
//     const cookies = document.cookie.split(';');
//     cookies.forEach(element => {
//       const el = element.split('=');
//       if (el[0].trim() === 'error') {
//         const value = el[1].replaceAll('%20', ' ');
//         errorFirstname.textContent = value;
//         return 0;
//       }
//     });
//   }
// };

export const navigateCurrentPage = (button, num, current) => {
  button.addEventListener('click', function () {
    sessionStorage.setItem('current_page', num);
  });
  if (sessionStorage.getItem('current_page') == num) {
    current.classList.remove('current_page');
    button.classList.add('current_page');
  }
};
