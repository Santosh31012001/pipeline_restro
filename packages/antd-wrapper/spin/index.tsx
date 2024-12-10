import { Spin, SpinProps } from 'antd'

interface SpinWrapperProps extends SpinProps {}

const SpinWrapper: React.FC<SpinWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Spin {...rest}>{children}</Spin>
}

export default SpinWrapper
