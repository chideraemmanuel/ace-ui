import React, { ChangeEvent } from 'react';
import {
  StyledTextarea,
  StyledTextareaContainer,
  StyledTextareaHint,
  StyledTextareaLabel,
} from './Textarea.styled';

interface Props {
  label: string;
  placeholder?: {
    text: string;
    color: string;
  };
  hint: {
    error: boolean;
    text: string;
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
  focus?: {
    focused: boolean;
    border: string;
    boxShadowColor: string;
  };
  state: {
    value: string;
    setValue: (e: ChangeEvent<HTMLInputElement>) => void;
  };
}

const Textarea: React.FC<Props> = ({
  label,
  placeholder,
  hint,
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
  focus,
}) => {
  return (
    <StyledTextareaContainer>
      <StyledTextareaLabel>{label}</StyledTextareaLabel>
      <StyledTextarea
        placeholder={placeholder?.text}
        placeholderStyles={placeholder}
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
        focus={focus}
      />
      <StyledTextareaHint error={hint.error}>{hint.text}</StyledTextareaHint>
    </StyledTextareaContainer>
  );
};

export default Textarea;
