'use client';

import React, { ChangeEvent } from 'react';
import {
  StyledToggleButton,
  StyledToggleContainer,
  StyledToggleHint,
  StyledToggleInfo,
  StyledToggleTitle,
} from './Toggle.styled';
import { ComponentProps } from './Toggle.types';

const Toggle: React.FC<ComponentProps> = ({
  size = 'md',
  title,
  hint,
  toggleBackground,
  toggleColor,
  focus,
  disabled,
  state,
}) => {
  // const [isChecked, setIsChecked] = useState(false);

  // const { isChecked, setIsChecked } = state;

  return (
    <StyledToggleContainer>
      <StyledToggleButton
        $size={size}
        $background={toggleBackground}
        $color={toggleColor}
        $focus={focus}
        $disabled={disabled}
      >
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          checked={state?.isChecked}
          onChange={(e) => state?.setIsChecked(e)}
        />
        <label htmlFor="checkbox">
          <span className="circle"></span>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="24"
            viewBox="0 0 26 24"
            // fill="none"
          >
            <g filter="url(#filter0_dd_253_22295)">
              <circle cx="12.2578" cy="12" r="10" fill="white" />
            </g>
            <defs>
              <filter
                id="filter0_dd_253_22295"
                x="-0.742188"
                y="0"
                width="26"
                height="26"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_253_22295"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_253_22295"
                  result="effect2_dropShadow_253_22295"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_253_22295"
                  result="shape"
                />
              </filter>
            </defs>
          </svg> */}
        </label>
      </StyledToggleButton>

      <StyledToggleInfo>
        <StyledToggleTitle
          $color={title?.color}
          $fontSize={title?.fontSize}
          $fontStyle={title?.fontStyle}
          $fontWeight={title?.fontWeight}
          $lineHeight={title?.lineHeight}
        >
          {/* Remember me */}
          {title?.text}
        </StyledToggleTitle>
        <StyledToggleHint
          $color={hint?.color}
          $fontSize={hint?.fontSize}
          $fontStyle={hint?.fontStyle}
          $fontWeight={hint?.fontWeight}
          $lineHeight={hint?.lineHeight}
        >
          {/* Save my login details for next time. */}
          {hint?.text}
        </StyledToggleHint>
      </StyledToggleInfo>
    </StyledToggleContainer>
  );
};

export default Toggle;
