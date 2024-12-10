'use client'
import React, { useState, useCallback, useMemo } from 'react'

//package
import { getValidationMessage } from '@package/utils/src/index'
import Card from '@package/shared-ui/src/card/card'

//style
import * as S from './ChangePassword.style'

// Import child component
import PasswordForm from './PasswordForm/PasswordForm'

type FieldType = {
  newPassword: string
  confirmPassword: string
}

const ChangePassword: React.FC = () => {
  const [formData, setFormData] = useState<FieldType>({
    newPassword: '',
    confirmPassword: '',
  })

  const [errors, setErrors] = useState<{
    newPassword?: string
    confirmPassword?: string
  }>({})

  // Handle input changes (wrapped with useCallback)
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData((prevData) => ({ ...prevData, [name]: value }))
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })) // Clear error when typing
    },
    []
  )

  // Memoize error calculation to avoid recalculating unless necessary
  const validateForm = useCallback(() => {
    const newPasswordError = getValidationMessage(
      formData.newPassword,
      'newPassword'
    )
    const confirmPasswordError = getValidationMessage(
      formData.confirmPassword,
      'confirmPassword',
      formData.newPassword
    )

    return {
      newPassword: newPasswordError || '',
      confirmPassword: confirmPasswordError || '',
    }
  }, [formData.newPassword, formData.confirmPassword])

  // Memoize form errors
  const newErrors = useMemo(() => validateForm(), [validateForm])

  // Handle form submission (wrapped with useCallback)
  const handleSubmit = useCallback(() => {
    const validationErrors = validateForm()

    // Update errors only if there are new errors
    if (Object.values(validationErrors).some((error) => error)) {
      setErrors(validationErrors)
    } else {
      // Proceed with form submission logic here (e.g., call API)
      console.log('Form is valid. Submitting data:', formData)
    }
  }, [validateForm, formData])

  return (
    <Card>
      <S.PasswordinternalWrapper>
        <S.Heading>Change Password</S.Heading>

        {/* Use the PasswordForm component */}
        <PasswordForm
          formData={formData}
          errors={errors}
          handleInputChange={handleInputChange}
        />
        {/* Submit Button */}
        <S.Button onClick={handleSubmit}>Update Password</S.Button>
        {/* Back to Login Button */}
        <S.Button>Back To LoginPage</S.Button>
      </S.PasswordinternalWrapper>
    </Card>
  )
}

export default ChangePassword
