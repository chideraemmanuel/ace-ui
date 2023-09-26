import React from 'react';
// import './Button.scss';
import { FiCircle } from 'react-icons/fi';
import { StyledButton, StyledButtonIcon } from './Button.styled';
import { FaGoogle } from 'react-icons/fa';

interface Props {
  // base
  tagType?: 'button' | 'a';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  href?: string;
  text: string;

  //   variants
  variant?: 'primary' | 'secondary';
  icon?: boolean;
  iconSize?: string;
  iconPosition?: 'start' | 'end' | 'center';

  // custom styling
  borderRadius?: string;
  padding?: string;
  background?: string;
  color?: string;
  width?: string;
  fontSize?: string;
  hover: {
    background?: string;
    color?: string;
  };
  focus: {
    background?: string;
    color?: string;
    borderColor?: string;
    borderWidth?: string;
    borderStyle?: string;
  };
  disabled: boolean;
}

const Button: React.FC<Props> = ({
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
