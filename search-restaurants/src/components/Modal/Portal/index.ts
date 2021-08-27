import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

const PortalModal = ({ children }:{children:ReactNode}):JSX.Element => {
  const portal:HTMLElement = document.getElementById('modal-root') as HTMLInputElement
  return ReactDOM.createPortal(children, portal);
};

export default PortalModal;
