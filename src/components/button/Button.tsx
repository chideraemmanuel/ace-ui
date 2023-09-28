import React from 'react';
// import './Button.scss';
import { StyledButton, StyledButtonIcon } from './Button.styled';
import { FaGoogle } from 'react-icons/fa';
import { ComponentProps } from './Button.types';

const Button: React.FC<ComponentProps> = ({
  tagType = 'a',
  href,
  text,
  size = 'md',
  icon,
  iconSize,
  iconPosition,
  variant = 'primary',
  // custom styling
  borderRadius,
  padding,
  background,
  color,
  width,
  fontSize,
  hover,
  focus,
  disabled = false,
  ...props
}) => {
  return (
    <>
      <StyledButton
        href={tagType === 'a' ? href : undefined}
        as={tagType}
        variant={variant}
        borderRadius={borderRadius}
        padding={padding}
        background={background}
        color={color}
        width={width}
        fontSize={fontSize}
        //
        size={size}
        iconSize={iconSize}
        iconPosition={iconPosition}
        hover={hover}
        focus={focus}
        disabled={disabled}
        {...props}
      >
        {icon && (
          <StyledButtonIcon>
            <FaGoogle />
          </StyledButtonIcon>
        )}
        <span>{text}</span>
      </StyledButton>
    </>
  );
};

export default Button;
