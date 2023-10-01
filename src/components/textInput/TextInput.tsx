'use client';

import React, { ChangeEvent, useState } from 'react';
import {
  // StyledTextInput,
  StyledTextInputContainer,
  StyledTextInputLabel,
  StyledTextInputHint,
  StyledTextInput,
  StyledTextInputIcon,
  StyledTextInputField,
} from './TextInput.styled';
import { FiMail, FiInfo, FiLock } from 'react-icons/fi';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Tooltip from '../tooltip/Tooltip';
import { ComponentProps } from './TextInput.types';

const TextInput: React.FC<ComponentProps> = ({
  type = 'text',
  label,
  placeholder,
  icon,
  tip,
  hint,
  readOnly,
  forgotPassword,
  forgotPasswordAction,

  border,
  borderRadius,
  background,
  color,
  fontSize,
  boxShadow,
  focus,
  state,
}) => {
  const [passwordCurrentType, setPasswordCurrentType] = useState<
    'text' | 'password'
  >('password');

  const handleVisibilityToggle = () => {
    if (passwordCurrentType === 'password') {
      setPasswordCurrentType('text');
    } else {
      setPasswordCurrentType('password');
    }
  };

  return (
    <>
      <StyledTextInputContainer htmlFor="input">
        <StyledTextInputLabel {...label}>{label?.text}</StyledTextInputLabel>
        <StyledTextInput
          error={hint?.error}
          readOnly={readOnly}
          border={border}
          borderRadius={borderRadius}
          background={background}
          // padding:
          boxShadow={boxShadow}
          focus={focus}
        >
          <div>
            {icon?.active && (
              <StyledTextInputIcon color={icon.color}>
                {!icon?.active ? undefined : type === 'text' ? (
                  icon.icon
                ) : type === 'email' ? (
                  <FiMail />
                ) : type === 'password' ? (
                  <FiLock />
                ) : type === 'card' ? (
                  // <FiCreditCard />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="14"
                    viewBox="0 0 23 14"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.4368 11.8294C10.2527 12.8275 8.71683 13.43 7.0385 13.43C3.29363 13.43 0.257812 10.4303 0.257812 6.72997C0.257812 3.02966 3.29363 0.0299683 7.0385 0.0299683C8.71683 0.0299683 10.2527 0.632466 11.4368 1.63051C12.6208 0.632466 14.1567 0.0299683 15.8351 0.0299683C19.5799 0.0299683 22.6158 3.02966 22.6158 6.72997C22.6158 10.4303 19.5799 13.43 15.8351 13.43C14.1567 13.43 12.6208 12.8275 11.4368 11.8294Z"
                      fill="#ED0006"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.4375 11.8294C12.8954 10.6005 13.8199 8.77192 13.8199 6.72997C13.8199 4.68801 12.8954 2.85941 11.4375 1.63051C12.6215 0.632465 14.1575 0.0299683 15.8358 0.0299683C19.5807 0.0299683 22.6165 3.02966 22.6165 6.72997C22.6165 10.4303 19.5807 13.43 15.8358 13.43C14.1575 13.43 12.6215 12.8275 11.4375 11.8294Z"
                      fill="#F9A000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.4371 11.8294C12.895 10.6005 13.8194 8.77193 13.8194 6.72999C13.8194 4.68805 12.895 2.85946 11.4371 1.63055C9.97914 2.85946 9.05469 4.68805 9.05469 6.72999C9.05469 8.77193 9.97914 10.6005 11.4371 11.8294Z"
                      fill="#FF5E00"
                    />
                  </svg>
                ) : undefined}
              </StyledTextInputIcon>
            )}

            <StyledTextInputField
              type={
                type === 'card'
                  ? 'text'
                  : type === 'password'
                  ? passwordCurrentType
                  : type
              }
              id="input"
              placeholder={placeholder?.text}
              placeholderStyles={placeholder}
              readOnly={readOnly}
              background={background}
              color={color}
              fontSize={fontSize}
              value={state?.value}
              onChange={(e) => state?.setValue(e)}
            />
          </div>

          {/* INFO TOOLTIP */}
          {/* Only render when type is not password */}
          {/* {type !== 'password' && helpIcon?.active && (
            <span className="help-icon">{helpIcon?.icon || <FiInfo />}</span>
          )} */}
          {type !== 'password' && tip?.active && tip?.text && (
            <Tooltip trigger={tip?.icon || <FiInfo />}>{tip.text}</Tooltip>
          )}

          {/* PASSWORD TOGGLE */}
          {/* Only render when type is password */}
          {type === 'password' && (
            <span
              className="help-icon"
              onClick={handleVisibilityToggle}
              // onClick={() => alert('yo')}
            >
              {passwordCurrentType === 'password' ? <FaEyeSlash /> : <FaEye />}
            </span>
          )}
        </StyledTextInput>

        <StyledTextInputHint {...hint}>
          <span>{hint?.text}</span>
          {forgotPassword && forgotPasswordAction && (
            <div
              className="forgot-password"
              onClick={() => forgotPasswordAction()}
            >
              Forgot password?
            </div>
          )}
        </StyledTextInputHint>
      </StyledTextInputContainer>
    </>
  );
};

export default TextInput;
