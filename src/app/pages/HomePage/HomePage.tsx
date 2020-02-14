import React from 'react';

import ShoppingCart from './sections/ShoppingCart/ShoppingCart';
import OrderSummary from './sections/OrderSummary/OrderSummary';


const HomePage = () => {
  return (
    <main className="HomePage">
      <ShoppingCart />
      <OrderSummary />
    </main>
  );
}

export default HomePage;
