import * as S from './styles'

import { GameCardProps } from 'components/GameCard'

export type GamesTemplateProps = {
  games?: GameCardProps[]
}

const GamesTemplate = ({ games = [] }: GamesTemplateProps) => (
  <S.Wrapper>
    <h1>Games</h1>
  </S.Wrapper>
)

export default GamesTemplate
