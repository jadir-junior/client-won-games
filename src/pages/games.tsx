import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

import { QUERY_GAMES } from '../graphql/queries/games'
import filterItemsMock from 'components/ExploreSideBar/mock'
import { initializeApollo } from 'utils/apollo'

export default function Index(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      initialApolloState: apolloClient.cache.extract(),
      filterItems: filterItemsMock
    }
  }
}
