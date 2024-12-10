import { Image, ImageProps } from 'antd'

interface ImageWrapperProps extends ImageProps {}

const ImageWrapper: React.FC<ImageWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Image {...rest}>{children}</Image>
}

export default ImageWrapper
