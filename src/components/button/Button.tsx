import React from 'react';
// import './Button.scss';
import { FiCircle } from 'react-icons/fi';
import { StyledButton, StyledButtonIcon } from './Button.styled';
import { FaGoogle } from 'react-icons/fa';

interface Props {
  // base
  tagType?: 'button' | 'a';
  // size?: 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  href?: string;
  text: string;

  //   variants
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  loaderPosition?: 'start' | 'end' | 'center';
  icon?: boolean;
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

const Button: React.FC<Props> = ({
  tagType = 'a',
  href = undefined,
  text,
  size = 'md',
  loading = false,
  loaderPosition = undefined,
  icon = false,
  iconSize = undefined,
  iconPosition = undefined,
  variant = 'primary',
  // custom styling
  borderRadius = undefined,
  padding = undefined,
  paddingTop = undefined,
  paddingBottom = undefined,
  paddingLeft = undefined,
  paddingRight = undefined,
  background = undefined,
  color = undefined,
  width = undefined,
  fontSize = undefined,
  ...props
}) => {
  return (
    <>
      <StyledButton
        href="#"
        {...props}
        borderRadius={borderRadius}
        padding={padding}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        background={background}
        color={color}
        width={width}
        fontSize={fontSize}
        //
        size={size}
        loaderPosition={loaderPosition}
        iconSize={iconSize}
        iconPosition={iconPosition}
      >
        {loading && !icon && <FiCircle />}
        {/* {icon && !loading && <span className="icon"></span>} */}
        {icon && !loading && (
          // <span className="icon">
          //   <FaGoogle />
          // </span>
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
