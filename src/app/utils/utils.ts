export const arrayToObject = (array: Array<any>, key: string, value: number): Object =>
array.reduce((obj, item) => {
  obj[item[key]] = value;
  return obj;
}, {});

export const calculateTotal = (array: Array<any>, key: string, initialTotal: number): number =>
  array.reduce((total, item) => {
  return total + Number(item[key]);
}, initialTotal);