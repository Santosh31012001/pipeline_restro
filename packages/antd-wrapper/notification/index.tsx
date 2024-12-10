import { notification, NotificationArgsProps } from 'antd'

const NotificationWrapper = (props: NotificationArgsProps) => {
  return notification.open(props)
}

export default NotificationWrapper
