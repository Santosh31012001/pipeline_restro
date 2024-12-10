import { Tag, TagProps } from 'antd'

interface TagWrapperProps extends TagProps {}

const TagWrapper: React.FC<TagWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Tag {...rest}>{children}</Tag>
}

export default TagWrapper
