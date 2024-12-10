'use client'
import React, { useState, useCallback } from 'react'

//packages
import Card from '@package/shared-ui/src/card/card'
import { getValidationMessage } from '@package/utils/src/index'

//style
import * as S from './ResetPassword.style'

//child components
import ResetForm from './reset-form/ResetForm'

type FieldType = {
  emailOrPhone: string
}

const ResetPassword: React.FC = () => {
  const [formData, setFormData] = useState<FieldType>({ emailOrPhone: '' })
  const [errors, setErrors] = useState<{ emailOrPhone?: string }>({})

  // Handle input changes (useCallback)
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target

      setFormData((prevData) => ({ ...prevData, [name]: value }))
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })) // Clear error message
    },
    []
  )

  // Handle form submission (useCallback)
  const handleSubmit = useCallback(() => {
    const newErrors: { emailOrPhone?: string } = {}

    // Validate the email or phone field
    newErrors.emailOrPhone = getValidationMessage(
      formData.emailOrPhone,
      'emailOrPhone'
    )

    // Update the error state if there are errors
    if (newErrors.emailOrPhone) {
      setErrors(newErrors)
    } else {
      console.log('Form is valid:', formData)
      // Additional actions like API calls can be handled here
    }
  }, [formData])

  return (
    <Card>
      <S.PasswordinternalWrapper>
        <S.Heading>Reset Password</S.Heading>
        <S.ParaWrapper>
          Provide your account's E-mail or Mobile number you want to reset your
          password.
        </S.ParaWrapper>
      </S.PasswordinternalWrapper>

      {/* Render the ResetForm and pass necessary props */}
      <ResetForm
        formData={formData}
        errors={errors}
        handleInputChange={handleInputChange}
      />

      {/* Registration Link */}
      <S.spanWrapper>
        This reset link will be valid for 10 minutes
      </S.spanWrapper>

      {/* Submit Button */}
      <S.Button onClick={handleSubmit}>Next</S.Button>
    </Card>
  )
}

export default ResetPassword
