import { Result, ResultProps } from 'antd'

interface ResultWrapperProps extends ResultProps {}

const ResultWrapper: React.FC<ResultWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Result {...rest}>{children}</Result>
}

export default ResultWrapper
