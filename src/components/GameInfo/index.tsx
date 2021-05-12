import * as S from './styles'

import Button from 'components/Button'
import { CartButton } from 'components/CartButton'
import { FavoriteBorder as FavoriteBorderIcon } from '@styled-icons/material-outlined/FavoriteBorder'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import formatPrice from 'utils/format-price'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black">
      {title}
    </Heading>
    <Ribbon color="secondary" size="small">
      {formatPrice(price)}
    </Ribbon>
    <S.Description>{description}</S.Description>
    <S.ButtonsWrapper>
      <CartButton id={id} size="large" hasText></CartButton>
      <Button icon={<FavoriteBorderIcon />} size="large" minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
