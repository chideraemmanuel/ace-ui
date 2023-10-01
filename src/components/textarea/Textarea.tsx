'use client';

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
  border,
  background,
  fontSize,
  // padding,
  boxShadow,
  focus,
}) => {
  return (
    <StyledTextareaContainer>
      <StyledTextareaLabel {...label}>{label?.text}</StyledTextareaLabel>
      <StyledTextarea
        placeholder={placeholder?.text}
        placeholderStyles={placeholder}
        resizable={resizable}
        error={hint.error}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        borderRadius={borderRadius}
        border={border}
        background={background}
        fontSize={fontSize}
        // padding:
        boxShadow={boxShadow}
        focus={focus}
      />
      <StyledTextareaHint {...hint}>{hint.text}</StyledTextareaHint>
    </StyledTextareaContainer>
  );
};

export default Textarea;
