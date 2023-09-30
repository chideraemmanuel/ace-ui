import styled, { css } from 'styled-components';
import {
  CheckboxHintProps,
  CheckboxTitleProps,
  StyledCheckboxProps,
} from './Checkbox.types';

export const StyledCheckBoxContainer = styled.div`
  display: flex;
  //   align-items: center;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  input {
    visibility: hidden;
    display: none;

    &:checked {
      + label {
        /* border: 1px solid #7f56d9; */
        border: 1px solid
          ${({ background }) => background?.checked || '#2b3467'};
        background: ${({ background }) => background?.checked || '#2b3467'};

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
            border: 1px solid ${color || '#2b3467'};
            background: ${background?.checked || '#f9f5ff'};

            svg {
              color: ${color || '#2b3467'};
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

export const StyledCheckboxTitle = styled.span<CheckboxTitleProps>`
  color: ${({ color }) => color || '#344054'};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  /* line-height: ${({ lineHeight }) => lineHeight || '1.5rem'}; */
`;

export const StyledCheckboxHint = styled.span<CheckboxHintProps>`
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
