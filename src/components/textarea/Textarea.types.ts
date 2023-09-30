import { ChangeEvent } from 'react';

export interface ComponentProps {
  label?: {
    text: string;
    color?: string;
  };
  placeholder?: {
    text: string;
    color?: string;
  };
  hint: {
    error?: boolean;
    text: string;
    color: string;
  };
  resizable?: false | 'vertical' | 'horizontal' | 'both';
  maxWidth?: string;
  maxHeight?: string;
  borderRadius?: string;
  border?: string;
  background?: string;
  fontSize: string;
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

export interface TextareaLabelProps {
  color?: string;
  fontSize?: string;
}

export interface StyledTextareaProps {
  error?: boolean;
  resizable?: false | 'vertical' | 'horizontal' | 'both';
  maxWidth?: string;
  maxHeight?: string;
  borderRadius?: string;
  border?: string;
  background?: string;
  fontSize: string;
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
  color?: string;
  fontSize?: string;
}
