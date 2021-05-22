import * as S from './styles'

import GameItem, { GameItemProps, PaymentInfoProps } from 'components/GameItem'

import Empty from 'components/Empty'
import Heading from 'components/Heading'

type OrderProps = {
  id: string
  paymentInfo: PaymentInfoProps
  games: GameItemProps[]
}

export type OrderListProps = {
  items?: OrderProps[]
}

const OrdersList = ({ items }: OrderListProps) => (
  <S.Wrapper>
    <Heading lineBottom size="small" color="black">
      My orders
    </Heading>

    <S.Content>
      {items?.length ? (
        items.map((order) => {
          return order.games.map((game) => (
            <GameItem key={game.id} {...game} paymentInfo={order.paymentInfo} />
          ))
        })
      ) : (
        <Empty
          title="You have no orders yet"
          description="Go back to the store and explore great games and offers"
          hasLink
        />
      )}
    </S.Content>
  </S.Wrapper>
)

export default OrdersList
