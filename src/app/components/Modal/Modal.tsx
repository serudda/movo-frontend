import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import { ModalContext } from 'app/contexts/ModalContext';

import './Modal.css';

const Modal = () => {
  const {isShowing, setIsShowing} = useContext(ModalContext);

  return isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button
            type="button"
            className="modal-close-button"
            data-dismiss="modal"
            aria-label="Close" onClick={() => setIsShowing(!isShowing)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
          Hello, I'm a modal.
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;}

export default Modal;