import { IDiscountData } from './discount-data';

export interface IProductData {
  id: number;
  code: string;
  name: string;
  price: number;
  urlImg: string;
  discount: IDiscountData | null;
}