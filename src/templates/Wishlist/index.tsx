import * as S from './styles'

import GameCard, { GameCardProps } from 'components/GameCard'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'
import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import { Loader } from 'components/Loader'
import Showcase from 'components/Showcase'
import { useWishlist } from 'hooks/use-wishlist'

export type WishlistTemplateProps = {
  recommendedTitle: string
  recommededGames: GameCardProps[]
  recommededHighlight: HighlightProps
}

const Wishlist = ({
  recommendedTitle,
  recommededGames,
  recommededHighlight
}: WishlistTemplateProps) => {
  const { items, loading } = useWishlist()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>
        {loading ? (
          <S.Loading>
            <Loader />
          </S.Loading>
        ) : items.length >= 1 ? (
          <Grid>
            {items?.map((game, index) => (
              <GameCard {...game} key={`wishlist-${index}`} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommededGames}
        highlight={recommededHighlight}
        arrowColor="white"
      />
    </Base>
  )
}

export default Wishlist
