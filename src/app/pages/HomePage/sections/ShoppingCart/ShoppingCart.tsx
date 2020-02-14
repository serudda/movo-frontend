import React from 'react';

import ItemRow from 'app/components/ItemRow/ItemRow';

const ShoppingCart = () => {
  const products = [
    {name: 'Shirt', code: 'TSHIRT', price: 20, urlImg: 'shirt.png'},
    {name: 'Mug', code: 'MUG', price: 5, urlImg: 'mug.png'},
    {name: 'Cap', code: 'CAP', price: 10, urlImg: 'cap.png'}
  ];

  const productsList = products.map((product) =>
    <ItemRow product={product}/>
  );

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
