import React, { KeyboardEventHandler,MouseEvent, ReactNode, useEffect } from 'react';
import Portal from './Portal';
import { Overlay, Dialog } from './styles';

interface ModalProps {
  children:ReactNode
  open:boolean
  onClose:()=>void }

const Modal = ({ children, open, onClose }:ModalProps):JSX.Element => {
  useEffect(() => {
    function onEsc(e:any) {
      if (e.keyCode === 27) onClose();
    }
    window.addEventListener('keydown', onEsc);
    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, [onClose])

  function onOverlayClick() {
    onClose()
  }

  function onDialogClick(e:MouseEvent) {
    e.stopPropagation()
  }

  return (
    open ?
      (<></>) :
      (<Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={onDialogClick}>{children}</Dialog>
      </Overlay>
      </Portal>)

  )
}

export default Modal;



