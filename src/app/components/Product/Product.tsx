import React, { useState, useContext } from 'react';

import { CheckoutContext } from 'app/contexts/CheckoutContext';

import { IProductData } from 'app/interfaces/product-data';

import './Product.css';

export interface Props {
  product: IProductData;
}

const Product = ({product}: Props) => {
  const {name, code, price, urlImg} = product;
  const [value, setValue] = useState(0);
  const [total, setTotal] = useState(0);
  const checkout = useContext(CheckoutContext);

  const handleMinusClick = () => {
    if (value > 0) {
      const newValue = value - 1;
      setValue(newValue);
      checkout.remove!(code);
      setTotal(price * newValue);
    }
  };

  const handlePlusClick = () => {
    if (value < 10) {
      const newValue = value + 1;
      setValue(newValue);
      checkout.scan!(code);
      setTotal(price * newValue);
    }
  };

  const handleValueChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    checkout.removeAllProductsByCode!(code);

    // TODO: Crashea cuando pongo 500000000 en el input. No es optimo esto. Buscar alternativa
    for (let i = 0; i < newValue; i++) {
      checkout.scan!(code);
    }

    setTotal(price * newValue);
  };

  return (
    <li className="Product product row">
      <div className="col-product">
        <figure className="product-image flex items-center flex-row flex-no-wrap">
          <img className="mr-4 border border-solid border-lavender-gray rounded-md" src={urlImg} alt={name} />
          <div className="product-description">
            <h1 className="text-primary text-lg font-black">{name}</h1>
            <p className="product-code text-quick-silver font-semi-bold">Product code {code}</p>
          </div>
        </figure>
      </div>
      <div className="col-quantity">
        <button className="count" onClick={handleMinusClick}>-</button>
        <input type="text" className="product-quantity" value={value} onChange={handleValueChange}/>
        <button className="count" onClick={handlePlusClick}>+</button>
      </div>
      <div className="col-price">
        <span className="product-price text-black text-base font-bold">{price}</span>
        <span className="product-currency currency font-bold ml-1">€</span>
      </div>
      <div className="col-total">
        <span className="product-price text-black text-base font-bold">{total}</span>
        <span className="product-currency currency font-bold ml-1">€</span>
      </div>
    </li>
  );
};

export default Product;