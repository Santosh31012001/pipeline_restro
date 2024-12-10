import { Watermark, WatermarkProps } from 'antd'

interface WatermarkWrapperProps extends WatermarkProps {}

const WatermarkWrapper: React.FC<WatermarkWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Watermark {...rest}>{children}</Watermark>
}

export default WatermarkWrapper
