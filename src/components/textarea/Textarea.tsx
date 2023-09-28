import React, { ChangeEvent } from 'react';
import {
  StyledTextarea,
  StyledTextareaContainer,
  StyledTextareaHint,
  StyledTextareaLabel,
} from './Textarea.styled';
import { ComponentProps } from './Textarea.types';

const Textarea: React.FC<ComponentProps> = ({
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
