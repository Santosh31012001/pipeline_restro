import React from 'react'
//packages
import { Form } from 'antd'
import InputWrapper from '@package/antd-wrapper/input/input'
//style
import * as S from './PasswordForm.style'

type FieldType = {
  newPassword: string
  confirmPassword: string
}

interface PasswordFormProps {
  formData: FieldType
  errors: {
    newPassword?: string
    confirmPassword?: string
  }
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

// Reusable input field component
const PasswordInputField: React.FC<{
  label: string
  name: keyof FieldType
  value: string
  error?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}> = ({ label, name, value, error, onChange }) => (
  <>
    <S.LabelWrapper>
      {label} <S.Highlight>*</S.Highlight>
    </S.LabelWrapper>
    <S.InputFieldWrapper>
      <InputWrapper.Password
        placeholder={`Enter your ${label.toLowerCase()}`}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <S.WarningWrapper>{error}</S.WarningWrapper>}
    </S.InputFieldWrapper>
  </>
)

const PasswordForm: React.FC<PasswordFormProps> = React.memo(
  ({ formData, errors, handleInputChange }) => {
    return (
      <S.FormWrapper>
        <Form name="password-form" autoComplete="off">
          {/* New Password Field */}
          <PasswordInputField
            label="New Password"
            name="newPassword"
            value={formData.newPassword}
            error={errors.newPassword}
            onChange={handleInputChange}
          />
          {/* Confirm Password Field */}
          <PasswordInputField
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            error={errors.confirmPassword}
            onChange={handleInputChange}
          />
        </Form>
      </S.FormWrapper>
    )
  }
)

export default PasswordForm
