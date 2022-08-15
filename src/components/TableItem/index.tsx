import { TableLine, TableColumn } from './styles'
import { Item } from '../../types/Item'
import { formatDate } from '../../helpers/dateFilter'

type Props = {
  item: Item
}
export const TableItem = ({ item }: Props) => {
  return(
    <TableLine>
      <TableColumn>{formatDate(item.date)}</TableColumn>
      <TableColumn>{item.category}</TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>R$ {item.value}</TableColumn>
    </TableLine>
  )
}