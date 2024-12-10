import { Skeleton, SkeletonProps } from 'antd'

interface SkeletonWrapperProps extends SkeletonProps {}

const SkeletonWrapper: React.FC<SkeletonWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Skeleton {...rest}>{children}</Skeleton>
}

export default SkeletonWrapper
