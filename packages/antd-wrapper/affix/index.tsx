import { Affix, AffixProps } from 'antd'

interface AffixWrapperProps extends AffixProps {}

const AffixWrapper: React.FC<AffixWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Affix {...rest}>{children}</Affix>
}

export default AffixWrapper
