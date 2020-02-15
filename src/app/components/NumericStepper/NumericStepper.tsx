import React, { useState } from 'react';

import './NumericStepper.css';

const NumericStepper = ({maxValue = 10}) => {

  const [value, setValue] = useState(0);

  const handleMinusClick = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const handlePlusClick = () => {
    if (value < maxValue) {
      setValue(value + 1);
    }
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="col-quantity">
      <button className="count" onClick={handleMinusClick}>-</button>
      <input type="text" className="product-quantity" value={value} onChange={handleValueChange}/>
      <button className="count" onClick={handlePlusClick}>+</button>
    </div>
  );
};

export default NumericStepper;