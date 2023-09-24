import React from 'react';
import {
  StyledTextarea,
  StyledTextareaContainer,
  StyledTextareaHint,
  StyledTextareaLabel,
} from './Textarea.styled';

interface Props {
  label: string;
  placeholder: string;
  hint: {
    error: boolean;
    message: string;
  };
  resizable?: false | 'vertical' | 'horizontal' | 'both';
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

const Textarea: React.FC<Props> = ({
  label,
  placeholder,
  hint = {
    error: false,
    message: undefined,
  },
  resizable = false,
  maxWidth,
  maxHeight,
  borderRadius,
  borderColor,
  borderWidth,
  borderStyle,
  background,
  // padding,
  boxShadow,
  focusRing,
}) => {
  return (
    <StyledTextareaContainer>
      <StyledTextareaLabel>{label}</StyledTextareaLabel>
      <StyledTextarea
        placeholder={placeholder}
        resizable={resizable}
        error={hint.error}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        borderRadius={borderRadius}
        borderColor={borderColor}
        borderWidth={borderWidth}
        borderStyle={borderStyle}
        background={background}
        // padding:
        boxShadow={boxShadow}
        focusRing={focusRing}
      />
      <StyledTextareaHint error={hint.error}>{hint.message}</StyledTextareaHint>
    </StyledTextareaContainer>
  );
};

export default Textarea;
