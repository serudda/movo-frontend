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


  const handleMinusClick = (product: IProductData) => {
    const code = product.code; 
    let value = inputs[code];
    if (value > 0) {
      value = value - 1;
      setInputs({...inputs, [code]: value} as any);
      checkout.remove!(code);
      setTotalPerProduct({...totalPerProduct, [code]: product.price * value});
    }
  };

  const handlePlusClick = (product: IProductData) => {
    const code = product.code;
    let value = inputs[code];
    if (value < product.stock) {
      value = value + 1;
      setInputs({...inputs, [code]: value} as any);
      checkout.scan!(code);
      setTotalPerProduct({...totalPerProduct, [code]: product.price * value});
    }
  };

  // TODO: Chequear por que no funca
  const handleValueChange = (product: IProductData) => (e) => {
    const name: string = e.target.name;
    let newValue: number = parseInt(e.target.value, 10);
    if(newValue > product.stock) { newValue = product.stock; }
    setInputs({...inputs, [name]: newValue} as any);

    if(!isNaN(newValue)) {
      checkout.removeAllProductsByCode!(product.code);
      for (let i = 0; i < newValue; i++) {
        checkout.scan!(product.code);
      }
      setTotalPerProduct({...totalPerProduct, [name]: product.price * newValue});
    } 
  };

  // TODO: Chequear por que no funca
  const handleBlur = (product: IProductData) => (e) => {
    const name: string = e.target.name;
    if(e.target.value === '') {
      inputs[name] = 0;
      setInputs({[name]: inputs[name]} as any);
      setTotalPerProduct({...totalPerProduct, [name]: 0});
    }
  };

  const handleFocus = (e) => e.target.select();

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
        onInputFocus={handleFocus}
        onMinusClick={handleMinusClick}
        onPlusClick={handlePlusClick} />
      <OrderSummary totalWithoutDiscount={calculateTotalWithoutDiscount()}/>
    </main>
  );
}

export default HomePage;
