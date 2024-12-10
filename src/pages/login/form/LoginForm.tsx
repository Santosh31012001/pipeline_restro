import React from 'react'

//packages
import { Form, Checkbox } from 'antd'
import InputWrapper from '@package/antd-wrapper/input/input'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'

//style
import * as S from './loginForm.style'

type FieldType = {
  emailOrPhone: string
  password: string
  remember?: boolean
}

interface LoginFormProps {
  formData: FieldType
  errors: {
    emailOrPhone?: string
    password?: string
  }
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleCheckboxChange: (e: CheckboxChangeEvent) => void
}

const LoginForm: React.FC<LoginFormProps> = React.memo(
  ({ formData, errors, handleInputChange, handleCheckboxChange }) => {
    const { emailOrPhone, password, remember } = formData
    const { emailOrPhone: emailError, password: passwordError } = errors

    return (
      <Form name="basic" autoComplete="off">
        {/* Email or Phone Field */}
        <S.LabelWrapper>
          E-mail or Mobile Number <S.Highlight>*</S.Highlight>
        </S.LabelWrapper>

        <S.InputFieldWrapper>
          <InputWrapper
            placeholder="Enter your email or mobile number"
            name="emailOrPhone"
            value={emailOrPhone}
            onChange={handleInputChange}
          />
          {emailError && <S.WarningWrapper>{emailError}</S.WarningWrapper>}
        </S.InputFieldWrapper>

        {/* Password Field */}
        <S.LabelWrapper>
          Password <S.Highlight>*</S.Highlight>
        </S.LabelWrapper>

        <S.InputFieldWrapper>
          <InputWrapper.Password
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          {passwordError && (
            <S.WarningWrapper>{passwordError}</S.WarningWrapper>
          )}
        </S.InputFieldWrapper>

        {/* Remember Me & Forgot Password */}
        <div>
          <S.InputFieldWrapper>
            <Checkbox
              name="remember"
              checked={remember}
              onChange={handleCheckboxChange}
            >
              Remember me
            </Checkbox>
            <S.spanWrapper>Forget Password?</S.spanWrapper>
          </S.InputFieldWrapper>
        </div>
      </Form>
    )
  }
)

export default LoginForm
