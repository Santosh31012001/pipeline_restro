import { Tabs, TabsProps } from 'antd'

interface TabsWrapperProps extends TabsProps {}

const TabsWrapper: React.FC<TabsWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Tabs {...rest}>{children}</Tabs>
}

export default TabsWrapper
