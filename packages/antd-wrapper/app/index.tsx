import { App, AppProps } from 'antd'

interface AppWrapperProps extends AppProps {}

const AppWrapper: React.FC<AppWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <App {...rest}>{children}</App>
}

export default AppWrapper
