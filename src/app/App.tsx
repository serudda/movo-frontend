import React from 'react';

import { ModalProvider } from 'app/contexts/ModalContext';

import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

import ModalContainer from 'app/components/Modals/ModalContainer';

const App = () => {
  return (
    <ModalProvider>
      <CheckoutPage />
      <ModalContainer />
    </ModalProvider>
  );
}

export default App;
