import { ChangeEvent } from 'react';

export interface ComponentProps {
  type?: 'text' | 'email' | 'password' | 'card';
  label?: {
    text: string;
    color?: string;
  };
  placeholder?: {
    text: string;
    color?: string;
  };
  icon?: {
    active: boolean;
    icon?: any;
    color?: string;
  };
  tip?: {
    active: boolean;
    text: string;
    icon?: any;
    color?: string;
  };
  hint?: {
    error?: boolean;
    text: string;
    color?: string;
  };
  readOnly?: boolean;
  forgotPassword?: boolean;
  forgotPasswordAction?: () => void;

  border?: string;
  borderRadius?: string;
  background?: string;
  color?: string;
  fontSize?: string;
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

export interface TextInputLabelProps {
  color?: string;
}

export interface StyledTextInputProps {
  error?: boolean;
  readOnly?: boolean;

  borderRadius?: string;
  border?: string;
  background?: string;
  // padding:
  boxShadow?: string;
  focus?: {
    focused: boolean;
    border?: string;
    boxShadowColor?: string;
  };
}

export interface StyledInputFieldProps {
  readOnly?: boolean;
  background?: string;
  color?: string;
  fontSize?: string;
  placeholderStyles?: {
    color?: string;
  };
}

export interface TextInputIconProps {
  color?: string;
}

export interface TextInputHintProps {
  error?: boolean;
  color?: string;
}
