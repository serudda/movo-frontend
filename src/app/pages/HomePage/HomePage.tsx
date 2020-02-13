import React from 'react';

const HomePage = () => {
  return (
    <main className="HomePage">
      <section className="products py-8 px-12 flex-1">
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
            <div className="col-quantity">
              <button className="count">-</button>
              <input type="text" className="product-quantity" value="3" />
              <button className="count">+</button>
            </div>
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
            <div className="col-quantity">
              <button className="count">-</button>
              <input type="text" className="product-quantity" value="4" />
              <button className="count">+</button>
            </div>
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
            <div className="col-quantity">
              <button className="count">-</button>
              <input type="text" className="product-quantity" value="4" />
              <button className="count">+</button>
            </div>
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
      <aside className="summary text-yankees-blue flex flex-col flex-wrap p-8">
        <h1 className="pb-4 border-solid border-b border-gainsboro font-black">Order Summary</h1>
        <ul className="summary-items wrapper border-b border-solid border-gainsboro py-8">
          <li>
            <span className="summary-items-number font-bold">11 Items</span>
            <span className="summary-items-price text-base font-bold">120<span className="currency font-bold ml-1">€</span></span>
          </li>
        </ul>
        <div className="summary-discounts wrapper-half py-6">
          <h2 className="text-quick-silver uppercase text-xs leading-4 tracking-wider font-bold mb-4">Discounts</h2>
          <ul className="font-bold">
            <li><span>2x1 Mug offer</span><span>-10€</span></li>
            <li><span>x3 Shirt offer</span><span>-3€</span></li>
            <li><span>Promo code</span><span>0€</span></li>
          </ul>
        </div>
        <div className="summary-total wrapper text-yankees-blue self-end mt-auto pt-4 pb-0 border-solid border-t border-gainsboro">
          <ul>
            <li className="flex items-center">
              <span className="summary-total-cost uppercase font-bold">Total cost</span>
              <span className="summary-total-price text-xl leading-6 font-bold">107€</span>
            </li>
          </ul>
          <button type="submit">Checkout</button>
        </div>
      </aside>
    </main>
  );
}

export default HomePage;
