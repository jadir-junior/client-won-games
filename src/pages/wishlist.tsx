import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'
import { gamesMapper, highlightMapper } from 'utils/mappers'

import { GetServerSidePropsContext } from 'next'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import gamesMock from 'components/GameCardSlider/mock'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protected-routes'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()
  const session = await protectedRoutes(context)

  const {
    data: { recommended }
  } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      games: gamesMock,
      recommendedTitle: recommended?.section?.title,
      recommededGames: gamesMapper(recommended?.section?.games),
      recommededHighlight: highlightMapper(recommended?.section?.highlight)
    }
  }
}
