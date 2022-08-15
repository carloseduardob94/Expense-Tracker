import { useState, useEffect } from 'react'

import { Container, Header, HeaderText, Body } from './App.styles';
import { Item } from './types/Item'
import { items } from './data/items'
import { Category } from './types/Category'
import { categories } from './data/categories'
import { TableArea } from './components/TableArea'

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';

const App = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])

  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>
      
      <Body>

        {/*Área de informações*/}

        {/*Área de inserir informações*/}

        <TableArea list={filteredList}/>


      </Body>

    </Container>
  )
}

export default App