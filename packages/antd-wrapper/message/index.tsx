import { message, MessageArgsProps } from 'antd'

const MessageWrapper = (props: MessageArgsProps) => {
  return message.open(props)
}

export default MessageWrapper
