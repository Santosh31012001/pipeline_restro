import { Badge, BadgeProps } from 'antd'

interface BadgeWrapperProps extends BadgeProps {
  children?: React.ReactNode
}

const BadgeWrapper: React.FC<BadgeWrapperProps> = ({ children, ...rest }) => {
  return (
    <Badge {...rest}>
      <span>{children}</span>
    </Badge>
  )
}

export default BadgeWrapper
