import { ChangeEvent } from 'react';

export interface ComponentProps {
  size?: 'sm' | 'md';
  variant?: 'fill' | 'outline';
  title?: {
    text: string;
    fontSize?: string;
    color?: string;
    fontStyle?: 'italic' | 'normal';
    fontWeight?:
      | '100'
      | '200'
      | '300'
      | '400'
      | '500'
      | '600'
      | '700'
      | '800'
      | '900';
    lineHeight?: string;
  };
  hint?: {
    text: string;
    fontSize?: string;
    color?: string;
    fontStyle?: 'italic' | 'normal';
    fontWeight?:
      | '100'
      | '200'
      | '300'
      | '400'
      | '500'
      | '600'
      | '700'
      | '800'
      | '900';
    lineHeight?: string;
  };
  background?: {
    checked?: string;
    unchecked?: string;
  };
  // color?: {
  //   checked: string;
  //   unchecked: string;
  // };
  color?: string;
  focus?: {
    checked?: string;
    unchecked?: string;
  };
  disabled?: boolean;
  state?: {
    isChecked: boolean;
    setIsChecked: (e?: ChangeEvent<HTMLInputElement>) => void;
  };
}

export interface StyledCheckboxProps {
  $size?: 'sm' | 'md';
  $variant?: 'fill' | 'outline';
  $background?: {
    checked?: string;
    unchecked?: string;
  };
  // color?: {
  //   checked: string;
  //   unchecked: string;
  // };
  $color?: string;
  $focus?: {
    checked?: string;
    unchecked?: string;
  };
  $disabled?: boolean;
}

export interface CheckboxTitleProps {
  $fontSize?: string;
  $color?: string;
  $fontStyle?: 'italic' | 'normal';
  $fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  $lineHeight?: string;
}

export interface CheckboxHintProps {
  $fontSize?: string;
  $color?: string;
  $fontStyle?: 'italic' | 'normal';
  $fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  $lineHeight?: string;
}
