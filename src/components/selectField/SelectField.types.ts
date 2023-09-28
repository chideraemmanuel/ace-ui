export interface ComponentProps {
  icon?: {
    active?: boolean;
    icon?: any;
  };
  placeholder?: string;
  list?: ListTypes[];
  state?: {
    selectedOption: string | null;
    setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
    selectedIcon?: any;
    setSelectedIcon?: React.Dispatch<any>;
  };
  //
  toggleStyles?: {
    borderRadius?: string;
    borderColor?: string;
    borderWidth?: string;
    borderStyle?: string;
    background?: string;
    // padding:
    boxShadow?: string;
    focusRing?: {
      borderColor?: string;
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
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  background?: string;
  // padding:
  boxShadow?: string;
  focusRing?: {
    borderColor?: string;
    boxShadowColor?: string;
  };
}

export interface StyledListProps {
  active?: boolean;
}
