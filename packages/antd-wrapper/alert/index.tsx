import { Alert, AlertProps } from 'antd'
import React from 'react'

interface AlertWrapperProps extends AlertProps {}

const AlertWrapper: React.FC<AlertWrapperProps> = (props) => {
  return <Alert {...props} />
}

export default AlertWrapper
