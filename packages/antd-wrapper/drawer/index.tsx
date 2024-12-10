import { Drawer, DrawerProps } from 'antd'

interface DrawerWrapperProps extends DrawerProps {}

const DrawerWrapper: React.FC<DrawerWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Drawer {...rest}>{children}</Drawer>
}

export default DrawerWrapper
