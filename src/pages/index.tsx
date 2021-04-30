import Home, { HomeTemplateProps } from 'templates/Home'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'
import { initializeApollo } from 'utils/apollo'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upComingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({
    query: QUERY_HOME
  })

  return {
    props: {
      revalidate: 60,
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
