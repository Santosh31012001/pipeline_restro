'use client'
import React, { useState, useCallback } from 'react'

//packages
import { getValidationMessage } from '@package/utils/src/index'
import Card from '@package/shared-ui/src/card/card'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
//style
import * as S from './login.style'
//child component
import LoginForm from './form/LoginForm'

type FieldType = {
  emailOrPhone: string
  password: string
  remember?: boolean
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<FieldType>({
    emailOrPhone: '',
    password: '',
    remember: false,
  })
  const [errors, setErrors] = useState<{
    emailOrPhone?: string
    password?: string
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
    setFormData((prevData) => ({ ...prevData, remember: e.target.checked }))
  }, [])

  // Handle form submission (useCallback)
  const handleSubmit = useCallback(() => {
    const emailOrPhoneError = getValidationMessage(
      formData.emailOrPhone,
      'emailOrPhone'
    )
    const passwordError = getValidationMessage(formData.password, 'password')

    const newErrors = {
      emailOrPhone: emailOrPhoneError,
      password: passwordError,
    }

    if (emailOrPhoneError || passwordError) {
      setErrors(newErrors)
    }
  }, [formData])

  return (
    <Card>
      <S.logininternalWrapper>
        <S.loginHeading>Login Page</S.loginHeading>
        <LoginForm
          formData={formData}
          errors={errors}
          handleInputChange={handleInputChange}
          handleCheckboxChange={handleCheckboxChange}
        />

        <S.Button onClick={handleSubmit}>Submit</S.Button>
        <S.spanWrapper1>
          Not Yet Registered? <S.Highlight>Sign Up</S.Highlight>
        </S.spanWrapper1>
      </S.logininternalWrapper>
    </Card>
  )
}

export default LoginPage
