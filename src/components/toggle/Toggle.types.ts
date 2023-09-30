import { ChangeEvent } from 'react';

export interface ComponentProps {
  size?: 'sm' | 'md';
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
  toggleBackground?: {
    checked?: string;
    unchecked?: string;
  };
  toggleColor?: {
    checked?: string;
    unchecked?: string;
  };
  focus: {
    checked?: string;
    unchecked?: string;
  };
  disabled?: boolean;
  state?: {
    isChecked: boolean;
    setIsChecked: (e?: ChangeEvent<HTMLInputElement>) => void;
  };
}

export interface StyledToggleButtonProps {
  size?: 'sm' | 'md';
  background?: {
    checked?: string;
    unchecked?: string;
  };
  color?: {
    checked?: string;
    unchecked?: string;
  };
  focus?: {
    checked?: string;
    unchecked?: string;
  };
  disabled?: boolean;
}

export interface ToggleTitleProps {
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
}

export interface ToggleHintProps {
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
}
