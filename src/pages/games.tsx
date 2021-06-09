import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import {
  genreFields,
  platformsFields,
  priceFields,
  sortFields
} from '../utils/filter/fields'

import { GetServerSidePropsContext } from 'next'
import { QUERY_GAMES } from '../graphql/queries/games'
import { initializeApollo } from 'utils/apollo'
import { parseQueryStringToWhere } from 'utils/filter'

export default function Index(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

  const filterPrice = {
    title: 'Price',
    name: 'price_lte',
    type: 'radio',
    fields: priceFields
  }

  const filterPlatforms = {
    title: 'Platforms',
    name: 'platforms',
    type: 'checkbox',
    fields: platformsFields
  }

  const filterSort = {
    title: 'Sort by price',
    name: 'sort',
    type: 'radio',
    fields: sortFields
  }

  const filterCategories = {
    title: 'Genres',
    name: 'categories',
    type: 'checkbox',
    fields: genreFields
  }

  const filterItems = [
    filterSort,
    filterPrice,
    filterPlatforms,
    filterCategories
  ]

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems
    }
  }
}
