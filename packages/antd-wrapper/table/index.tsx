import { Table, TableProps } from 'antd'

interface TableWrapperProps extends TableProps {}

const TableWrapper: React.FC<TableWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Table {...rest}>{children}</Table>
}

export default TableWrapper
