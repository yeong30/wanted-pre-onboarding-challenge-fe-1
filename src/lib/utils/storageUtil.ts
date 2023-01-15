export const getStorage = (keyname: string) => {
  return localStorage.getItem(keyname);
};
export const setStorage = (keyname: string, value: string) => {
  return localStorage.setItem(keyname, value);
};
export const resetStorage = (keyname: string) => {
  return localStorage.removeItem(keyname);
};
