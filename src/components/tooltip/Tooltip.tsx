import { FC } from 'react';
import {
  StyledTooltip,
  StyledTooltipContainer,
  StyledTooltipTrigger,
} from './Tooltip.styled';
import { FiInfo } from 'react-icons/fi';
import { ComponentProps } from './Tooltip.types';

const Tooltip: FC<ComponentProps> = ({
  children,
  trigger,
  arrow = true,
  background,
  color,
}) => {
  return (
    <>
      <StyledTooltipContainer>
        <StyledTooltipTrigger>{trigger || <FiInfo />}</StyledTooltipTrigger>

        <StyledTooltip arrow={arrow} background={background} color={color}>
          {children}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="9"
            viewBox="0 0 17 9"
            fill="none"
          >
            <path
              d="M14.3289 0.485289C15.2198 0.485289 15.6659 1.56243 15.036 2.1924L8.96492 8.26347C8.57439 8.654 7.94123 8.654 7.55071 8.26347L1.47964 2.1924C0.84968 1.56243 1.29585 0.485289 2.18675 0.485289L14.3289 0.485289Z"
              fill={background || '#101828'}
            />
          </svg>
        </StyledTooltip>
      </StyledTooltipContainer>
    </>
  );
};

export default Tooltip;
