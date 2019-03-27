function setLocalStorage(keyword, value) {
  localStorage.setItem(keyword, value);
}

function getLocalStorage(keyword) {
  return localStorage.getItem(keyword);
}

function removeLocalStorage(keyword) {
  return localStorage.removeItem(keyword);
}

export { setLocalStorage, getLocalStorage, removeLocalStorage };
