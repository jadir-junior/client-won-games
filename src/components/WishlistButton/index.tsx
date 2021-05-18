import Button, { ButtonProps } from 'components/Button'

import { FavoriteBorder as FavoriteBorderIcon } from '@styled-icons/material-outlined/FavoriteBorder'
import { Favorite as FavoriteIcon } from '@styled-icons/material-outlined/Favorite'
import Spinner from 'components/Spinner'
import { useSession } from 'next-auth/client'
import { useState } from 'react'
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
  const [loading, setLoading] = useState(false)
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  const buttonText = isInWishlist(id)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist'

  const handleClick = async () => {
    setLoading(true)
    isInWishlist(id) ? await removeFromWishlist(id) : await addToWishlist(id)
    setLoading(false)
  }

  if (!session) return null

  return (
    <Button
      icon={
        loading ? (
          <Spinner />
        ) : isInWishlist(id) ? (
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
