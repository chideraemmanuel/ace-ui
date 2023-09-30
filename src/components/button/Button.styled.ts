import styled, { css } from 'styled-components';
import { StyledButtonProps, StyledIconProps } from './Button.types';

export const StyledButton = styled.a<StyledButtonProps>`
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  border: ${({ border, background, theme }) =>
    border || `1px solid ${background || theme['primary-color'] || '#121212'}`};
  gap: ${({ theme }) => theme['fluid-inline-space-1']};
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  /* CUSTOM */
  border-radius: ${({ borderRadius }) => borderRadius || '0.5rem'};
  background: ${({ background, theme }) =>
    background || theme['primary-color'] || '#121212'};
  color: ${({ color }) => color || '#fff'};
  width: ${({ width }) => width};
  transition: 0.2s ease;

  font-size: ${({ fontSize, theme }) =>
    fontSize === 'xs' ||
    fontSize === 'sm' ||
    fontSize === 'base' ||
    fontSize === 'md' ||
    fontSize === 'lg' ||
    fontSize === 'xl' ||
    fontSize === '2xl' ||
    fontSize === '3xl'
      ? `${theme[`${fontSize}-font`]}`
      : fontSize};

  &:hover {
    background: ${({ hover }) => hover?.background || '#272727'};
    color: ${({ hover }) => hover?.color || '#fff'};
    border: ${({ hover }) =>
      hover?.border || `1px solid ${hover?.background || '#272727'}`};
    /* box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05); */
  }

  &:focus {
    border: ${({ focus }) =>
      focus?.border || `1px solid ${focus?.background || '#121212'}`};
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
        border: ${focus?.border ||
        `1px solid ${focus?.background || '#F5F5F5'}`};
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
  ${({ size, padding, theme, fontSize }) =>
    size === 'sm' &&
    css`
      padding: ${padding && padding.length > 0
        ? padding
        : `${theme['fluid-block-space-1']} ${theme['fluid-inline-space-3']}`} !important;
      // '0.5rem 0.88rem'
      font-size: ${!fontSize || fontSize?.length < 1
        ? theme['xs-font']
        : undefined};

      svg {
        width: ${!fontSize || fontSize?.length < 1
          ? theme['xs-font']
          : undefined};
        aspect-ratio: 1 / 1;
      }
    `}

  ${({ size, padding, theme, fontSize }) =>
    size === 'md' &&
    css`
      padding: ${padding && padding.length > 0
        ? padding
        : `${theme['fluid-block-space-2']} ${theme['fluid-inline-space-3']}`} !important;
      font-size: ${!fontSize || fontSize?.length < 1
        ? theme['xs-font']
        : undefined};

      svg {
        width: ${!fontSize || fontSize?.length < 1
          ? theme['xs-font']
          : undefined};
        aspect-ratio: 1 / 1;
      }
    `}

  ${({ size, padding, theme, fontSize }) =>
    size === 'lg' &&
    css`
      padding: ${padding && padding.length > 0
        ? padding
        : `${theme['fluid-block-space-2']} ${theme['fluid-inline-space-4']}`} !important;
      /* : '0.62rem 1.12rem'} !important; */
      font-size: ${!fontSize || fontSize?.length < 1
        ? theme['sm-font']
        : undefined};

      svg {
        width: ${!fontSize || fontSize?.length < 1
          ? theme['sm-font']
          : undefined};
        aspect-ratio: 1 / 1;
      }
    `}

  ${({ size, padding, theme, fontSize }) =>
    size === 'xl' &&
    css`
      padding: ${padding && padding.length > 0
        ? padding
        : `${theme['fluid-block-space-3']} ${theme['fluid-inline-space-5']}`} !important;
      /* : '0.75rem 1.25rem'} !important; */
      font-size: ${({ theme }) => theme['sm-font']} !important;

      svg {
        font-size: ${!fontSize || fontSize?.length < 1
          ? theme['sm-font']
          : undefined};
        aspect-ratio: 1 / 1;
      }
    `}

  ${({ size, padding, theme, fontSize }) =>
    size === '2xl' &&
    css`
      padding: ${padding && padding.length > 0
        ? padding
        : `${theme['fluid-block-space-3']} ${theme['fluid-inline-space-6']}`} !important;
      /* : '1rem 1.75rem'} !important; */
      font-size: ${({ theme }) => theme['base-font']} !important;

      svg {
        width: ${theme['base-font']};
        font-size: ${!fontSize || fontSize?.length < 1
          ? theme['base-font']
          : undefined};
        aspect-ratio: 1 / 1;
      }
    `}
`;
