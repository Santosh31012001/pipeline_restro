import { Popover, PopoverProps } from 'antd'

interface PopoverWrapperProps extends PopoverProps {}

const PopoverWrapper: React.FC<PopoverWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Popover {...rest}>{children}</Popover>
}

export default PopoverWrapper
