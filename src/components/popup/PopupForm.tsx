import * as React from 'react';
import Modal from '../modal/ModalBox';
import closeIcon from '../../assets/icons/close.svg';
import Image from 'next/image';

export interface IPopupFormProps {
  children: React.ReactNode;
  title?: string;
  contentClass?: string;
  zIndex?: string;
  onClose?: () => void;
}

export default function PopupForm({
  children,
  title,
  onClose,
  contentClass,
  zIndex = '',
}: IPopupFormProps) {
  return (
    <Modal zIndex={zIndex}>
      <div className='fixed top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-30px)] rounded-3xl h-auto max-w-[640px] shadow-lg bg-white z-10 pt-5 pb-8'>
        {title && (
          <h3 className='px-9 border-b border-b-[#cbcbcb] pb-5 text-blue-500 font-bold text-xl mb-[10px]'>
            {title}
          </h3>
        )}
        {onClose && (
          <button
            className='absolute top-3 right-3 w-[42px] h-[42px] flex items-center justify-center hover:opacity-100 opacity-80 transition-all ease-linear'
            onClick={onClose}
          >
            <Image width={24} height={24} src={closeIcon} alt='close' />
          </button>
        )}
        <div className={contentClass ? contentClass : 'mx-5'}>{children}</div>
      </div>
    </Modal>
  );
}
