import styled, { css } from 'styled-components';
import {
  StyledToggleButtonProps,
  ToggleHintProps,
  ToggleTitleProps,
} from './Toggle.types';

export const StyledToggleContainer = styled.div`
  display: flex;
  //   align-items: center;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const StyledToggleButton = styled.div<StyledToggleButtonProps>`
  input {
    display: none;

    &:checked {
      + label {
        background: ${({ background }) => background?.checked || '#7f56d9'};

        &:hover,
        &:focus {
          box-shadow: 0px 0px 0px 4px
            ${({ focusRing }) => focusRing?.checked || '#f4ebff'};
        }

        span {
          transform: translate(100%, -50%);
          background-color: ${({ color }) => color?.checked || '#fff'};
        }

        /* svg {
          transform: translate(100%, -50%);
        } */
      }
    }
  }

  label {
    position: relative;
    cursor: pointer;
    display: inline-block;
    width: 2.75rem;
    height: 1.5rem;
    padding: 0.125rem;
    border-radius: 0.75rem;
    background: ${({ background }) => background?.unchecked || '#f2f4f7'};
    transition: 0.3s ease;

    span {
      display: inline-block;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      background-color: ${({ color }) => color?.unchecked || '#fff'};
      filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.06))
        drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1));
      transition: 0.3s ease;
      position: absolute;
      top: 50%;
      transform: translate(0%, -50%);
    }

    &:hover,
    &:focus {
      outline: none;
      box-shadow: 0px 0px 0px 4px
        ${({ focusRing }) => focusRing?.unchecked || '#f4ebff'};
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
      fill: ${({ color }) => color}; // DOESN'T WORK!
      /* fill: black;
      color: black; */
      filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.06))
        drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1));
      transition: 0.3s ease;
      position: absolute;
      top: 50%;
      transform: translate(0%, -50%);
    }
  }

  /************************************
   SIZES
  *************************************/
  ${({ size }) =>
    size === 'sm' &&
    css`
      label {
        width: 2.25rem;
        height: 1.25rem;
        padding: 0.125rem;

        svg {
          width: 1rem;
          height: 1rem;
        }
      }
    `}

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
`;

export const StyledToggleInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* gap: 0.25rem; */
`;

export const StyledToggleTitle = styled.span<ToggleTitleProps>`
  color: ${({ color }) => color || '#344054'};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  line-height: ${({ lineHeight }) => lineHeight || '1.5rem'};
`;

export const StyledToggleHint = styled.span<ToggleHintProps>`
  /* color: #667085;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; */
  color: ${({ color }) => color || '#667085'};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  line-height: ${({ lineHeight }) => lineHeight || '1.5rem'};
`;
