import React, { useContext } from 'react';

import { CheckoutContext } from 'app/contexts/CheckoutContext';

import Product from 'app/components/Product/Product';

const ShoppingCart = () => {
  const checkout = useContext(CheckoutContext);

  const productsList = checkout.availableProducts ? checkout.availableProducts.map((product) =>
    <Product key={product.id} product={product} />
  ) : null;

  return (
    <section className="ShoppingCart products py-8 px-12 flex-1">
      <h1 className="pb-4 border-solid border-b border-gainsboro font-black">
        Shopping cart
      </h1>
      <ul className="products-list relative w-full py-8">
        <li className="products-list-title text-quick-silver uppercase text-2xs leading-4 tracking-wider font-bold row">
          <div className="col-product">Product details</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-price">Price</div>
          <div className="col-total">Total</div>
        </li>
      </ul>
      <ul className="products-list relative w-full">
        {productsList}
      </ul>
    </section>
  );
}

export default ShoppingCart;
