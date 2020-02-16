import React, { useState, useContext } from 'react';

import { CheckoutContext } from 'app/contexts/CheckoutContext';

import { IProductData } from 'app/interfaces/product-data';

import './Product.css';

export interface Props {
  product: IProductData;
}

const Product = ({product}: Props) => {
  const {name, code, price, stock, urlImg} = product;
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
    if (value < stock) {
      const newValue = value + 1;
      setValue(newValue);
      checkout.scan!(code);
      setTotal(price * newValue);
    }
  };

  const handleValueChange = (e) => {
    let newValue: number = parseInt(e.target.value, 10);
    if(newValue > stock) { newValue = stock; }

    setValue(newValue);
    checkout.removeAllProductsByCode!(code);
    for (let i = 0; i < newValue; i++) {
      checkout.scan!(code);
    }
    setTotal(price * newValue);
  };

  const handleBlur = (e) => {
    if(e.target.value === '') { setValue(0); }
  };

  const handleFocus = (e) => e.target.select();

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
        <input type="number" className="product-quantity" value={value} onChange={handleValueChange} onFocus={handleFocus} onBlur={handleBlur} min="0" max={stock}/>
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