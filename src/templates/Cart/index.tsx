import * as S from './styles'

import CartList, { CartListProps } from 'components/CartList'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import { InformationCircle as InformationCircleIcon } from '@styled-icons/ionicons-outline/InformationCircle'
import Showcase from 'components/Showcase'

export type CartProps = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards
}: CartProps) => {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        {items?.length ? (
          <div>
            <S.Content>
              <CartList items={items} total={total} />
              <PaymentOptions cards={cards} handlePayment={handlePayment} />
            </S.Content>
            <S.Term>
              <S.Icon>
                <InformationCircleIcon size={20} />
              </S.Icon>
              Your purchase is protected by a secure connection from the WON
              platform. By purchasing from our store you agree and agree to our
              terms of use. After making the purchase you are entitled to a
              refund within a maximum of 30 days, without any additional cost,
              as long as the download of the purchased game has not occurred
              after your purchase.
            </S.Term>
          </div>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

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
