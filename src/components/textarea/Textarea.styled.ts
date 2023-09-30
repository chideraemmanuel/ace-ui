import styled, { css } from 'styled-components';
import {
  StyledTextareaProps,
  TextareaHintProps,
  TextareaLabelProps,
} from './Textarea.types';

export const StyledTextareaContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const StyledTextareaLabel = styled.span<TextareaLabelProps>`
  color: ${({ color }) => color || '#667085'};
  font-size: ${({ fontSize, theme }) =>
    fontSize || theme['xs-font'] || '0.875rem'};
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: -0.01263rem;
  color: ${({ color }) => color || '#101828'};
`;

export const StyledTextarea = styled.textarea<StyledTextareaProps>`
  font-family: Georgia, 'Times New Roman', Times, serif;
  outline: none;
  color: #101828;
  color: ${({ color }) => color || '#101828'};
  font-size: ${({ fontSize, theme }) => fontSize || theme['sm-font'] || '1rem'};
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
  padding: ${({ theme }) =>
    `${theme['fluid-block-space-2']} ${theme['fluid-block-space-3']}` ||
    '0.625rem 0.875rem'};
  width: 320px;
  height: 128px;
  resize: none;
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  transition: 0.3s ease;

  border-radius: ${({ borderRadius }) => borderRadius || '0.5rem'};
  border: ${({ border }) => border || '1px solid #d0d5dd'};
  background: ${({ background }) => background || '#fff'};
  box-shadow: ${({ boxShadow }) =>
    boxShadow || '0px 1px 2px 0px rgba(16, 24, 40, 0.05)'};

  /* &:hover {
    border: 1px solid #d6bbfb;
    box-shadow: 0px 0px 0px 4px #f4ebff, 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  } */

  &:hover,
  &:focus {
    border: ${({ focus }) => focus?.border || '1px solid #d6bbfb'};
    box-shadow: 0px 0px 0px 4px
      ${({ focus }) => focus?.boxShadowColor || '#f4ebff'};
  }

  &::placeholder {
    color: ${({ placeholderStyles }) => placeholderStyles?.color || '#667085'};
    font-size: ${({ fontSize, theme }) =>
      fontSize || theme['sm-font'] || '1rem'};
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
  }

  /* Resizable */
  ${({ resizable }) =>
    resizable &&
    css`
      resize: ${resizable};
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid #fda29b;

      &:hover {
        border: 1px solid #fda29b;
        box-shadow: 0px 0px 0px 4px #fee4e2,
          0px 1px 2px 0px rgba(16, 24, 40, 0.05);
      }
    `}
`;

export const StyledTextareaHint = styled.span<TextareaHintProps>`
  color: ${({ color }) => color || '#667085'};
  font-size: ${({ fontSize, theme }) =>
    fontSize || theme['xs-font'] || '0.875rem'};
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: -0.01263rem;

  /* Error */
  ${({ error }) =>
    error &&
    css`
      color: #fda29b;
    `}
`;
