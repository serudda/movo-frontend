import React from 'react';

import { CheckoutProvider } from './contexts/CheckoutContext';

import HomePage from './pages/HomePage/HomePage';

import './App.css';

const App = () => {
  return (
    <CheckoutProvider>
      <HomePage />
    </CheckoutProvider>
  );
}

export default App;
