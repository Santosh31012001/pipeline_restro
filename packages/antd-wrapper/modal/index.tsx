import { Modal, ModalProps } from 'antd'

interface ModalWrapperProps extends ModalProps {}

const ModalWrapper: React.FC<ModalWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Modal {...rest}>{children}</Modal>
}

export default ModalWrapper
