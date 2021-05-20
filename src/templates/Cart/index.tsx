import * as S from './styles'

import CartList, { CartListProps } from 'components/CartList'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { Elements } from '@stripe/react-stripe-js'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import { InformationCircle as InformationCircleIcon } from '@styled-icons/ionicons-outline/InformationCircle'
import PaymentForm from 'components/PaymentForm'
import { Session } from 'next-auth'
import Showcase from 'components/Showcase'
import { loadStripe } from '@stripe/stripe-js'

export type CartProps = {
  session: Session
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps

const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`)

const Cart = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight,
  session
}: CartProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        <div>
          <S.Content>
            <CartList />
            <Elements stripe={stripe}>
              <PaymentForm session={session} />
            </Elements>
          </S.Content>
          <S.Term>
            <S.Icon>
              <InformationCircleIcon size={20} />
            </S.Icon>
            Your purchase is protected by a secure connection from the WON
            platform. By purchasing from our store you agree and agree to our
            terms of use. After making the purchase you are entitled to a refund
            within a maximum of 30 days, without any additional cost, as long as
            the download of the purchased game has not occurred after your
            purchase.
          </S.Term>
        </div>

        <Divider></Divider>
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
        arrowColor="white"
      />
    </Base>
  )
}

export default Cart
