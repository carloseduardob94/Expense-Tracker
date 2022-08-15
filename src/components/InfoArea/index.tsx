import { Container, MonthArea, ResumeArea, MonthArrow, MonthTitle } from './styles'
import { formatCurrentMonth } from '../../helpers/dateFilter'
type Props = {
  currentMonth: string;
}

export const InfoArea = ({currentMonth}: Props) => {
  return(
    <Container>
      <MonthArea>
        <MonthArrow>⬅️</MonthArrow> 
        <MonthTitle>{formatCurrentMonth(currentMonth)}</MonthTitle>
        <MonthArrow>➡️</MonthArrow> 
      </MonthArea>

      <ResumeArea>

      </ResumeArea>
    </Container>
  )
}