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
  const [inputs, setInputs] = useState(defaultInputsValue);
  const [totalPerProduct, setTotalPerProduct] = useState(defaultInputsValue);


  const handleMinusClick = (product: IProductData, newValue: number) => {
    const code = product.code; 
    setInputs({...inputs, [code]: newValue} as any);
    checkout.remove!(code);
    setTotalPerProduct({...totalPerProduct, [code]: product.price * newValue});
  };

  const handlePlusClick = (product: IProductData, newValue: number) => {
    const code = product.code;
    checkout.scan!(code);
    setInputs({...inputs, [code]: newValue} as any);
    setTotalPerProduct({...totalPerProduct, [code]: product.price * newValue});
  };

  const handleValueChange = (product: IProductData, newValue: number) => {
    const code = product.code;
    setInputs({...inputs, [code]: newValue} as any);
    checkout.removeAllProductsByCode!(code);
    for (let i = 0; i < newValue; i++) {
      checkout.scan!(code);
    }
    setTotalPerProduct({...totalPerProduct, [code]: product.price * newValue});
  };

  const handleBlur = (product: IProductData, newValue: number) => {
    const code = product.code;
    setInputs({...inputs, [code]: newValue} as any);
    setTotalPerProduct({...totalPerProduct, [code]: product.price * newValue});
  };

  // TODO: Mejorar esta groseria
  const calculateTotalWithoutDiscount = () => {
    return totalPerProduct.MUG + totalPerProduct.CAP + totalPerProduct.TSHIRT;
  };

  return (
    <main className="CheckoutPage">
      <ShoppingCart
        products={products}
        inputs={inputs}
        totals={totalPerProduct}
        onInputChange={handleValueChange}
        onInputBlur={handleBlur}
        onMinusClick={handleMinusClick}
        onPlusClick={handlePlusClick} />
      <OrderSummary totalWithoutDiscount={calculateTotalWithoutDiscount()}/>
    </main>
  );
}

export default HomePage;
