import * as S from './styles'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import { Done } from '@styled-icons/material-outlined/Done'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Link from 'next/link'
import Showcase from 'components/Showcase'

export type SuccessTemplateProps = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const SuccessPage = ({
  recommendedGames,
  recommendedHighlight,
  recommendedTitle
}: SuccessTemplateProps) => (
  <Base>
    <Container>
      <S.Wrapper>
        <S.Heading>Your purchase was successful!</S.Heading>

        <S.CheckMark>
          <Done />
        </S.CheckMark>

        <S.Text>
          Wait for your payment details by email. Your game is now available for
          download inside your{' '}
          <Link href="/profile/orders">
            <a>Orders List</a>
          </Link>{' '}
          Enjoy!
        </S.Text>
      </S.Wrapper>
    </Container>

    <Showcase
      title={recommendedTitle}
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default SuccessPage
