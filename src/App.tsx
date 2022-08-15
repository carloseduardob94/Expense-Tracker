import { useState, useEffect } from 'react'

import { Container, Header, HeaderText, Body } from './App.styles';
import { Item } from './types/Item'
import { items } from './data/items'
import { Category } from './types/Category'
import { categories } from './data/categories'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';

const App = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])

  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>
      
      <Body>

        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange} 
        />

        {/*Área de inserir informações*/}

        <TableArea list={filteredList}/>


      </Body>

    </Container>
  )
}

export default App