export interface ComponentProps {
  icon?: {
    active?: boolean;
    icon?: any;
  };
  placeholder?: string;
  list?: ListTypes[];
  state?: {
    selectedOption: string | null;
    // setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
    setSelectedOption: (value: string) => void;
    selectedIcon?: any;
    // setSelectedIcon?: React.Dispatch<any>;
    setSelectedIcon?: (icon: any) => void;
  };
  //
  toggleStyles?: {
    borderRadius?: string;
    border?: string;
    background?: string;
    // padding:
    boxShadow?: string;
    focus?: {
      border?: string;
      boxShadowColor?: string;
    };
  };
  //
  // listStyles: {};
  // listItemStyles: {};
}

export interface ListTypes {
  title: string;
  value: string;
  icon?: any;
}

export interface SelectFieldToggleProps {
  borderRadius?: string;
  border?: string;
  background?: string;
  // padding:
  boxShadow?: string;
  focus?: {
    border?: string;
    boxShadowColor?: string;
  };
}

export interface StyledListProps {
  active?: boolean;
}
