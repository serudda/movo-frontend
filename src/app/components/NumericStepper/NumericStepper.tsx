import React from 'react';

const NumericStepper = () => {
  return (
    <div className="col-quantity">
      <button className="count">-</button>
      <input type="text" className="product-quantity" value="3" />
      <button className="count">+</button>
    </div>
  );
};

export default NumericStepper;