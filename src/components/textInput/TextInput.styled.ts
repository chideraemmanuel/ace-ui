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

interface HintProps {
  error: boolean;
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
