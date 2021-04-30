import GameCard, { GameCardProps } from 'components/GameCard'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'
import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedTitle: string
  recommededGames: GameCardProps[]
  recommededHighlight: HighlightProps
}

const Wishlist = ({
  games,
  recommendedTitle,
  recommededGames,
  recommededHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games?.length ? (
        <Grid>
          {games?.map((game, index) => (
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

export default Wishlist
