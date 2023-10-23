export interface ComponentProps {
  children: any;
  tagType?: 'button' | 'a';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  href?: string;
  variant?: 'primary' | 'secondary';

  // custom styling
  border?: string;
  borderRadius?: string;
  padding?: string;
  background?: string;
  color?: string;
  width?: string;
  fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | string;
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
  fontStyle?: 'italic' | 'normal';
  lineHeight?: string;
  hover?: {
    background?: string;
    color?: string;
    border?: string;
  };
  focus?: {
    background?: string;
    color?: string;
    border?: string;
  };
  disabled?: boolean;
}

export interface StyledButtonProps {
  // base
  $size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  //   variants
  $variant?: 'primary' | 'secondary';
  // custom styling
  $border?: string;
  $borderRadius?: string;
  $padding?: string;
  $background?: string;
  $color?: string;
  $width?: string;
  $fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | string;
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
  $fontStyle?: 'italic' | 'normal';
  $lineHeight?: string;
  //
  $hover?: {
    background?: string;
    color?: string;
    border?: string;
  };
  $focus?: {
    background?: string;
    color?: string;
    border?: string;
  };
  $disabled?: boolean;
}

export interface StyledIconProps {
  $buttonSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}
