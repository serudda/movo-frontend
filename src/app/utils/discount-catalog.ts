import { IDiscountData } from 'app/interfaces/discount-data';
import { IProductData } from 'app/interfaces/product-data';

import { getDiscountedPrice, isEven, hasMoreThan } from 'app/utils/utils';

export const twoForOneDiscount = (products: Array<IProductData>, discount: IDiscountData) => {
  const newProducts = (!isEven(products.length)) ? products.slice(0, products.length - 1) : products;
  return calculate(newProducts, discount);
};

export const bulkDiscount = (products: Array<IProductData>, discount: IDiscountData) => {
  if(!hasMoreThan(products, 'code', discount.product_code, 3)) return 0;
  return calculate(products, discount);
};

const calculate = (products: Array<IProductData>, discount: IDiscountData) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total = total + getDiscountedPrice(products[i].price, discount?.value);
  }
  return total;
}