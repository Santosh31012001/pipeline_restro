// Regex patterns for email, phone number, password, and username validation
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
const phoneRegex = /^\d{10}$/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ // Minimum 8 characters, at least one letter and one number
const usernameRegex = /^[A-Za-z0-9_]{3,16}$/ // Alphanumeric and underscores, between 3 to 16 characters

// Utility functions for validating inputs using regex
export const isValidEmail = (email: string): boolean => emailRegex.test(email)
export const isValidPhoneNumber = (phoneNumber: string): boolean =>
  phoneRegex.test(phoneNumber)
export const isValidPassword = (password: string): boolean =>
  passwordRegex.test(password)
export const isValidUsername = (username: string): boolean =>
  usernameRegex.test(username)
