import Button, { ButtonProps } from 'components/Button'

import { FavoriteBorder as FavoriteBorderIcon } from '@styled-icons/material-outlined/FavoriteBorder'
import { Favorite as FavoriteIcon } from '@styled-icons/material-outlined/Favorite'
import { removeWishlistMock } from 'hooks/use-wishlist/mock'
import { useSession } from 'next-auth/client'
import { useWishlist } from 'hooks/use-wishlist'

export type WishlistButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({
  id,
  hasText,
  size = 'small'
}: WishlistButtonProps) => {
  const [session] = useSession()
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  const buttonText = isInWishlist(id)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist'

  const handleClick = () =>
    isInWishlist(id) ? removeFromWishlist(id) : addToWishlist(id)

  if (!session) return null

  return (
    <Button
      icon={
        isInWishlist(id) ? (
          <FavoriteIcon aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorderIcon aria-label="Add to Wishlist" />
        )
      }
      onClick={handleClick}
      minimal
      size={size}
    >
      {hasText && buttonText}
    </Button>
  )
}

export default WishlistButton
