import * as S from './styles'

import Highlight, { HighlightProps } from 'components/Highlight'

import { GameCardProps } from 'components/GameCard'
import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  arrowColor?: 'white' | 'black'
}

const Showcase = ({
  title,
  highlight,
  games,
  arrowColor = 'black'
}: ShowcaseProps) => (
  <S.Wrapper data-cy={title || 'showcase'}>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} color={arrowColor} />}
  </S.Wrapper>
)

export default Showcase
