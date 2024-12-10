import React from 'react'

//packages
import { Form } from 'antd'
import InputWrapper from '@package/antd-wrapper/input/input'

//style
import * as S from './ResetForm.style'

type FieldType = {
  emailOrPhone: string
}

type ResetPasswordFormProps = {
  formData: FieldType
  errors: { emailOrPhone?: string }
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = React.memo(
  ({ formData, errors, handleInputChange }) => {
    const { emailOrPhone } = formData
    const { emailOrPhone: emailOrPhoneError } = errors

    return (
      <S.FormWrapper>
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
            {emailOrPhoneError && (
              <S.WarningWrapper>{emailOrPhoneError}</S.WarningWrapper>
            )}
          </S.InputFieldWrapper>

          {/* Registration Link */}
          <S.ParaWrapper>
            Password reset link sent to your mobile number and email{' '}
            <S.Highlight>xyz@gmail.com</S.Highlight>
          </S.ParaWrapper>
        </Form>
      </S.FormWrapper>
    )
  }
)

export default ResetPasswordForm
