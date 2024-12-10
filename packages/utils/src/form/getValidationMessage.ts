import {
  isValidEmail,
  isValidPassword,
  isValidPhoneNumber,
  isValidUsername,
} from '@package/constants/src/index'

// Define general-purpose validation messages and field checks
const getValidationMessage = (
  value: string,
  fieldName: string,
  confirmValue?: string // Optional parameter for confirm password comparison
): string | undefined => {
  if (!value) return `Please enter your ${fieldName}`

  const validationMap: Record<
    string,
    { isValid: (val: string) => boolean; errorMessage: string }
  > = {
    emailOrPhone: {
      isValid: (val) => isValidEmail(val) || isValidPhoneNumber(val),
      errorMessage: 'The input is not a valid E-mail or Mobile Number!',
    },
    email: {
      isValid: isValidEmail,
      errorMessage: 'The input is not a valid E-mail',
    },
    phone: {
      isValid: isValidPhoneNumber,
      errorMessage: 'The input is not a valid mobile number',
    },
    name: {
      isValid: isValidUsername,
      errorMessage:
        'Username must be alphanumeric and between 3 to 16 characters!',
    },
    password: {
      isValid: isValidPassword,
      errorMessage:
        'Password must be at least 8 characters containing numbers and alphabets!',
    },
    newPassword: {
      isValid: isValidPassword,
      errorMessage:
        'Password must be at least 8 characters containing numbers and alphabets!',
    },
  }

  if (fieldName === 'confirmPassword') {
    return value !== confirmValue
      ? 'The confirmation password does not match the new password!'
      : undefined
  }

  const validation = validationMap[fieldName]
  return validation && !validation.isValid(value)
    ? validation.errorMessage
    : undefined
}

export default getValidationMessage
