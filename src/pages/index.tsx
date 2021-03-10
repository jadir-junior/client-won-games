import Home, { HomeTemplateProps } from 'templates/Home'
import { gql, useQuery } from '@apollo/client'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'

export default function Index(props: HomeTemplateProps) {
  if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>

  return <Home {...props} />
}

export async function getServerSideProps() {
  const GET_GAMES = gql`
    query getGames {
      games {
        name
      }
    }
  `

  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({ query: GET_GAMES })

  return {
    props: {
      data: data,
      initialApolloState: apolloClient.cache.extract(),
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighLight: highlightMock,
      mostPopularGames: gamesMock,
      upComingGames: gamesMock,
      upComingHighLight: highlightMock,
      upComingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeGamesHighLight: highlightMock
    }
  }
}
