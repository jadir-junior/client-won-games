import CardsList, { CardListProps } from 'components/CardsList'

import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import cardsMock from 'components/PaymentOptions/mock'
import protectedRoutes from 'utils/protected-routes'

export default function Cards(props: CardListProps) {
  return (
    <Profile>
      <CardsList {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: { session, cards: cardsMock }
  }
}
