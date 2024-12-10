import { Descriptions, DescriptionsProps } from 'antd'
import React from 'react'

interface DescriptionsWrapperProps extends DescriptionsProps {}

const DescriptionsWrapper: React.FC<DescriptionsWrapperProps> = (props) => {
  return <Descriptions {...props} />
}

export default DescriptionsWrapper
