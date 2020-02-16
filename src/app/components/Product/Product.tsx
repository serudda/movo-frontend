import React from 'react';

import NumericStepper from '../NumericStepper/NumericStepper';

import { IProductData } from 'app/interfaces/product-data';

import './Product.css';

export interface Props {
  product: IProductData;
}

const Product = ({product}: Props) => {
  const {name, code, price, urlImg} = product;

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
      <NumericStepper></NumericStepper>
      <div className="col-price">
        <span className="product-price text-black text-base font-bold">{price}</span>
        <span className="product-currency currency font-bold ml-1">€</span>
      </div>
      <div className="col-total">
        <span className="product-price text-black text-base font-bold">20</span>
        <span className="product-currency currency font-bold ml-1">€</span>
      </div>
    </li>
  );
};

export default Product;