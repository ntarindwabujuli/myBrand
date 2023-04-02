
import keys from "./constants/keys.js";
let ls = {
  set: (key, value) => {
    localStorage.setItem(key, value)
  },
  get:(key) => {
    return localStorage.getItem(key)
  },
  remove:(key) => {
    return localStorage.removeItem(key)
  }
}

const set = (key, value) => {
  ls.set(key, value);
};

const get = (key) => {
  return ls.get(key);
};

const remove = (key) => {
  return ls.remove(key);
};

const removeToken = () => {
  return ls.remove(`${keys.APP_ACCESS_TOKEN}`);
};

const setToken = (value) => {
  ls.set(`${keys.APP_ACCESS_TOKEN}`, value);
};

const getToken = () => {
  try {
    return ls.get(`${keys.APP_ACCESS_TOKEN}`) || null;
  } catch (error) {
    return null;
  }
};

const Secure = {
  set,
  setToken,
  get,
  getToken,
  remove,
  removeToken,
};

export default Secure;
