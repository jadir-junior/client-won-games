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
  newGamesTitle: string
  newGames: GameCardProps[]
  mostPopularTitle: string
  mostPopularHighLight: HighlightProps
  mostPopularGames: GameCardProps[]
  upComingTitle: string
  upComingGames: GameCardProps[]
  upComingHighLight: HighlightProps
  freeGamesTitle: string
  freeGames: GameCardProps[]
  freeGamesHighLight: HighlightProps
}

const Home = ({
  banners,
  newGamesTitle,
  newGames,
  mostPopularTitle,
  mostPopularHighLight,
  mostPopularGames,
  upComingTitle,
  upComingGames,
  upComingHighLight,
  freeGamesTitle,
  freeGames,
  freeGamesHighLight
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title={newGamesTitle} games={newGames} />
    </S.SectionNews>

    <Showcase
      title={mostPopularTitle}
      highlight={mostPopularHighLight}
      games={mostPopularGames}
      arrowColor="white"
    />

    <Showcase
      title={upComingTitle}
      highlight={upComingHighLight}
      games={upComingGames}
      arrowColor="white"
    />

    <Showcase
      title={freeGamesTitle}
      highlight={freeGamesHighLight}
      games={freeGames}
      arrowColor="white"
    />
  </Base>
)

export default Home
