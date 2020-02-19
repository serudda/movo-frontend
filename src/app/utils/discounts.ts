import { IDiscountData } from 'app/interfaces/discount-data';

export const discountData = async (): Promise<Array<IDiscountData>> => {
  return [
    {
      "id": 1,
      "code": "2x1",
      "name": "2x1"
    },
    {
      "id": 2,
      "code": "x3",
      "name": "x3"
    }
  ];
};