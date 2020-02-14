import React from 'react';

import Button from 'app/components/Button/Button';

const OrderSummary = () => {
  return (
    <aside className="OrderSummary summary text-yankees-blue flex flex-col flex-wrap p-8">
      <h1 className="pb-4 border-solid border-b border-gainsboro font-black">Order Summary</h1>
      <ul className="summary-items wrapper border-b border-solid border-gainsboro py-8">
        <li>
          <span className="summary-items-number font-bold">11 Items</span>
          <span className="summary-items-price text-base font-bold">120<span className="currency font-bold ml-1">€</span></span>
        </li>
      </ul>
      <div className="summary-discounts wrapper-half py-6">
        <h2 className="text-quick-silver uppercase text-xs leading-4 tracking-wider font-bold mb-4">Discounts</h2>
        <ul className="font-bold">
          <li><span>2x1 Mug offer</span><span>-10€</span></li>
          <li><span>x3 Shirt offer</span><span>-3€</span></li>
          <li><span>Promo code</span><span>0€</span></li>
        </ul>
      </div>
      <div className="summary-total wrapper text-yankees-blue self-end mt-auto pt-4 pb-0 border-solid border-t border-gainsboro">
        <ul>
          <li className="flex items-center">
            <span className="summary-total-cost uppercase font-bold">Total cost</span>
            <span className="summary-total-price text-xl leading-6 font-bold">107€</span>
          </li>
        </ul>
        <Button></Button>
      </div>
    </aside>
  );
}

export default OrderSummary;
