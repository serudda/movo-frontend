import React from 'react';

import { IProductData } from 'app/interfaces/product-data';

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
    <>
      <div className="modal-overlay"/>
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-header">
            <button
              type="button"
              className="modal-close-button"
              data-dismiss="modal"
              aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <p>
            Hello, {product.name}.
            My price: {product.price}.
          </p>
        </div>
      </div>
    </>
  );
}


export default ProductDetailModal;