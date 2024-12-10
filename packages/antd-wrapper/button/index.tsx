import React from 'react'
import { Button, ButtonProps } from 'antd'

interface ButtonWrapperProps extends ButtonProps {}

const ButtonWrapper: React.FC<ButtonWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Button {...rest}>{children}</Button>
}

export default ButtonWrapper
