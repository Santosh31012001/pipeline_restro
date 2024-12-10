import { Collapse, CollapseProps } from 'antd'

interface CollapseWrapperProps extends CollapseProps {}

const CollapseWrapper: React.FC<CollapseWrapperProps> = (props) => {
  return <Collapse {...props} />
}

export default CollapseWrapper
