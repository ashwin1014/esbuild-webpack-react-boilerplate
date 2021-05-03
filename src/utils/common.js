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
