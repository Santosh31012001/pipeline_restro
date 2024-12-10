import { Progress, ProgressProps } from 'antd'

interface ProgressWrapperProps extends ProgressProps {}

const ProgressWrapper: React.FC<ProgressWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Progress {...rest}>{children}</Progress>
}

export default ProgressWrapper
