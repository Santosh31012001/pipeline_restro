'use client'
import React, { useState, useCallback } from 'react'
//packages
import { getValidationMessage } from '@package/utils/src/index'
import Card from '@package/shared-ui/src/card/card'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
//style
import * as S from './Register.style'
//childcomponents
import RegisterForm from './registerform/RegisterForm'

type FieldType = {
  username: string
  email: string
  phone: string
  password: string
  agree: boolean
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FieldType>({
    username: '',
    email: '',
    phone: '',
    password: '',
    agree: false,
  })
  const [errors, setErrors] = useState<{
    username?: string
    email?: string
    password?: string
    phone?: string
  }>({})

  // Handle input changes (useCallback)
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData((prevData) => ({ ...prevData, [name]: value }))
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })) // Clear error when typing
    },
    []
  )

  // Handle Checkbox change (useCallback)
  const handleCheckboxChange = useCallback((e: CheckboxChangeEvent) => {
    setFormData((prevData) => ({ ...prevData, agree: e.target.checked }))
  }, [])

  // Handle form submission (useCallback)
  const handleSubmit = useCallback(() => {
    const usernameError = getValidationMessage(formData.username, 'username')
    const phoneError = getValidationMessage(formData.phone, 'phone')
    const emailError = getValidationMessage(formData.email, 'email')
    const passwordError = getValidationMessage(formData.password, 'password')

    const newErrors = {
      username: usernameError,
      phone: phoneError,
      email: emailError,
      password: passwordError,
    }

    // Set errors if there are any
    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors)
    } else {
      // Further actions on successful validation can be added here
      console.log('Registration successful:', formData)
    }
  }, [formData])

  return (
    <Card>
      <S.registerWrapper>
        <S.Heading>Register</S.Heading>
        <S.ParaWrapper>
          Don't have an account? <S.Highlight>Create your account</S.Highlight>{' '}
          it takes less than a minute
        </S.ParaWrapper>
        <RegisterForm
          formData={formData}
          errors={errors}
          handleInputChange={handleInputChange}
          handleCheckboxChange={handleCheckboxChange}
        />
        <S.Button onClick={handleSubmit}>Submit</S.Button>
      </S.registerWrapper>
    </Card>
  )
}

export default Register
