import { Empty, EmptyProps } from 'antd'

interface EmptyWrapperProps extends EmptyProps {}

const EmptyWrapper: React.FC<EmptyWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Empty {...rest}>{children}</Empty>
}

export default EmptyWrapper
