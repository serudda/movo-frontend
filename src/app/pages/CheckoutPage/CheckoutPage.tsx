import React, { useState } from 'react';

import { discountData } from 'app/utils/discounts';
import { productData } from 'app/utils/products';

import { IProductData } from 'app/interfaces/product-data';

import { Checkout } from 'app/models/checkout/checkout';

import ShoppingCart from './sections/ShoppingCart/ShoppingCart';
import OrderSummary from './sections/OrderSummary/OrderSummary';


const HomePage = () => {
  const checkout = new Checkout({products: productData, discounts: discountData});
  const [products] = useState(productData);
  const [inputs, setInputs] = useState({ TSHIRT: 0, MUG: 0, CAP: 0 });
  const [totalPerProduct, setTotalPerProduct] = useState({ TSHIRT: 0, MUG: 0, CAP: 0 });


  const handleMinusClick = (product: IProductData, newValue: number) => {
    const code = product.code; 
    setInputs({...inputs, [code]: newValue} as any);
    checkout.remove!(code);
    setTotalPerProduct({...totalPerProduct, [code]: product.price * newValue});
  };

  const handlePlusClick = (product: IProductData, newValue: number) => {
    const code = product.code;
    setInputs({...inputs, [code]: newValue} as any);
    checkout.scan!(code);
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
