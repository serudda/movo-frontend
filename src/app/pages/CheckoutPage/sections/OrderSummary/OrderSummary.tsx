import React from 'react';

import { IObjectKey } from 'app/interfaces/common';
import { IDiscountData } from 'app/interfaces/discount-data';

import Button, { ButtonUse, ButtonSize } from 'app/components/Button/Button';

import './OrderSummary.css';

export interface IProps {
  discounts: Array<IDiscountData>;
  discountedPrice: IObjectKey;
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
    <aside className="OrderSummary bg-anti-flash-white text-yankees-blue flex flex-col flex-wrap p-8">
      <h1 className="font-black border-b border-solid border-gainsboro pb-4">Order Summary</h1>
      <ul className="border-b border-solid border-gainsboro py-8">
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
      <div className="py-6">
        <h2 className="text-xs text-quick-silver font-bold uppercase leading-4 tracking-wider mb-4">Discounts</h2>
        <ul className="font-bold">
          {discountList}
        </ul>
      </div>
      <div className="text-yankees-blue border-t border-gainsboro border-solid self-end mt-auto pt-4 pb-0">
        <ul>
          <li className="flex items-center">
            <span className="uppercase font-bold">Total cost</span>
            <span className="text-xl leading-6 font-bold">{total} €</span>
          </li>
        </ul>
        <Button
          label="Checkout"
          use={ButtonUse.primary}
          size={ButtonSize.md}
          block={true}
          className="mt-12" />
      </div>
    </aside>
  );
}

export default OrderSummary;
