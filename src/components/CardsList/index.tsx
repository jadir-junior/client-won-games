import Heading from 'components/Heading'
import { PaymentCard } from 'components/PaymentOptions'
import * as S from './styles'

export type CardListProps = {
  cards?: PaymentCard[]
}

const CardsList = ({ cards }: CardListProps) => (
  <S.Wrapper>
    <Heading size="small" lineBottom color="black">
      My cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.number}>
        <img src={card.img} alt={card.flag} />
        <span>{card.number}</span>
      </S.Card>
    ))}
  </S.Wrapper>
)

export default CardsList
