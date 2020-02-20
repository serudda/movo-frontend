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
    // TODO: Analizar si esta logica de crear el objeto {MUG: 0, CAP: 0, TSHIRT: 0} deberia ir en Checkout (alla ya tenemos uno.) Unificar logicas
    setTotalPerProduct({...totalPerProduct, [code]: product.price * newValue});
    if(checkout.hasDiscounts(code)) {
      setDiscountedPrice({...discountedPrice, [code]: checkout.calculateDiscountByProductCode(code)});
    }
  };

  const handlePlusClick = (product: IProductData, newValue: number) => {
    const code = product.code;
    checkout.scan!(code);
    setInputValues({...inputValues, [code]: newValue});
    // TODO: Analizar si estos calculos deberian ir del lado de Checkout, no aqui
    setTotalPerProduct({...totalPerProduct, [code]: product.price * newValue});
    if(checkout.hasDiscounts(code)) {
      setDiscountedPrice({...discountedPrice, [code]: checkout.calculateDiscountByProductCode(code)});
    }
  };

  const handleValueChange = (product: IProductData, newValue: number) => {
    const code = product.code;
    checkout.removeAllProductsByCode!(code);
    for (let i = 0; i < newValue; i++) { checkout.scan!(code); }
    // TODO: Estas 4 lineas de abajo se repiten en todos los handles, unificar.
    setInputValues({...inputValues, [code]: newValue});
    setTotalPerProduct({...totalPerProduct, [code]: product.price * newValue});
    if(checkout.hasDiscounts(code)) {
      setDiscountedPrice({...discountedPrice, [code]: checkout.calculateDiscountByProductCode(code)});
    }
  };

  const handleBlur = (product: IProductData, newValue: number) => {
    const code = product.code;
    setInputValues({...inputValues, [code]: newValue});
    setTotalPerProduct({...totalPerProduct, [code]: product.price * newValue});
    if(checkout.hasDiscounts(code)) {
      setDiscountedPrice({...discountedPrice, [code]: checkout.calculateDiscountByProductCode(code)});
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
        total={checkout.total()}
      />
    </main>
  );
}

export default HomePage;
