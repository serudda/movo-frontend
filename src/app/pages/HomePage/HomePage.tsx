import React from 'react';

import { UserProvider } from 'app/contexts/UserContext';

import ShoppingCart from './sections/ShoppingCart/ShoppingCart';
import OrderSummary from './sections/OrderSummary/OrderSummary';


const HomePage = () => {
  return (
    <UserProvider>
      <main className="HomePage">
        <ShoppingCart />
        <OrderSummary />
      </main>
    </UserProvider>
  );
}

export default HomePage;
