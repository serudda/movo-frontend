import { IDiscountData } from 'app/interfaces/discount-data';
import { IProductData } from 'app/interfaces/product-data';

import { getDiscountedPrice, isEven, hasMoreThan } from 'app/utils/utils';

export const twoForOneDiscount = (products: Array<IProductData>, discount: IDiscountData) => {
  let total = 0;
  let amount = products.length;
  if(!isEven(amount)) amount = amount - 1;
  for (let i = 0; i < amount; i++) {
    total = total + getDiscountedPrice(products[i].price, discount?.value);
  }
  return total;
};

export const bulkDiscount = (products: Array<IProductData>, discount: IDiscountData) => {
  if(!hasMoreThan(products, 'code', discount.product_code, 3)) return 0;

  let total = 0;
  let amount = products.length;
  for (let i = 0; i < amount; i++) {
    total = total + getDiscountedPrice(products[i].price, discount?.value);
  }
  return total;
};