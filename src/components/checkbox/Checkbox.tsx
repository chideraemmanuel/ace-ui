import { ChangeEvent, FC } from 'react';
import {
  StyledCheckBoxContainer,
  StyledCheckbox,
  StyledCheckboxHint,
  StyledCheckboxInfo,
  StyledCheckboxTitle,
} from './Checkbox.styled';
import { FiCheck } from 'react-icons/fi';

interface Props {
  size?: 'sm' | 'md';
  variant: 'fill' | 'outline';
  title?: {
    text: string;
    fontSize: string;
    color: string;
    fontStyle: 'italic' | 'normal';
    fontWeight:
      | '100'
      | '200'
      | '300'
      | '400'
      | '500'
      | '600'
      | '700'
      | '800'
      | '900';
    lineHeight: string;
  };
  hint?: {
    text: string;
    fontSize: string;
    color: string;
    fontStyle: 'italic' | 'normal';
    fontWeight:
      | '100'
      | '200'
      | '300'
      | '400'
      | '500'
      | '600'
      | '700'
      | '800'
      | '900';
    lineHeight: string;
  };
  background?: {
    checked: string;
    unchecked: string;
  };
  // color?: {
  //   checked: string;
  //   unchecked: string;
  // };
  color?: string;
  focus: {
    checked: string;
    unchecked: string;
  };
  disabled: boolean;
  state: {
    isChecked: boolean;
    setIsChecked: (e?: ChangeEvent<HTMLInputElement>) => void;
  };
}

const Checkbox: FC<Props> = ({
  size = 'sm',
  variant = 'fill',
  title,
  hint,
  background,
  color,
  focus,
  disabled,
  state,
}) => {
  return (
    <>
      <StyledCheckBoxContainer>
        <StyledCheckbox
          size={size}
          variant={variant}
          background={background}
          color={color}
          focus={focus}
          disabled={disabled}
        >
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={state?.isChecked}
            onChange={(e) => state?.setIsChecked(e)}
          />
          <label htmlFor="checkbox">
            <FiCheck />
          </label>
        </StyledCheckbox>

        <StyledCheckboxInfo>
          <StyledCheckboxTitle {...title}>
            {/* Remember me */}
            {title?.text}
          </StyledCheckboxTitle>
          <StyledCheckboxHint {...hint}>
            {/* Save my login details for next time. */}
            {hint?.text}
          </StyledCheckboxHint>
        </StyledCheckboxInfo>
      </StyledCheckBoxContainer>
    </>
  );
};

export default Checkbox;
