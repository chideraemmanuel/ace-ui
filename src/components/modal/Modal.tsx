'use client';

import React, { useState } from 'react';
import { StyledModal, StyledModalOvarlay } from './Modal.styled';
import { ComponentProps } from './Modal.types';

const Modal: React.FC<ComponentProps> = ({ children }) => {
  const [modalActive, setModalActive] = useState(true);

  return (
    <>
      {modalActive && (
        <>
          <StyledModalOvarlay onClick={() => setModalActive(false)} />
          <StyledModal>{children}</StyledModal>
        </>
      )}
    </>
  );
};

export default Modal;
