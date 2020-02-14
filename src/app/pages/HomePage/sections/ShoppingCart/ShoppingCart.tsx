import React from 'react';

import NumericStepper from 'app/components/NumericStepper/NumericStepper';

const ShoppingCart = () => {
  return (
    <section className="ShoppingCart products py-8 px-12 flex-1">
      <h1 className="pb-4 border-solid border-b border-gainsboro font-black">Shopping cart</h1>
      <ul className="products-list relative w-full py-8">
        <li className="products-list-title text-quick-silver uppercase text-2xs leading-4 tracking-wider font-bold row">
          <div className="col-product">Product details</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-price">Price</div>
          <div className="col-total">Total</div>
        </li>
      </ul>
      <ul className="products-list relative w-full">
        <li className="product row">
          <div className="col-product">
            <figure className="product-image flex items-center flex-row flex-no-wrap">
              <img className="mr-4 border border-solid border-lavender-gray rounded-md" src="shirt.png" alt="Shirt" />
              <div className="product-description">
                <h1 className="text-primary text-lg font-black">Shirt</h1>
                <p className="product-code text-quick-silver font-semi-bold">Product code X7R2OPX</p>
              </div>
            </figure>
          </div>
          <NumericStepper></NumericStepper>
          <div className="col-price">
            <span className="product-price text-black text-base font-bold">20</span>
            <span className="product-currency currency font-bold ml-1">€</span>
        </div>
          <div className="col-total">
            <span className="product-price text-black text-base font-bold">60</span>
            <span className="product-currency currency font-bold ml-1">€</span>
          </div>
        </li>
        <li className="product row">
          <div className="col-product">
            <figure className="product-image flex items-center flex-row flex-no-wrap">
              <img className="mr-4 border border-solid border-lavender-gray rounded-md" src="mug.png" alt="Mug" />
              <div className="product-description">
                <h1 className="text-primary text-lg font-black">Mug</h1>
                <p className="product-code text-quick-silver font-semi-bold">Product code X2G2OPZ</p>
              </div>
            </figure>
          </div>
          <NumericStepper></NumericStepper>
          <div className="col-price">
            <span className="product-price text-black text-base font-bold">5</span>
            <span className="product-currency currency font-bold ml-1">€</span>
          </div>
          <div className="col-total">
            <span className="product-price text-black text-base font-bold">20</span>
            <span className="product-currency currency font-bold ml-1">€</span>
          </div>
        </li>
        <li className="product row">
          <div className="col-product">
            <figure className="product-image flex items-center flex-row flex-no-wrap">
              <img className="mr-4 border border-solid border-lavender-gray rounded-md" src="cap.png" alt="Cap" />
              <div className="product-description">
                <h1 className="text-primary text-lg font-black">Cap</h1>
                <p className="product-code text-quick-silver font-semi-bold">Product code X3W2OPY</p>
              </div>
            </figure>
          </div>
          <NumericStepper></NumericStepper>
          <div className="col-price">
            <span className="product-price text-black text-base font-bold">10</span>
            <span className="product-currency currency font-bold ml-1">€</span>
          </div>
          <div className="col-total">
            <span className="product-price text-black text-base font-bold">40</span>
            <span className="product-currency currency font-bold ml-1">€</span>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default ShoppingCart;
