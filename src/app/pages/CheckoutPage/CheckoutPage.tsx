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
  const [totalPerProduct, setTotalPerProduct] = useState(defaultInputsValue);
  const [discountedPrice, setDiscountedPrice] = useState(defaultInputsValue);


  const handleMinusClick = (product: IProductData, newValue: number) => {
    const code = product.code;
    checkout.remove!(code);
    setInputValues({...inputValues, [code]: newValue});
    setTotalPerProduct({...totalPerProduct, [code]: product.price * newValue});
    if(checkout.hasDiscounts(code)) {
      if(checkout.isAvailableToTheDiscount(code)) {
        setDiscountedPrice({...discountedPrice, [code]: checkout.calculateDiscountByProductCode(code)});
      }
    }
  };

  const handlePlusClick = (product: IProductData, newValue: number) => {
    const code = product.code;
    checkout.scan!(code);
    setInputValues({...inputValues, [code]: newValue});
    setTotalPerProduct({...totalPerProduct, [code]: product.price * newValue});
    if(checkout.hasDiscounts(code)) {
      if(checkout.isAvailableToTheDiscount(code)) {
        setDiscountedPrice({...discountedPrice, [code]: checkout.calculateDiscountByProductCode(code)});
      }
    }
  };

  const handleValueChange = (product: IProductData, newValue: number) => {
    const code = product.code;
    checkout.removeAllProductsByCode!(code);
    for (let i = 0; i < newValue; i++) { checkout.scan!(code); }
    setInputValues({...inputValues, [code]: newValue});
    setTotalPerProduct({...totalPerProduct, [code]: product.price * newValue});
    // TODO: Cuando escribo un numero impar, no esta respetando el descuento de las demas 2x1.
    // TODO: Cuando borro todo y escribo 1, no me esta reseteando el descuento.
    if(checkout.hasDiscounts(code)) {
      if(checkout.isAvailableToTheDiscount(code)) {
        setDiscountedPrice({...discountedPrice, [code]: checkout.calculateDiscountByProductCode(code)});
      }
    }
  };

  const handleBlur = (product: IProductData, newValue: number) => {
    const code = product.code;
    setInputValues({...inputValues, [code]: newValue});
    setTotalPerProduct({...totalPerProduct, [code]: product.price * newValue});
    if(checkout.hasDiscounts(code)) {
      if(checkout.isAvailableToTheDiscount(code)) {
        setDiscountedPrice({...discountedPrice, [code]: checkout.calculateDiscountByProductCode(code)});
      }
    }
  };


  return (
    <main className="CheckoutPage">
      <ShoppingCart
        products={products}
        values={inputValues}
        totals={totalPerProduct}
        onInputChange={handleValueChange}
        onInputBlur={handleBlur}
        onMinusClick={handleMinusClick}
        onPlusClick={handlePlusClick} />
      <OrderSummary
        scannedItems={checkout.numberOfScannedProducts()}
        discounts={checkout.availableDiscounts}
        discountedPrice={discountedPrice}
        subtotal={checkout.subtotal()}
        total={2000}
      />
    </main>
  );
}

export default HomePage;
