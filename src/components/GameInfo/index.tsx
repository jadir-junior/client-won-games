import * as S from './styles'

import { CartButton } from 'components/CartButton'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import WishlistButton from 'components/WishlistButton'
import formatPrice from 'utils/format-price'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <S.Wrapper data-cy="game-info">
    <Heading lineBottom color="black">
      {title}
    </Heading>
    <Ribbon color="secondary" size="small">
      {formatPrice(price)}
    </Ribbon>
    <S.Description>{description}</S.Description>
    <S.ButtonsWrapper>
      <CartButton id={id} size="large" hasText></CartButton>
      <WishlistButton id={id} hasText size="large" />
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
