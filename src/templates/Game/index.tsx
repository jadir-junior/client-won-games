import * as S from './styles'

import Gallery, { GalleryImageProps } from '../../components/Gallery'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import GameInfo, { GameInfoProps } from 'components/GameInfo'

import Base from 'templates/Base'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Showcase from 'components/Showcase'
import TextContent from 'components/TextContent'

export type GameTemplateProps = {
  slug?: string
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingTitle: string
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedTitle: string
  recommendedGames: GameCardProps[]
}

const Game = ({
  slug,
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingTitle,
  upcomingGames,
  upcomingHighlight,
  recommendedTitle,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <NextSeo
      title={`${gameInfo.title} - Won Games`}
      description={`${gameInfo.description}`}
      canonical={`https://wongames.jadirjunior.com.br/game/${slug}`}
      openGraph={{
        url: `https://wongames.jadirjunior.com.br/game/${slug}`,
        title: `${gameInfo.title} - Won Games`,
        description: gameInfo.description,
        images: [
          {
            url: cover,
            alt: `${gameInfo.title}`
          }
        ]
      }}
    />

    <S.Cover>
      <Image src={cover} alt={gameInfo.title} layout="fill" />
    </S.Cover>

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
        title={upcomingTitle}
        highlight={upcomingHighlight}
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
