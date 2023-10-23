export interface ComponentProps {
  children: React.ReactNode | string;
  arrow?: boolean;
  background?: string;
  color?: string;
  trigger: any;
}

export interface StyledTooltipProps {
  $arrow?: boolean;
  $background?: string;
  $color?: string;
}
