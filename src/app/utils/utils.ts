import { IObjectKey } from 'app/interfaces/common';

export const arrayToObject = (array: Array<any>, key: string, value: any): IObjectKey =>
  array.reduce((obj, item) => {
    obj[item[key]] = value;
    return obj;
  }, {});

export const getFinalPrice = (price: number = 0, discount: number = 0): number =>
  price - (price * discount);

export const getDiscountedPrice = (price: number = 0, discount: number = 0): number =>
  price * discount

export const calculateTotal = (array: Array<any>, key: string, initialTotal: number): number =>
  array.reduce((total, item) => {
    return total + Number(item[key]);
  }, initialTotal);

export const addPropObject = (obj: any, key: string, value: any): Object => {
  const cloneObj = { ...obj, [key]: value };
  return cloneObj;
}

export const isEven = (value: number) => {
  if (value % 2 === 0) { return true; }
  return false;
}

export const hasMoreThan = (array: Array<any>, key: string, value: any, moreThan: number = 1): boolean => {
  let count = 0;
  array.forEach(item => {
    if(item[key] === value) { count++; }      
  });
  return (count >= moreThan);
}