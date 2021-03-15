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

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      games: data.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover!.url}`,
        price: game.price
      })),
      filterItems: filterItemsMock
    }
  }
}
