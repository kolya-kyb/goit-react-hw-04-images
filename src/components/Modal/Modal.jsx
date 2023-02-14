import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { createPortal } from 'react-dom';

import { Overlay, ModalWindow, Close } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ close, children }) => {
  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  }, []);

  return createPortal(
    <Overlay onClick={closeModal}>
      <ModalWindow>
        <Close onClick={close}>X</Close>
        {children}
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
export default Modal;

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  close: PropTypes.func.isRequired,
};

/*
class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };

  render() {
    const { children, close } = this.props;
    const { closeModal } = this;

    return createPortal(
      <Overlay onClick={closeModal}>
        <ModalWindow>
          <Close onClick={close}>X</Close>
          {children}
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
*/
