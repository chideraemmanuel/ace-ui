import styled, { css } from 'styled-components';
import {
  StyledInputFieldProps,
  StyledTextInputProps,
  TextInputHintProps,
  TextInputIconProps,
  TextInputLabelProps,
} from './TextInput.types';

// export const StyledTextInput = styled.input`

// `

export const StyledTextInputContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const StyledTextInputLabel = styled.span<TextInputLabelProps>`
  color: ${({ $color }) => $color || '#101828'};
  font-size: ${({ $fontSize, theme }) =>
    $fontSize || theme.font['xs-font'] || '0.875rem'};
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 1.225rem */
  letter-spacing: -0.01263rem;
`;

export const StyledTextInput = styled.div<StyledTextInputProps>`
  /* border-radius: 0.5rem; */
  border-radius: ${({ $borderRadius }) => $borderRadius || '0.5rem'};
  border: ${({ $border }) => $border || '1px solid #d0d5dd'};
  background: ${({ $background }) => $background || '#fff'};
  /* padding: 0 0.875rem; */
  padding: ${({ theme }) => `0 ${theme.space['fluid-inline-space-3']}`};
  box-shadow: ${({ $boxShadow }) =>
    $boxShadow || '0px 1px 2px 0px rgba(16, 24, 40, 0.05)'};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space['fluid-inline-space-1'] || '0.5rem'};
  transition: 0.3s ease;

  /* &:hover {
    border: 1px solid #d6bbfb;
    box-shadow: 0px 0px 0px 4px #f4ebff, 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  } */

  &:hover,
  &:focus-within {
    border: ${({ $focus }) => $focus?.border || '1px solid #d6bbfb'};
    box-shadow: 0px 0px 0px 4px
      ${({ $focus }) => $focus?.boxShadowColor || '#f4ebff'};
  }

  > div {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space['fluid-inline-space-1'] || '0.5rem'};
  }

  .help-icon {
    font-size: ${({ theme }) => theme.font['sm-font'] || '1rem'};
    color: #667085;
    line-height: 140%;
    cursor: pointer;
  }

  /************************************
   Read Only
  *************************************/
  ${({ $readOnly }) =>
    $readOnly &&
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
  ${({ $error }) =>
    $error &&
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

export const StyledTextInputField = styled.input<StyledInputFieldProps>`
  font-size: ${({ $fontSize, theme }) =>
    $fontSize || theme.font['sm-font'] || '1rem'};
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 1.4rem */
  letter-spacing: -0.01438rem;
  border: none;
  outline: none;
  color: ${({ $color }) => $color || '#101828'};
  /* padding: 0.625rem 0; */
  padding: ${({ theme }) => `${theme.space['fluid-block-space-2']} 0}`};
  background: ${({ $background }) => $background || '#fff'};

  &::placeholder {
    font-size: ${({ $fontSize, theme }) =>
      $fontSize || theme.font['sm-font'] || '1rem'};
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 1.4rem */
    letter-spacing: -0.01438rem;
    /* color: #; */
    color: ${({ $placeholderStyles }) =>
      $placeholderStyles?.color || '#667085'};
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

export const StyledTextInputIcon = styled.span<TextInputIconProps>`
  font-size: ${({ theme }) => theme.font['md-font'] || '1.25rem'};
  color: ${({ $color }) => $color || '#667085'};
  /* line-height: 140%; */
  display: flex;
  align-items: center;
`;

export const StyledTextInputHint = styled.div<TextInputHintProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    /* color: #667085; */
    color: ${({ $color }) => $color || '#667085'};
    font-size: ${({ $fontSize, theme }) =>
      $fontSize || theme.font['xs-font'] || '0.875rem'};
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 1.225rem */
    letter-spacing: -0.01263rem;

    /* Error */
    ${({ $error }) =>
      $error &&
      css`
        color: #fda29b;
      `}
  }

  .forgot-password {
    color: #667085;
    font-size: ${({ theme }) => theme.font['xs-font'] || '0.875rem'};
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 1.225rem */
    letter-spacing: -0.01263rem;
  }
`;
