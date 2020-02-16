import React from 'react';

import { Checkout, PricingRules } from 'app/models/checkout/checkout';

export const princingRules: PricingRules = {
  products: [
    {
      id: 1,
      code: 'CAP',
      name: 'Cap',
      price: 20,
      urlImg: 'cap.png',
      discount: 1
    },
    {
      id: 2,
      code: 'SHIRT',
      name: 'Shirt',
      price: 5,
      urlImg: 'tshirt.png',
      discount: 2
    }
  ],

  discounts: [
    {
      id: 1,
      code: '2x1',
      name: '2x1'
    },
    {
      id: 2,
      code: 'x3',
      name: 'x3'
    }
  ]
};

export const CheckOutInstance = new Checkout(princingRules);

export const CheckoutContext = React.createContext({});