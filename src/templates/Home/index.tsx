import * as S from './styles'

import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import Base from 'templates/Base'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighLight: HighlightProps
  mostPopularGames: GameCardProps[]
  upComingGames: GameCardProps[]
  upComingHighLight: HighlightProps
  upComingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeGamesHighLight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighLight,
  mostPopularGames,
  upComingGames,
  upComingHighLight,
  upComingMoreGames,
  freeGamesHighLight,
  freeGames
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={newGames} />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighLight}
      games={mostPopularGames}
      arrowColor="white"
    />

    <Showcase
      title="Upcoming"
      highlight={upComingHighLight}
      games={upComingGames}
      arrowColor="white"
    />

    <Showcase
      title="Free Games"
      highlight={freeGamesHighLight}
      games={freeGames}
      arrowColor="white"
    />
  </Base>
)

export default Home
