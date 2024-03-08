'use client';

import { ReactNode } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  opacity?: number;
  contentClass?: string;
  animation?: string;
  onCloseModal: () => void;
}

export default function ModalBox({
  children,
  isOpen,
  // opacity,
  // contentClass,
  // animation,
  onCloseModal
}: IModalProps) {
  return (
    <Modal open={isOpen} onClose={onCloseModal} center>
      {children}
    </Modal>
  );
}
