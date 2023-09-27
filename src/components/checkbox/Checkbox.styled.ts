import styled, { css } from 'styled-components';

export const StyledCheckBoxContainer = styled.div`
  display: flex;
  //   align-items: center;
  align-items: flex-start;
  gap: 0.75rem;
`;

interface CheckboxProps {
  size?: 'sm' | 'md';
  variant: 'fill' | 'outline';
  background?: {
    checked: string;
    unchecked: string;
  };
  // color?: {
  //   checked: string;
  //   unchecked: string;
  // };
  color?: string;
  focus?: {
    checked: string;
    unchecked: string;
  };
  disabled?: boolean;
}
export const StyledCheckbox = styled.div<CheckboxProps>`
  input {
    visibility: hidden;
    display: none;

    &:checked {
      + label {
        /* border: 1px solid #7f56d9; */
        /* makes border same color with check svg */
        border: 1px solid ${({ color }) => color || '#7f56d9'};
        background: ${({ background }) => background?.checked || '#7f56d9'};

        svg {
          visibility: visible;
          /* box-sizing: content-box; */
        }
      }
    }
  }

  label {
    /* box-sizing: content-box; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.1875rem;
    border-radius: 0.25rem;
    /* border-radius: 0.375rem; */
    border: 1px solid #d0d5dd;
    background: ${({ background }) => background?.unchecked || '#fff'};
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 0px 4px
        ${({ focus }) => focus?.unchecked || '#f4ebff'};
    }

    svg {
      width: 1.125rem;
      height: 1.125rem;
      visibility: hidden;
      color: ${({ color }) => color || '#fff'};
    }
  }

  /************************************
    DISABLED
    *************************************/
  ${({ disabled }) =>
    disabled &&
    css`
      input {
        &:checked {
          + label {
            /* opacity: 0.7; */

            &:hover,
            &:focus {
              box-shadow: none;
            }
          }
        }
      }

      label {
        /* cursor: not-allowed; */
        pointer-events: none;
        opacity: 0.65;

        &:hover,
        &:focus {
          outline: none;
          box-shadow: none;
        }
      }
    `}

  /************************************
    SIZES
    *************************************/
  ${({ size }) =>
    size === 'sm' &&
    css`
      input {
      }
      label {
        width: 1.125rem;
        height: 1.125rem;
        padding: 0.0875rem;
        border-radius: 0.25rem;
      }
    `}

  /************************************
    VARIANT
    *************************************/
  ${({ variant, color, background }) =>
    variant === 'outline' &&
    css`
      input {
        &:checked {
          + label {
            /* makes border same color with check svg */
            border: 1px solid ${color || '#7f56d9'};
            background: ${background?.checked || '#f9f5ff'};

            svg {
              color: ${color || '#7f56d9'};
            }
          }
        }
      }

      label {
      }
    `}
`;

export const StyledCheckboxInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
`;

interface TitleProps {
  fontSize?: string;
  color?: string;
  fontStyle?: 'italic' | 'normal';
  fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  lineHeight?: string;
}

export const StyledCheckboxTitle = styled.span<TitleProps>`
  color: ${({ color }) => color || '#344054'};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  /* line-height: ${({ lineHeight }) => lineHeight || '1.5rem'}; */
`;

interface HintProps {
  fontSize?: string;
  color?: string;
  fontStyle?: 'italic' | 'normal';
  fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  lineHeight?: string;
}

export const StyledCheckboxHint = styled.span<HintProps>`
  /* color: #667085;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; */
  color: ${({ color }) => color || '#667085'};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  /* line-height: ${({ lineHeight }) => lineHeight || '1.5rem'}; */
`;
