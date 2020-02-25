import React, { useContext } from 'react';

import ProductDetailModal from './ProductDetailModal/ProductDetailModal';

import { ModalContext } from 'app/contexts/ModalContext';

import './ModalContainer.css';

const Modals = {
  ProductDetailModal
};

const ModalContainer = () => {
  const { currentModal, setCurrentModal } = useContext(ModalContext);
  const closeModel = () => setCurrentModal(null);

  if (currentModal) {
    const ModelComponent = Modals[currentModal.name];
    return (
      <div className="ModalContainer">
        <div className="overlay bg-black opacity-50 fixed z-40"/>
        <ModelComponent closeModel={closeModel} {...currentModal.props} />
      </div>
    );
  }
  return null;
};

export default ModalContainer;