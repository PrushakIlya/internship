export const getCookie = (name) => {
  const cookie = document.cookie.split('=');
  let value = cookie[1].replaceAll('%20',' ');
  value = value.replaceAll('%21','');
  return value;
}
