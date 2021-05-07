import Home, { HomeTemplateProps } from 'templates/Home'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

import { QUERY_HOME } from 'graphql/queries/home'
import { initializeApollo } from 'utils/apollo'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const TODAY = new Date().toISOString().slice(0, 10)

  const {
    data: { banners, newGames, upComingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: TODAY },
    fetchPolicy: 'no-cache'
  })

  return {
    revalidate: 10,
    props: {
      banners: bannerMapper(banners),
      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),
      mostPopularTitle: sections?.popularGames?.title,
      mostPopularHighLight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections!.popularGames!.games),
      upComingTitle: sections?.upcomingGames?.title,
      upComingGames: gamesMapper(upComingGames),
      upComingHighLight: highlightMapper(sections?.upcomingGames?.highlight),
      freeGamesTitle: sections?.freeGames?.title,
      freeGames: gamesMapper(freeGames),
      freeGamesHighLight: highlightMapper(sections?.freeGames?.highlight)
    }
  }
}
