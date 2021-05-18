import {
  QueryWishlist,
  QueryWishlistVariables
} from 'graphql/generated/QueryWishlist'
import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'
import { gamesMapper, highlightMapper } from 'utils/mappers'

import { GetServerSidePropsContext } from 'next'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protected-routes'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  if (!session) return {}

  await apolloClient.query<QueryWishlist, QueryWishlistVariables>({
    query: QUERY_WISHLIST,
    variables: {
      identifier: session?.user?.email as string
    }
  })

  const {
    data: { recommended }
  } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      initializeApolloState: apolloClient.cache.extract(),
      recommendedTitle: recommended?.section?.title,
      recommededGames: gamesMapper(recommended?.section?.games),
      recommededHighlight: highlightMapper(recommended?.section?.highlight)
    }
  }
}
