import React, { useContext } from 'react';

import ProductDetailModal from './ProductDetailModal/ProductDetailModal';

import { ModalContext } from 'app/contexts/ModalContext';

const Modals = {
  ProductDetailModal
};

const ModalContainer = () => {
  const { currentModal, setCurrentModal } = useContext(ModalContext);
  const closeModel = () => setCurrentModal(null);

  if (currentModal) {
    const ModelComponent = Modals[currentModal.name];
    return <ModelComponent closeModel={closeModel} {...currentModal.props} />;
  }
  return null;
};

export default ModalContainer;