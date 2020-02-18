import React, { useState } from 'react';

import { IProductData } from 'app/interfaces/product-data';

import './Product.css';

export interface Props {
  product: IProductData;
  total: number;
  value: number;
  onInputChange: (product: IProductData) => any;
  onInputBlur: () => any;
  onInputFocus: () => any;
  onMinusClick: (product: IProductData, localValue: number) => any;
  onPlusClick: (product: IProductData, localValue: number) => any;
}

const Product = ({
  product,
  total,
  value,
  onInputChange,
  onInputFocus,
  onInputBlur,
  onMinusClick,
  onPlusClick
}: Props) => {
  const {name, code, price, stock, urlImg} = product;
  const [localValue, setLocalValue] = useState(value);

  const handleMinusClick = () => {
    if (localValue > 0) {
      const newValue = localValue - 1;
      setLocalValue(newValue);
      onMinusClick(product, newValue);
    }
  };

  const handlePlusClick = () => {
    if (localValue < product.stock) {
      const newValue = localValue + 1;
      setLocalValue(newValue);
      onPlusClick(product, newValue);
    }
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
        <input type="number" name={code} className="product-quantity" value={localValue} onChange={() => onInputChange(product)} onFocus={onInputFocus} onBlur={onInputBlur} min="0" max={stock} pattern="[0-9]{10}"/>
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