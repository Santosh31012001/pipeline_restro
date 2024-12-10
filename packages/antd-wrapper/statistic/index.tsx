import { Statistic, StatisticProps } from 'antd'

interface StatisticWrapperProps extends StatisticProps {}

const StatisticWrapper: React.FC<StatisticWrapperProps> = (props) => {
  return <Statistic {...props} />
}

export default StatisticWrapper
