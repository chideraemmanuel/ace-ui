import { ChangeEvent } from 'react';

export interface ComponentProps {
  label?: string;
  placeholder?: {
    text: string;
    color?: string;
  };
  hint: {
    error?: boolean;
    text: string;
  };
  resizable?: false | 'vertical' | 'horizontal' | 'both';
  maxWidth?: string;
  maxHeight?: string;
  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  background?: string;
  // padding:
  boxShadow?: string;
  focus?: {
    focused: boolean;
    border?: string;
    boxShadowColor?: string;
  };
  state?: {
    value: string;
    setValue: (e: ChangeEvent<HTMLInputElement>) => void;
  };
}

export interface StyledTextareaProps {
  error?: boolean;
  resizable?: false | 'vertical' | 'horizontal' | 'both';
  maxWidth?: string;
  maxHeight?: string;
  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  background?: string;
  // padding:
  boxShadow?: string;
  focus?: {
    focused: boolean;
    border?: string;
    boxShadowColor?: string;
  };
  placeholderStyles?: {
    color?: string;
  };
}

export interface TextareaHintProps {
  error?: boolean;
}
