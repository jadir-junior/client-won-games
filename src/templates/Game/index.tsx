import * as S from './styles'

import Gallery, { GalleryImageProps } from '../../components/Gallery'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import GameInfo, { GameInfoProps } from 'components/GameInfo'

import Base from 'templates/Base'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import TextContent from 'components/TextContent'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcominghighlight: HighlightProps
  recommendedTitle: string
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcominghighlight,
  recommendedTitle,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} aria-label="cover" role="image" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGalley>
        {gallery && <Gallery items={gallery} />}
      </S.SectionGalley>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />

        <Divider />
      </S.SectionGameDetails>

      <Showcase
        title="Upcoming"
        highlight={upcominghighlight}
        games={upcomingGames}
        arrowColor="white"
      />

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        arrowColor="white"
      />
    </S.Main>
  </Base>
)

export default Game
