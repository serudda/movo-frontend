import React from 'react';

import './Button.css';

export interface Props {
  label: string;
}

const Button = ({label}: Props) => <button className="mo-btn" type="submit">{label}</button>

export default Button;