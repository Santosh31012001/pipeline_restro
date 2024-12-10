import { QRCode, QRCodeProps } from 'antd'

interface QRCodeWrapperProps extends QRCodeProps {}

const QRCodeWrapper: React.FC<QRCodeWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <QRCode {...rest}>{children}</QRCode>
}

export default QRCodeWrapper
