import { Container, Title, Info } from './styles'

type Props = {
  title: string;
  value: number
}

export const ResumeItem = ({ title, value }: Props) => {
  return(
    <Container>
      <Title>{title}</Title>
      <Info>R$ {value}</Info>

    </Container>
  )
}