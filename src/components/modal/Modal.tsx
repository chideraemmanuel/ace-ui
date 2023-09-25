import React, { useState } from 'react';
// import { StyledModal, StyledModalContainer } from './Modal.styled';
import { StyledModal, StyledModalOvarlay } from './Modal.styled';

interface Props {
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ children }) => {
  const [modalActive, setModalActive] = useState(true);

  return (
    <>
      {/* {modalActive && (
        <StyledModalContainer onClick={() => setModalActive(false)}>
          <StyledModal>{children}</StyledModal>
        </StyledModalContainer>
      )} */}
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
