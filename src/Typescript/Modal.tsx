import { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  children: ReactNode;
};

function Modal({ children }: ModalProps) {
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) elRef.current = document.createElement('div');
  useEffect(() => {
    const modalRoot = document.querySelector('#modal-root') as HTMLDivElement;
    modalRoot.appendChild(elRef.current!);
    return () => {
      modalRoot.removeChild(elRef.current!);
    };
  }, []);

  return createPortal(children, elRef.current);
}

export default Modal;
