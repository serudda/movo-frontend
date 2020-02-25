import React, { createContext, useState } from 'react';

export enum Modals {
  ProductDetailModal = 'ProductDetailModal'
}

interface ICurrentModal {
  name: Modals;
  props: any;
}

export interface IModalContext {
  currentModal: ICurrentModal | null;
  setCurrentModal: React.Dispatch<React.SetStateAction<any>>;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider = props => {
  const [currentModal, setCurrentModal] = useState(null);

  return (
    <ModalContext.Provider value={{ currentModal, setCurrentModal }}>
      {props.children}
    </ModalContext.Provider>
  );
};