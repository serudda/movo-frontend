import React from 'react';

import { Checkout } from 'app/models/checkout/checkout';

export const CheckoutContext = React.createContext<Partial<Checkout>>({});