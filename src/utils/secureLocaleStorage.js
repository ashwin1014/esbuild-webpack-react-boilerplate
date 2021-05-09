import SecureLS from 'secure-ls';

const ls = new SecureLS({ encodingType: 'rc4', isCompression: true });

export const setLocalStorage = (key, data) => {
  ls.set(key, data);
};

export const getLocalStorageKey = (key) => {
  return ls.get(key);
};

export const removeLocalStorageKey = (key) => {
  ls.remove(key);
};

export const clearLocalStorage = () => {
  ls.removeAll();
};

export const getAllLocalStorage = () => {
  return ls.getAllKeys();
};
