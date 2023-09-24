import styled, { css } from 'styled-components';

export const StyledTextareaContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const StyledTextareaLabel = styled.span`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: -0.01263rem;
  color: #101828;
`;

interface TextareaProps {
  error: boolean;
  resizable: false | 'vertical' | 'horizontal' | 'both';
  maxWidth: string;
  maxHeight: string;
  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  background?: string;
  // padding:
  boxShadow?: string;
  focusRing?: {
    error: boolean;
    borderColor: string;
    boxShadowColor: string;
  };
}

export const StyledTextarea = styled.textarea<TextareaProps>`
  font-family: Georgia, 'Times New Roman', Times, serif;
  outline: none;
  color: #101828;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
  padding: 0.625rem 0.875rem;
  border-radius: 0.5rem;
  border: 1px solid #d0d5dd;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  width: 320px;
  height: 128px;
  resize: none;
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  transition: 0.3s ease;

  border-radius: ${({ borderRadius }) => borderRadius || '0.5rem'};
  border: 1px solid #d0d5dd;
  border-color: ${({ borderColor }) => borderColor || '#d0d5dd'};
  border-width: ${({ borderWidth }) => borderWidth || '1px'};
  border-style: ${({ borderStyle }) => borderStyle || 'solid'};
  /* background: #fff; */
  background: ${({ background }) => background || '#fff'};
  box-shadow: ${({ boxShadow }) =>
    boxShadow || '0px 1px 2px 0px rgba(16, 24, 40, 0.05)'};

  /* &:hover {
    border: 1px solid #d6bbfb;
    box-shadow: 0px 0px 0px 4px #f4ebff, 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  } */

  &:hover {
    border: 1px solid ${({ focusRing }) => focusRing?.borderColor || '#d6bbfb'};
    box-shadow: ${({ focusRing }) =>
      `0px 0px 0px 4px ${
        focusRing?.boxShadowColor ? focusRing?.boxShadowColor : '#f4ebff'
      } 0px 1px 2px 0px rgba(16, 24, 40, 0.05)`};
  }

  &::placeholder {
    color: #667085;
    font-size: 1rem;
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

interface HintProps {
  error: boolean;
}

export const StyledTextareaHint = styled.span<HintProps>`
  color: #667085;
  font-size: 0.875rem;
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
