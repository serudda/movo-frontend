import React from 'react';

import { IDiscountData } from 'app/interfaces/discount-data';

import Button from 'app/components/Button/Button';

export interface IProps {
  discounts: Array<IDiscountData>;
  scannedItems: number;
  subtotal: number;
}

const OrderSummary = ({discounts, scannedItems, subtotal}: IProps) => {

  const discountList = discounts.map((discount: IDiscountData) =>
    <li key={discount.id}><span>{discount.name}</span><span>-10€</span></li>
  );

  return (
    <aside className="OrderSummary summary text-yankees-blue flex flex-col flex-wrap p-8">
      <h1 className="pb-4 border-solid border-b border-gainsboro font-black">Order Summary</h1>
      <ul className="summary-items wrapper border-b border-solid border-gainsboro py-8">
        <li>
          <span className="summary-items-number font-bold">
            <span>{scannedItems} Items</span>
          </span>
          <span className="summary-items-price text-base font-bold">
            <span>{subtotal}</span>
            <span className="currency font-bold ml-1">€</span>
          </span>
        </li>
      </ul>
      <div className="summary-discounts wrapper-half py-6">
        <h2 className="text-quick-silver uppercase text-xs leading-4 tracking-wider font-bold mb-4">Discounts</h2>
        <ul className="font-bold">
          {discountList}
        </ul>
      </div>
      <div className="summary-total wrapper text-yankees-blue self-end mt-auto pt-4 pb-0 border-solid border-t border-gainsboro">
        <ul>
          <li className="flex items-center">
            <span className="summary-total-cost uppercase font-bold">Total cost</span>
            <span className="summary-total-price text-xl leading-6 font-bold">107€</span>
          </li>
        </ul>
        <Button label="Checkout"></Button>
      </div>
    </aside>
  );
}

export default OrderSummary;
