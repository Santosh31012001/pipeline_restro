import React from 'react'
import { Input, InputProps } from 'antd'

// Define the props type for InputWrapper
interface InputWrapperProps extends InputProps {}

// Main InputWrapper component for standard input fields
const InputWrapper: React.FC<InputWrapperProps> & {
  Password: React.FC<InputWrapperProps>
} = (props) => {
  const { ...rest } = props

  return <Input {...rest} />
}

// Define a separate Password component for password fields
const Password: React.FC<InputWrapperProps> = (props) => {
  const { ...rest } = props

  return <Input.Password {...rest} />
}

// Attach the Password component to the main InputWrapper
InputWrapper.Password = Password

export default InputWrapper
