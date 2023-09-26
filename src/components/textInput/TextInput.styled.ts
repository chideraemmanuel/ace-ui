import styled, { css } from 'styled-components';

// export const StyledTextInput = styled.input`

// `

export const StyledTextInputContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const StyledTextInputLabel = styled.span`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 1.225rem */
  letter-spacing: -0.01263rem;
  color: #101828;
`;

interface InputProps {
  error?: boolean;
  readOnly: boolean;

  borderRadius?: string;
  border?: string;
  background?: string;
  // padding:
  boxShadow?: string;
  focus?: {
    focused: boolean;
    border: string;
    boxShadowColor: string;
  };
}

export const StyledTextInput = styled.div<InputProps>`
  /* border-radius: 0.5rem; */
  border-radius: ${({ borderRadius }) => borderRadius || '0.5rem'};
  border: ${({ border }) => border || '1px solid #d0d5dd'};
  background: ${({ background }) => background || '#fff'};
  padding: 0 0.875rem;
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

  &:hover,
  &:focus-within {
    border: ${({ focus }) => focus?.border || '1px solid #d6bbfb'};
    box-shadow: 0px 0px 0px 4px
      ${({ focus }) => focus?.boxShadowColor || '#f4ebff'};
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

      &:hover,
      &:focus {
        border: 1px solid #fda29b;
        box-shadow: 0px 0px 0px 4px #fee4e2,
          0px 1px 2px 0px rgba(16, 24, 40, 0.05);
      }

      .help-icon {
        color: #fda29b;
      }
    `}
`;

interface InputFieldProps {
  readOnly?: boolean;
  background?: string;
  color: string;
  fontSize: string;
  // placeholder
}
export const StyledTextInputField = styled.input<InputFieldProps>`
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 1.4rem */
  letter-spacing: -0.01438rem;
  border: none;
  outline: none;
  color: ${({ color }) => color || '#101828'};
  padding: 0.625rem 0;
  background: ${({ background }) => background || '#fff'};

  ::placeholder {
    font-size: ${({ fontSize }) => fontSize || '1rem'};
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

export const StyledTextInputIcon = styled.span`
  font-size: 1.25rem;
  color: #667085;
  line-height: 140%;
`;

interface HintProps {
  error?: boolean;
}

export const StyledTextInputHint = styled.div<HintProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: #667085;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 1.225rem */
    letter-spacing: -0.01263rem;

    /* Error */
    ${({ error }) =>
      error &&
      css`
        color: #fda29b;
      `}
  }

  .forgot-password {
    color: #667085;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 1.225rem */
    letter-spacing: -0.01263rem;
  }
`;
