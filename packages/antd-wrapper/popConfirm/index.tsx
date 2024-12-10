import { Popconfirm, PopconfirmProps } from 'antd'

interface PopconfirmWrapperProps extends PopconfirmProps {}

const PopconfirmWrapper: React.FC<PopconfirmWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Popconfirm {...rest}>{children}</Popconfirm>
}

export default PopconfirmWrapper
