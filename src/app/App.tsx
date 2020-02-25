import React from 'react';

import { ModalProvider } from 'app/contexts/ModalContext';

import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

import Modal from 'app/components/Modal/Modal';

const App = () => {
  return (
    <ModalProvider>
      <CheckoutPage />
      <Modal />
    </ModalProvider>
  );
}

export default App;
