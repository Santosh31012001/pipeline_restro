import { Card, CardProps } from 'antd'

interface CardWrapperProps extends CardProps {}

const CardWrapper: React.FC<CardWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Card {...rest}>{children}</Card>
}

export default CardWrapper
