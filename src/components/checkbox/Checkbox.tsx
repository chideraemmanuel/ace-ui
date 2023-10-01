'use client';

import { ChangeEvent, FC } from 'react';
import {
  StyledCheckBoxContainer,
  StyledCheckbox,
  StyledCheckboxHint,
  StyledCheckboxInfo,
  StyledCheckboxTitle,
} from './Checkbox.styled';
import { FiCheck } from 'react-icons/fi';
import { ComponentProps } from './Checkbox.types';

const Checkbox: FC<ComponentProps> = ({
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
