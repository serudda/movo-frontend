import * as React from 'react';

interface IconType {
  close: () => JSX.Element;
}

export interface IProps {
  color?: string;
  width: string;
  height: string;
  icon: string;
  iconClass?: string;
};

const Icon = ({
  color = 'var(--black)',
  width = '24px',
  height = '24px',
  icon = 'default',
  iconClass = 'stroke-black'
}: IProps) => {

  const svg: IconType = {
    close: () => {
      return (
        <svg
          className={iconClass}
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    }
  };

  return svg[icon]();
};


export default Icon;