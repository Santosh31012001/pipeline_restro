import { List, ListProps } from 'antd'
import React from 'react'

interface ListWrapperProps<T> extends ListProps<T> {}

const ListWrapper = <T,>(props: ListWrapperProps<T>) => {
  return <List {...props} />
}

export default ListWrapper
