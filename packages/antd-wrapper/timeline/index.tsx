import { Timeline, TimelineProps } from 'antd'

interface TimelineWrapperProps extends TimelineProps {}

const TimelineWrapper: React.FC<TimelineWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Timeline {...rest}>{children}</Timeline>
}

export default TimelineWrapper
