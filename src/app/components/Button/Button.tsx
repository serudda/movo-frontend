import React from 'react';

import * as classNames from 'classnames';

import './Button.css';

export enum ButtonUse {
  primary = 'primary',
  secondary = 'secondary'
}

export enum ButtonSize {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl'
}

export enum ButtonType {
  button = 'button',
  reset = 'reset',
  submit = 'submit'
}

export interface IProps {
  label: string;
  size?: string;
  use?: ButtonUse;
  block?: boolean;
  type?: ButtonType;
  className?: string;
  onClick: (e: React.FormEvent<{}>) => any;
}

const Button = ({
  label,
  size = ButtonSize.md,
  use = ButtonUse.primary,
  type = ButtonType.button,
  block = false,
  className,
  onClick
}: IProps) => {

  const btnClass = classNames({
    'mo-btn': true,
    [`mo-btn--${size}`]: true,
    [`mo-btn--${use}`]: true,
    'mo-btn--block': block,
    [`${className}`]: !!className
  });

  return (
    <button
      className={btnClass}
      type={type}
      onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;