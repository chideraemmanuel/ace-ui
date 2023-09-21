import React from 'react';
import './Button.scss';
import { FiCircle } from 'react-icons/fi';

interface Props {
  // base
  tagType?: 'button' | 'a';
  size?: 'small' | 'base' | 'medium' | 'large';
  href?: string;
  text: string;

  //   variants
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  loaderPosition?: 'start' | 'end' | 'center';
  tag?: boolean;
  tagPosition?: 'start' | 'end' | 'center';

  // custom styling
  borderRadius?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  backgroundColor?: string;
  color?: string;
  width?: string;
}

const Button: React.FC<Props> = ({
  tagType = 'a',
  href = undefined,
  text,
  size = 'base',
  loading = false,
  loaderPosition = undefined,
  tag = false,
  tagPosition = undefined,
  variant = 'primary',
  // custom styling
  borderRadius = undefined,
  padding = undefined,
  paddingTop = undefined,
  paddingBottom = undefined,
  paddingLeft = undefined,
  paddingRight = undefined,
  backgroundColor = undefined,
  color = undefined,
  width = undefined,
  ...props
}) => {
  return (
    <>
      {tagType === 'button' ? (
        <button
          className={`button button-${size} button-${variant}`}
          //   onClick={() => alert('yo!')}
          style={{
            flexDirection:
              loaderPosition === 'start' || tagPosition === 'start'
                ? 'row'
                : 'row-reverse',
            borderRadius,
            padding,
            paddingTop,
            paddingBottom,
            paddingLeft,
            paddingRight,
            backgroundColor,
            color,
            width,
          }}
          {...props}
        >
          {loading && !tag && <FiCircle />}
          {tag && !loading && <span className="button__badge"></span>}
          <span>{text}</span>
        </button>
      ) : (
        <a
          className={`button button-${size} button-${variant}`}
          href={href}
          //
          style={{
            flexDirection:
              loaderPosition === 'start' || tagPosition === 'start'
                ? 'row'
                : 'row-reverse',
            borderRadius,
            padding,
            paddingTop,
            paddingBottom,
            paddingLeft,
            paddingRight,
            backgroundColor,
            color,
            width,
          }}
          {...props}
        >
          {loading && !tag && <FiCircle />}
          {tag && !loading && <span className="button__badge"></span>}
          <span>{text}</span>
        </a>
      )}
    </>
  );
};

export default Button;
