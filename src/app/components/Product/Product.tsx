import React, { useContext, useState } from 'react';

import { IProductData } from 'app/interfaces/product-data';

import { ModalContext } from 'app/contexts/ModalContext';

import './Product.css';

export interface IProps {
  product: IProductData;
  total: number;
  value: number;
  onInputChange: (product: IProductData, newValue: number) => void;
  onInputBlur: (product: IProductData, newValue: number) => void;
  onMinusClick: (product: IProductData, newValue: number) => void;
  onPlusClick: (product: IProductData, newValue: number) => void;
}

const Product = ({
  product,
  total,
  value,
  onInputChange,
  onInputBlur,
  onMinusClick,
  onPlusClick
}: IProps) => {
  const {name, code, price, stock, url_img} = product;
  const [localValue, setLocalValue] = useState(value);
  const {isShowing, setIsShowing} = useContext(ModalContext);

  const handleMinusClick = () => {
    if (localValue > 0) {
      const newValue = localValue - 1;
      setLocalValue(newValue);
      onMinusClick(product, newValue);
    }
  };

  const handlePlusClick = () => {
    if (localValue < stock) {
      const newValue = localValue + 1;
      setLocalValue(newValue);
      onPlusClick(product, newValue);
    }
  };

  const handleValueChange = (e) => {
    let newValue = (e.target.value !== '') ? parseInt(e.target.value, 10) : e.target.value;
    if((newValue !== '') && (newValue > stock)) { newValue = stock; }
    setLocalValue(newValue);
    onInputChange(product, newValue);
  };

  const handleBlur = (e) => {
    if(e.target.value === '') {
      setLocalValue(0);
      onInputBlur(product, 0);
    }
  };

  const handleFocus = (e) => e.target.select();

  return (
    <li className="Product row">
      <div className="col-product">
        <figure
          className="product-image flex items-center flex-row flex-no-wrap cursor-pointer"
          onClick={() => setIsShowing(!isShowing) }>
          <img 
            className="mr-4 border border-solid border-lavender-gray rounded-md"
            src={url_img}
            alt={name} />
          <div className="product-description">
            <h1 className="text-primary text-lg leading-6 font-black">{name}</h1>
            <p className="text-xs leading-4 text-quick-silver font-semi-bold">Product code {code}</p>
          </div>
        </figure>
      </div>
      <div className="col-quantity">
        <div className="NumericStepper">
          <button 
            className="NumericStepper__count border-none bg-transparent outline-none text-xl text-primary font-bold leading-6"
            onClick={handleMinusClick}>-</button>
          <input 
            type="number"
            name={code}
            className="NumericStepper__input rounded-md border-2 border-solid border-gainsboro text-sm font-bold leading-4 text-center"
            value={localValue}
            onChange={handleValueChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            min="0"
            max={stock}
            pattern="[0-9]{10}"/>
          <button
            className="NumericStepper__count border-none bg-transparent outline-none text-xl text-primary font-bold leading-6"
            onClick={handlePlusClick}>+</button>
        </div>
      </div>
      <div className="col-price">
        <span className="text-black text-base font-bold">{price}</span>
        <span className="font-bold ml-1">€</span>
      </div>
      <div className="col-total">
        <span className="text-black text-base font-bold">{total}</span>
        <span className="font-bold ml-1">€</span>
      </div>
    </li>
  );
};

export default Product;