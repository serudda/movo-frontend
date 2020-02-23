import React, { useState } from 'react';

import { discountData } from 'app/utils/discounts';
import { productData } from 'app/utils/products';
import { arrayToObject } from 'app/utils/utils';

import { IProductData } from 'app/interfaces/product-data';

import { Checkout } from 'app/models/checkout/checkout';

import ShoppingCart from './sections/ShoppingCart/ShoppingCart';
import OrderSummary from './sections/OrderSummary/OrderSummary';


const HomePage = () => {
  const checkout = new Checkout({products: productData, discounts: discountData});
  const defaultInputsValue = arrayToObject(productData, 'code', 0);

  const [products] = useState(productData);
  const [inputValues, setInputValues] = useState(defaultInputsValue);


  const handleMinusClick = (product: IProductData, newValue: number) => {
    const code = product.code;
    checkout.remove!(code);
    checkout.calculateTotalPerProduct(product, newValue);
    if(checkout.hasDiscounts(code)) {
      checkout.calculateDiscount(code);
    }
    setInputValues({...inputValues, [code]: newValue});
  };

  const handlePlusClick = (product: IProductData, newValue: number) => {
    const code = product.code;
    checkout.scan!(code);
    checkout.calculateTotalPerProduct(product, newValue);
    if(checkout.hasDiscounts(code)) {
      checkout.calculateDiscount(code);
    }
    setInputValues({...inputValues, [code]: newValue});
  };

  const handleValueChange = (product: IProductData, newValue: number) => {
    const code = product.code;
    checkout.removeAllProductsByCode!(code);
    for (let i = 0; i < newValue; i++) { checkout.scan!(code); }
    checkout.calculateTotalPerProduct(product, newValue);
    if(checkout.hasDiscounts(code)) {
      checkout.calculateDiscount(code);
    }
    setInputValues({...inputValues, [code]: newValue});
  };

  const handleBlur = (product: IProductData, newValue: number) => {
    const code = product.code;    
    checkout.calculateTotalPerProduct(product, newValue);
    if(checkout.hasDiscounts(code)) {
      checkout.calculateDiscount(code);
    }
    setInputValues({...inputValues, [code]: newValue});
  };


  return (
    <main className="CheckoutPage">
      <ShoppingCart
        products={products}
        values={inputValues}
        totals={checkout.totalPerProduct}
        onInputChange={handleValueChange}
        onInputBlur={handleBlur}
        onMinusClick={handleMinusClick}
        onPlusClick={handlePlusClick} />
      <OrderSummary
        scannedItems={checkout.numberOfScannedProducts()}
        discounts={checkout.availableDiscounts}
        discountedPrice={checkout.totalDiscount}
        subtotal={checkout.subtotal()}
        total={checkout.total()}
      />
    </main>
  );
}

export default HomePage;
