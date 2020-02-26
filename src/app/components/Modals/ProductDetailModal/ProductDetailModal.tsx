import React from 'react';

import { IProductData } from 'app/interfaces/product-data';

import Button, { ButtonSize, ButtonUse } from 'app/components/Button/Button';
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
        <div className="w-1/2 sm:w-2/3">
          <div 
            className="w-full h-full bg-anti-flash-white bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url(${product.img_url})`}}>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 p-8">
          <div className="flex mb-16">
            <span className="cursor-pointer ml-auto" onClick={onClose}>
              <Icon icon="close" iconClass="stroke-quick-silver" width="24" height="24"/>
            </span>
          </div>
          <div className="flex items-center border-b border-solid border-gainsboro py-4 mb-2">
            <h1 className="font-extra-bold text-lg">{product.name}</h1>
            <span className="font-extra-bold text-lg ml-auto">{product.price} €</span>
          </div>
          <div className="flex border-b border-solid border-gainsboro py-4 mb-3">
            <p className="text-xs font-medium pb-6">
              {product.description}
            </p>
          </div>
          <div className="flex mb-6">
            <span className="text-xs font-bold text-quick-silver">Product code {product.code}</span>
          </div>
          <div className="flex">
            <Button
              label="Add to cart"
              use={ButtonUse.primary}
              size={ButtonSize.md}
              block={true}
              className="mt-12" />
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProductDetailModal;