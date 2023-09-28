export interface ComponentProps {
  text: string;
  tagType?: 'button' | 'a';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  href?: string;
  variant?: 'primary' | 'secondary';
  icon?: boolean;
  iconSize?: string;
  iconPosition?: 'start' | 'end' | 'center';

  // custom styling
  borderRadius?: string;
  padding?: string;
  background?: string;
  color?: string;
  width?: string;
  fontSize?: string;
  hover?: {
    background?: string;
    color?: string;
  };
  focus?: {
    background?: string;
    color?: string;
    borderColor?: string;
    borderWidth?: string;
    borderStyle?: string;
  };
  disabled?: boolean;
}

export interface StyledButtonProps {
  // base
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  //   variants
  variant?: 'primary' | 'secondary';
  iconSize?: string;
  iconPosition?: 'start' | 'end' | 'center';
  // custom styling
  borderRadius?: string;
  padding?: string;
  background?: string;
  color?: string;
  width?: string;
  fontSize?: string;
  //
  hover?: {
    background?: string;
    color?: string;
  };
  focus?: {
    background?: string;
    color?: string;
    borderColor?: string;
    borderWidth?: string;
    borderStyle?: string;
  };
  disabled?: boolean;
}

export interface StyledIconProps {
  buttonSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  iconSize?: string;
}
