import { ConfigProvider, ConfigProviderProps } from 'antd'

interface ConfigProviderWrapperProps extends ConfigProviderProps {}

const ConfigProviderWrapper: React.FC<ConfigProviderWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <ConfigProvider {...rest}>{children}</ConfigProvider>
}

export default ConfigProviderWrapper
