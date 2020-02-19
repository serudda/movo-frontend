export const arrayToObject = (array, key, value) =>
array.reduce((obj, item) => {
  obj[item[key]] = value;
  return obj;
}, {});