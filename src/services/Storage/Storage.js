function setLocalStorage(keyword, value) {
  localStorage.setItem(keyword, value);
}

function getLocalStorage(keyword) {
  return localStorage.getItem(keyword);
}

export { setLocalStorage, getLocalStorage };
