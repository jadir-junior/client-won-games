import Cart, { CartProps } from 'templates/Cart'
import { gamesMapper, highlightMapper } from 'utils/mappers'

import { GetServerSidePropsContext } from 'next'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import cardsMock from 'components/PaymentOptions/mock'
import { initializeApollo } from 'utils/apollo'
import itemsMock from 'components/CartList/mock'
import protectedRoutes from 'utils/protected-routes'

export default function Index(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const {
    data: { recommended }
  } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      items: itemsMock,
      total: '$ 400,00',
      cards: cardsMock,
      recommendedTitle: recommended?.section?.title,
      recommendedGames: gamesMapper(recommended?.section?.games),
      recommendedHighlight: highlightMapper(recommended?.section?.highlight)
    }
  }
}
