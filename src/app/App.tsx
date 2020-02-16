import React, { useState, useEffect } from 'react';

import { Checkout } from './models/checkout/checkout';

import { discountData } from './utils/discounts';
import { productData } from './utils/products';

import { CheckoutContext } from './contexts/CheckoutContext';

import HomePage from './pages/HomePage/HomePage';

import './App.css';

const App = () => {

  const [products, setProductsRules] = useState();
  const [discounts, setDiscountsRules] = useState();
  const [checkoutInstance, setCheckoutInstance] = useState({});

  //TODO: Move to a Service or Util folder 
  const getProducts = async () => {
    const productList = await productData();
    setProductsRules(productList);
  };

  //TODO: Move to a Service or Util folder
  const getDiscounts = async () => {
    const discountList = await discountData();
    setDiscountsRules(discountList);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getDiscounts();
  }, []);

  useEffect(() => {
    setCheckoutInstance(new Checkout({ products, discounts }));
  }, [products, discounts]);
  
  return (
    <CheckoutContext.Provider value={checkoutInstance}>
      <HomePage />
    </CheckoutContext.Provider>
  );
}

export default App;
