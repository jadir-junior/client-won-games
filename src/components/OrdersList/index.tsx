import Empty from 'components/Empty'
import GameItem, { GameItemProps } from 'components/GameItem'
import Heading from 'components/Heading'
import * as S from './styles'

export type OrderListProps = {
  items?: GameItemProps[]
}

const OrdersList = ({ items }: OrderListProps) => (
  <S.Wrapper>
    <Heading lineBottom size="small" color="black">
      My orders
    </Heading>

    <S.Content>
      {items?.length ? (
        items?.map((item, index) => <GameItem {...item} key={index} />)
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
