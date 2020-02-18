import React, { createContext, useState, useEffect } from "react";
import { Checkout } from 'app/models/checkout/checkout';

import { discountData } from 'app/utils/discounts';
import { productData } from 'app/utils/products';

export const CheckoutContext: any = createContext({});

export const CheckoutProvider = ({ children }) => {
  const [products, setProductsRules] = useState();
  const [discounts, setDiscountsRules] = useState();
  const [checkout, setCheckout] = useState(() => new Checkout({products: productData, discounts: discountData}));

  //TODO: Move to a Service or Util folder 
  /*const getProducts = async () => {
    const productList = await productData();
    setProductsRules(productList);
  };*/

  //TODO: Move to a Service or Util folder
  const getDiscounts = async () => {
    const discountList = await discountData();
    setDiscountsRules(discountList);
  };

  /*useEffect(() => {
    getProducts();
  }, []);*/

  useEffect(() => {
    getDiscounts();
  }, []);

  return (
    <CheckoutContext.Provider
      value={{
        checkout,
        setCheckout
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};