import styled from 'styled-components';

export const StyledModalOvarlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  background-color: hsla(0, 0%, 100%, 0.8);
  backdrop-filter: saturate(180%) blur(5px);
  /* -webkit-backdrop-filter: blur(2px); */

  @media (prefers-color-scheme: dark) {
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: saturate(180%) blur(5px);
  }
`;

export const StyledModal = styled.div`
  position: fixed;
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  max-width: 90%;
  background-color: #fff;
  border-radius: 0.75rem;
  /* width: 25rem; */
  padding: 1.5rem;
  box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03),
    0px 20px 24px -4px rgba(16, 24, 40, 0.08);

  @media screen and (max-width: 640px) {
    transform: translate(-50%, 0);
    /* top: calc(100vh - 5rem); */
    top: initial;
    bottom: 5rem;
  }
`;
