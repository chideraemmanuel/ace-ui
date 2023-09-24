import React from 'react';
import {
  // StyledTextInput,
  StyledTextInputContainer,
  StyledTextInputLabel,
  StyledTextInputHint,
} from './TextInput.styled';
import { FiMail, FiInfo } from 'react-icons/fi';
import PlainTextInput from './components/plainTextInput/PlainTextInput';

interface Props {
  type: 'text' | 'email' | 'password' | 'card';
  label?: string;
  placeholder: string;
  icon?: {
    active: boolean;
    icon: any;
  };
  helpIcon?: {
    active: boolean;
    icon: any;
  };
  hint?: {
    error: boolean;
    message: string;
  };
  readOnly?: boolean;
  forgotPassword?: boolean;
  forgotPasswordAction?: () => void;

  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle: string;
  background?: string;
  // padding:
  boxShadow?: string;
}

const TextInput: React.FC<Props> = ({
  type,
  label,
  placeholder,
  icon,
  helpIcon,
  hint = {
    error: false,
    message: undefined,
  },
  readOnly = false,
  forgotPassword = false,
  forgotPasswordAction,

  borderRadius,
  borderColor,
  borderWidth,
  borderStyle,
  background,
  boxShadow,
}) => {
  return (
    <>
      <StyledTextInputContainer htmlFor="input">
        {/* <span className="label">Label</span> */}
        <StyledTextInputLabel>{label}</StyledTextInputLabel>

        <PlainTextInput
          type={type}
          error={hint.error}
          readOnly={readOnly}
          placeholder={placeholder}
          borderRadius={borderRadius}
          borderColor={borderColor}
          borderWidth={borderWidth}
          borderStyle={borderStyle}
          background={background}
          // padding:
          boxShadow={boxShadow}
        />

        <StyledTextInputHint error={hint.error}>
          <span>{hint.message}</span>
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
