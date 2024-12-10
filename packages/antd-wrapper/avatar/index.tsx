import { Avatar, AvatarProps } from 'antd'

interface AvatarWrapperProps extends AvatarProps {
  children?: React.ReactNode
}

const AvatarWrapper: React.FC<AvatarWrapperProps> = ({ children, ...rest }) => {
  return <Avatar {...rest}>{children}</Avatar>
}

export default AvatarWrapper
