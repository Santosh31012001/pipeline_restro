import { Tree, TreeProps } from 'antd'

interface TreeWrapperProps extends TreeProps {}

const TreeWrapper: React.FC<TreeWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Tree {...rest}>{children}</Tree>
}

export default TreeWrapper
