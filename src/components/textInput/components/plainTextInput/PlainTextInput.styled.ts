import styled, { css } from 'styled-components';

interface ContainerProps {
  error: boolean;
  readOnly: boolean;

  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  background?: string;
  // padding:
  boxShadow?: string;
  focusRing?: {
    error: boolean;
    borderColor: string;
    boxShadowColor: string;
  };
}

export const StyledPlainTextInputContainer = styled.div<ContainerProps>`
  /* border-radius: 0.5rem; */
  border-radius: ${({ borderRadius }) => borderRadius || '0.5rem'};
  border: 1px solid #d0d5dd;
  border-color: ${({ borderColor }) => borderColor || '#d0d5dd'};
  border-width: ${({ borderWidth }) => borderWidth || '1px'};
  border-style: ${({ borderStyle }) => borderStyle || 'solid'};
  /* background: #fff; */
  background: ${({ background }) => background || '#fff'};
  padding: 0 0.875rem;
  /* box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05); */
  box-shadow: ${({ boxShadow }) =>
    boxShadow || '0px 1px 2px 0px rgba(16, 24, 40, 0.05)'};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: 0.3s ease;

  /* &:hover {
    border: 1px solid #d6bbfb;
    box-shadow: 0px 0px 0px 4px #f4ebff, 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  } */

  &:hover {
    border: 1px solid ${({ focusRing }) => focusRing?.borderColor || '#d6bbfb'};
    box-shadow: 0px 0px 0px 4px
      ${({ focusRing }) => focusRing?.boxShadowColor || '#f4ebff'};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .help-icon {
    font-size: 1rem;
    color: #667085;
    line-height: 140%;
    cursor: pointer;
  }

  /************************************
   Read Only
  *************************************/
  ${({ readOnly }) =>
    readOnly &&
    css`
      cursor: not-allowed;
      /* pointer-events: none; */

      border: 1px solid #d0d5dd;
      background: #f9fafb;

      /* Shadow/xs */
      box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

      &:hover {
        border: 1px solid #d0d5dd;
        box-shadow: none;
      }

      .help-icon {
        color: #fda29b;
        display: none;
      }
    `}

  /************************************
   Error Variants
  *************************************/
  ${({ error }) =>
    error &&
    css`
      border: 1px solid #fda29b;

      &:hover {
        border: 1px solid #fda29b;
        box-shadow: 0px 0px 0px 4px #fee4e2,
          0px 1px 2px 0px rgba(16, 24, 40, 0.05);
      }

      .help-icon {
        color: #fda29b;
      }
    `}
`;

interface InputProps {
  readOnly?: boolean;
  background?: string;
  // placeholder
}

export const StyledPlainTextInput = styled.input<InputProps>`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 1.4rem */
  letter-spacing: -0.01438rem;
  border: none;
  outline: none;
  color: #101828;
  padding: 0.625rem 0;
  background: ${({ background }) => background || '#fff'};

  ::placeholder {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 1.4rem */
    letter-spacing: -0.01438rem;
    color: #667085;
  }

  /* &:read-only {
  } */

  /************************************
   Read Only
  *************************************/
  ${({ readOnly }) =>
    readOnly &&
    css`
      color: #667085;
      background: #f9fafb;
      cursor: not-allowed;
    `}
`;

export const StyledPlainTextInputIcon = styled.span`
  font-size: 1.25rem;
  color: #667085;
  line-height: 140%;
`;
