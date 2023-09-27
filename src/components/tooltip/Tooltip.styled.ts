import styled, { css } from 'styled-components';

export const StyledTooltipContainer = styled.span`
  position: relative;
`;

interface TooltipProps {
  arrow?: boolean;
  background?: string;
  color?: string;
}

export const StyledTooltip = styled.div<TooltipProps>`
  position: absolute;
  width: min(20rem, 90vw);
  /* max-width: 20rem; */
  bottom: ${({ arrow }) => (arrow ? 'calc(100% + 10px)' : 'calc(100% + 5px)')};
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0.5rem;
  background: ${({ background }) => background || '#101828'};
  padding: 0.75rem;
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
  color: ${({ color }) => color || '#fff'};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */

  visibility: hidden;
  opacity: 0;
  transition: 300ms ease;

  svg {
    width: 1rem;
    height: 0.375rem;
    position: absolute;
    top: calc(100% - 1px);
    transform: translateX(-50%);
    left: 50%;
    display: ${({ arrow }) => (arrow ? 'inline-block' : 'none')};
  }
`;

export const StyledTooltipTrigger = styled.div`
  cursor: pointer;

  &:hover {
    + * {
      visibility: visible;
      opacity: 1;
    }
  }

  svg {
    color: #98a2b3;
  }
`;
