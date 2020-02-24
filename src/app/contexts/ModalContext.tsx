import React, { createContext, useState } from 'react';

export interface IModalContext {
  isShowing: boolean;
  setIsShowing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isShowing,
        setIsShowing
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};