import styled, { css } from 'styled-components';

interface ButtonProps {
  // base
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  //   variants
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  loaderPosition?: 'start' | 'end' | 'center';
  iconSize?: string;
  iconPosition?: 'start' | 'end' | 'center';

  // custom styling
  borderRadius?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  background?: string;
  color?: string;
  width?: string;
  fontSize?: string;
}

export const StyledButton = styled.a<ButtonProps>`
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid #7f56d9;
  gap: ${({ theme }) => theme['space-1']};
  /* CUSTOM */
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  background: ${({ background }) => background || '#7f56d9'};
  color: ${({ color }) => color || '#fff'};
  padding: ${({ padding }) => padding};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight};
  width: ${({ width }) => width};

  /* .icon {
    display: inline-block;

    svg {
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${({ iconSize }) =>
    iconSize && iconSize.length > 0 ? iconSize : '1rem'};
      aspect-ratio: 1 / 1;
    }
  } */

  /************************************
   Size Variants 
  *************************************/
  ${({ size, padding, iconSize }) =>
    size === 'sm' &&
    css`
      padding: ${padding && padding.length > 0
        ? padding
        : '0.5rem 0.88rem'} !important;
      font-size: 0.875rem;

      /* .icon {
        svg {
          width: ${iconSize && iconSize.length > 0 ? iconSize : '0.875rem'};
        }
      } */
    `}

  ${({ size, padding, theme, iconSize }) =>
    size === 'md' &&
    css`
      padding: ${padding && padding.length > 0
        ? padding
        : `0.62rem ${theme['space-4']}`} !important;
      font-size: 0.875rem;

      /* .icon {
        svg {
          width: ${iconSize && iconSize.length > 0 ? iconSize : '0.875rem'};
        }
      } */
    `}

  ${({ size, padding, iconSize }) =>
    size === 'lg' &&
    css`
      padding: ${padding && padding.length > 0
        ? padding
        : '0.62rem 1.12rem'} !important;
      font-size: 1rem;

      /* .icon {
        svg {
          width: ${iconSize && iconSize.length > 0 ? iconSize : '1rem'};
        }
      } */
    `}

  ${({ size, padding, iconSize }) =>
    size === 'xl' &&
    css`
      padding: ${padding && padding.length > 0
        ? padding
        : '0.75rem 1.25rem'} !important;
      font-size: 1rem;

      /* .icon {
        svg {
          width: ${iconSize && iconSize.length > 0 ? iconSize : '1rem'};
        }
      } */
    `}

  ${({ size, padding, iconSize }) =>
    size === '2xl' &&
    css`
      padding: ${padding && padding.length > 0
        ? padding
        : '1rem 1.75rem'} !important;
      font-size: 1.125rem;

      /* .icon {
        svg {
          width: ${iconSize && iconSize.length > 0 ? iconSize : '1.125rem'};
        }
      } */
    `}

  /************************************
   Loading Variants 
  *************************************/
    ${({ loaderPosition }) =>
    loaderPosition === 'end' &&
    css`
      flex-direction: row-reverse !important;
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

interface IconProps {
  buttonSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  iconSize?: string;
}

export const StyledButtonIcon = styled.span<IconProps>`
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
