import React from 'react';

import { IProductData } from 'app/interfaces/product-data';

import Icon from 'app/components/Icon/Icon';

import './ProductDetailModal.css';

export interface IProps {
  product: IProductData;
  onClose: () => void;
}

const ProductDetailModal = ({
  product,
  onClose
}: IProps) => {
  return (
    <div className="ProductDetailModal" aria-modal aria-hidden role="dialog">
      <div className="content bg-white flex rounded-md h-full">
        <div
          className="w-2/3 bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: `url(tshirt@2x-crop.jpg)`}}></div>
        <div className="w-1/3">
          <span className="cursor-pointer" onClick={onClose}>
          <Icon
            icon="close"
            iconClass="stroke-quick-silver"
            width="24" height="24"/>
          </span>
        </div>
      </div>
    </div>
  );
}


export default ProductDetailModal;