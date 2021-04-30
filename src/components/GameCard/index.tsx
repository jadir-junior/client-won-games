import * as S from './styles'

import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'

import { AddShoppingCart as AddShoppingCartIcon } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from 'components/Button'
import { FavoriteBorder as FavoriteBorderIcon } from '@styled-icons/material-outlined/FavoriteBorder'
import { Favorite as FavoriteIcon } from '@styled-icons/material-outlined/Favorite'
import Link from 'next/link'
import formatPrice from 'utils/format-price'

export type GameCardProps = {
  slug: string
  title: string
  developer: string
  img: string
  price: number
  promotionalPrice?: number
  favorite?: boolean
  ribbon?: string
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  onFav?: () => void
}

const GameCard = ({
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonColor,
  ribbonSize,
  onFav
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <Link href={`game/${slug}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`game/${slug}`}>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>
      <S.FavIcon role="button" onClick={onFav}>
        {favorite ? (
          <FavoriteIcon aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorderIcon aria-label="Add to Wishlist" />
        )}
      </S.FavIcon>
      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        <S.Price>
          {price ? formatPrice(promotionalPrice || price) : 'FREE'}
        </S.Price>
        <Button icon={<AddShoppingCartIcon />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
