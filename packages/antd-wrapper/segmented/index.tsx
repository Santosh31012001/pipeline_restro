import { Segmented, SegmentedProps } from 'antd'

interface SegmentedWrapperProps extends SegmentedProps {}

const SegmentedWrapper: React.FC<SegmentedWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Segmented {...rest}>{children}</Segmented>
}

export default SegmentedWrapper
