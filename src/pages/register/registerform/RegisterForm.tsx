import React from 'react'

// packages
import { Form, Checkbox } from 'antd'
import InputWrapper from '@package/antd-wrapper/input/input'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'

// style
import * as S from './RegisterForm.style'

type FieldType = {
  username: string
  email: string
  phone: string
  password: string
  agree: boolean
}

interface RegisterFormProps {
  formData: FieldType
  errors: {
    username?: string
    email?: string
    phone?: string
    password?: string
  }
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleCheckboxChange: (e: CheckboxChangeEvent) => void
}

const RegisterForm: React.FC<RegisterFormProps> = React.memo(
  ({ formData, errors, handleInputChange, handleCheckboxChange }) => {
    const { username, email, phone, password, agree } = formData
    const {
      username: usernameError,
      email: emailError,
      phone: phoneError,
      password: passwordError,
    } = errors

    // Helper method to render input fields
    const renderInputField = (
      label: string,
      name: keyof FieldType,
      value: string,
      errorMessage?: string,
      type: 'text' | 'password' = 'text'
    ) => (
      <>
        <S.LabelWrapper>
          {label} <S.Highlight>*</S.Highlight>
        </S.LabelWrapper>
        <S.FormItemWrapper>
          {type === 'password' ? (
            <InputWrapper.Password
              placeholder={`Enter your ${label.toLowerCase()}`}
              name={name}
              value={value}
              onChange={handleInputChange}
            />
          ) : (
            <InputWrapper
              placeholder={`Enter your ${label.toLowerCase()}`}
              name={name}
              value={value}
              onChange={handleInputChange}
            />
          )}
          {errorMessage && <S.WarningWrapper>{errorMessage}</S.WarningWrapper>}
        </S.FormItemWrapper>
      </>
    )

    return (
      <Form name="basic" autoComplete="off">
        <S.FormWrapper>
          {/* Render Input Fields */}
          {renderInputField('Name', 'username', username, usernameError)}
          {renderInputField('E-mail', 'email', email, emailError)}
          {renderInputField('Phone Number', 'phone', phone, phoneError)}
          {renderInputField(
            'Password',
            'password',
            password,
            passwordError,
            'password'
          )}

          {/* Agree Checkbox */}
          <S.FormItemWrapper>
            <Checkbox
              name="agree"
              checked={agree}
              onChange={handleCheckboxChange}
            >
              <S.ParaWrapper>
                I agree to Resto's{' '}
                <S.Highlight>Terms of Services, Privacy Policy</S.Highlight> and{' '}
                <S.Highlight>Content Policies</S.Highlight>
              </S.ParaWrapper>
            </Checkbox>
          </S.FormItemWrapper>
        </S.FormWrapper>
      </Form>
    )
  }
)

// Assign display name for better debugging and to satisfy ESLint
RegisterForm.displayName = 'RegisterForm'

export default RegisterForm
