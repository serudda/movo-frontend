import React from 'react';

import { IDiscountData } from 'app/interfaces/discount-data';

import Button from 'app/components/Button/Button';

import './OrderSummary.css';

export interface IProps {
  discounts: Array<IDiscountData>;
  discountedPrice: Object;
  scannedItems: number;
  subtotal: number;
  total: number;
}

const OrderSummary = ({
  discounts,
  discountedPrice,
  scannedItems,
  subtotal,
  total
}: IProps) => {

  const discountList = discounts.map((discount: IDiscountData) =>
    <li key={discount.id}><span>{discount.name}</span><span>-{discountedPrice[discount.product_code]}€</span></li>
  );

  return (
    <aside className="OrderSummary text-yankees-blue flex flex-col flex-wrap p-8">
      <h1 className="pb-4 border-solid border-b border-gainsboro font-black">Order Summary</h1>
      <ul className="wrapper border-b border-solid border-gainsboro py-8">
        <li>
          <span className="font-bold">
            <span>{scannedItems} Items</span>
          </span>
          <span className="text-base font-bold">
            <span>{subtotal}</span>
            <span className="font-bold ml-1">€</span>
          </span>
        </li>
      </ul>
      <div className="wrapper-half py-6">
        <h2 className="text-quick-silver uppercase text-xs leading-4 tracking-wider font-bold mb-4">Discounts</h2>
        <ul className="font-bold">
          {discountList}
        </ul>
      </div>
      <div className="wrapper text-yankees-blue self-end mt-auto pt-4 pb-0 border-solid border-t border-gainsboro">
        <ul>
          <li className="flex items-center">
            <span className="uppercase font-bold">Total cost</span>
            <span className="text-xl leading-6 font-bold">{total} €</span>
          </li>
        </ul>
        <Button label="Checkout"></Button>
      </div>
    </aside>
  );
}

export default OrderSummary;
