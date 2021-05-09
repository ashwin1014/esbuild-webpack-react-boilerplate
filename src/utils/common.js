export const isEmpty = (obj) => [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;

export const noop = () => undefined;

export const greetUser = () => {
  const date = new Date();
  const hrs = date.getHours();
  let greeting;
  if (hrs < 12) greeting = 'Good Morning';
  else if (hrs >= 12 && hrs <= 17) greeting = 'Good Afternoon';
  else if (hrs >= 17 && hrs <= 24) greeting = 'Good Evening';
  return greeting;
};

export const getUrlParams = (param) => new URLSearchParams(window.location.search).get(param);

export const uid = () => Date.now().toString(36) + Math.random().toString(36).substr(2, 5);

export const uniq = (arr) => {
  return [...new Set(arr)];
};

export const omitValue = (key, obj) => {
  const { [key]: _, ...rest } = obj;
  return rest;
};

export const times = (num) => {
  return [...Array(num).keys()];
};

export const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

export const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

export const generateQueryString = (params) =>
  Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');

export const loadScript = (src, id = null, async = false) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    if (id) {
      script.id = id;
    }
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const removeScriptById = (id) => {
  const script = document.querySelector(`#${id}`);
  script.parentNode.removeChild(script);
};
