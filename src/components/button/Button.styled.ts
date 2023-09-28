import styled, { css } from 'styled-components';
import { StyledButtonProps, StyledIconProps } from './Button.types';

export const StyledButton = styled.a<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid ${({ background }) => background || '#121212'};
  gap: ${({ theme }) => theme['space-1']};
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  /* CUSTOM */
  border-radius: ${({ borderRadius }) => borderRadius || '0.5rem'};
  background: ${({ background }) => background || '#121212'};
  color: ${({ color }) => color || '#fff'};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  transition: 0.2s ease;

  &:hover {
    background: ${({ hover }) => hover?.background || '#272727'};
    color: ${({ hover }) => hover?.color || '#fff'};
    border: 1px solid ${({ hover }) => hover?.background || '#272727'};
    /* box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05); */
  }

  &:focus {
    border: 1px solid ${({ focus }) => focus?.background || '#121212'};
    border-color: ${({ focus }) => focus?.borderColor || '#121212'};
    border-width: ${({ focus }) => focus?.borderWidth || '1px'};
    border-style: ${({ focus }) => focus?.borderStyle || 'solid'};
    background: ${({ focus }) => focus?.background || '#121212'};
    color: ${({ focus }) => focus?.color || '#fff'};
    box-shadow: 0px 0px 0px 4px #f4ebff, 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  }

  &:disabled {
    border: 1px solid #e0e0e0;
    background: #e0e0e0;
    color: #fff;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      border: 1px solid #e0e0e0;
      background: #e0e0e0;
      color: #fff;
      box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
      cursor: not-allowed;

      &:hover {
        border: 1px solid #e0e0e0;
        background: #e0e0e0;
        color: #fff;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
      }
    `}

  /************************************
   Type Variants 
  *************************************/
    ${({ variant, color, background, hover, focus }) =>
    variant === 'secondary' &&
    css`
      border: 1px solid ${background || '#e0e0e0'};
      background: ${background || '#e0e0e0'};
      color: ${color || '#121212'};
      box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

      &:hover {
        background: ${hover?.background || '#B0B0B0'};
        color: ${hover?.color || '#121212'};
        border: 1px solid ${hover?.background || '#B0B0B0'};
        /* box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05); */
      }

      &:focus {
        border: 1px solid ${focus?.background || '#F5F5F5'};
        border-color: ${focus?.borderColor || '#F5F5F5'};
        border-width: ${focus?.borderWidth || '1px'};
        border-style: ${focus?.borderStyle || 'solid'};
        background: ${focus?.background || '#E0E0E0'};
        color: ${focus?.color || '#121212'};
        box-shadow: 0px 0px 0px 4px #f4ebff,
          0px 1px 2px 0px rgba(16, 24, 40, 0.05);
      }

      &:disabled {
        border: 1px solid #f5f5f5;
        background: #f5f5f5;
        color: #121212;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
      }
    `}
      ${({ variant, disabled }) =>
    variant === 'secondary' &&
    disabled &&
    css`
      border: 1px solid #f5f5f5;
      background: #f5f5f5;
      color: #121212;
      box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
      cursor: not-allowed;

      &:hover {
        border: 1px solid #f5f5f5;
        background: #f5f5f5;
        color: #121212;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
      }
    `}

  /************************************
   Size Variants 
  *************************************/
  ${({ size, padding }) =>
    size === 'sm' &&
    css`
      padding: ${padding && padding.length > 0
        ? padding
        : '0.5rem 0.88rem'} !important;
      font-size: 0.875rem;
    `}

  ${({ size, padding, theme }) =>
    size === 'md' &&
    css`
      padding: ${padding && padding.length > 0
        ? padding
        : `0.62rem ${theme['space-4']}`} !important;
      font-size: 0.875rem;
    `}

  ${({ size, padding }) =>
    size === 'lg' &&
    css`
      padding: ${padding && padding.length > 0
        ? padding
        : '0.62rem 1.12rem'} !important;
      font-size: 1rem;
    `}

  ${({ size, padding }) =>
    size === 'xl' &&
    css`
      padding: ${padding && padding.length > 0
        ? padding
        : '0.75rem 1.25rem'} !important;
      font-size: 1rem;
    `}

  ${({ size, padding }) =>
    size === '2xl' &&
    css`
      padding: ${padding && padding.length > 0
        ? padding
        : '1rem 1.75rem'} !important;
      font-size: 1.125rem;
    `}

  /************************************
   Icon Variants 
  *************************************/
      ${({ iconPosition }) =>
    iconPosition === 'end' &&
    css`
      flex-direction: row-reverse !important;
    `}
`;

export const StyledButtonIcon = styled.span<StyledIconProps>`
  display: inline-block;

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ iconSize }) =>
      iconSize && iconSize.length > 0 ? iconSize : '1rem'};
    aspect-ratio: 1 / 1;
  }

  /************************************
   Size Variants 
  *************************************/

  ${({ buttonSize, iconSize }) =>
    buttonSize === 'sm' &&
    css`
      width: ${iconSize && iconSize.length > 0 ? iconSize : '0.875rem'};
    `}

  ${({ buttonSize, iconSize }) =>
    buttonSize === 'md' &&
    css`
      width: ${iconSize && iconSize.length > 0 ? iconSize : '0.875rem'};
    `}

  ${({ buttonSize, iconSize }) =>
    buttonSize === 'lg' &&
    css`
      width: ${iconSize && iconSize.length > 0 ? iconSize : '1rem'};
    `}

  ${({ buttonSize, iconSize }) =>
    buttonSize === 'xl' &&
    css`
      width: ${iconSize && iconSize.length > 0 ? iconSize : '1rem'};
    `}

  ${({ buttonSize, iconSize }) =>
    buttonSize === '2xl' &&
    css`
      width: ${iconSize && iconSize.length > 0 ? iconSize : '1.125rem'};
    `}
`;
