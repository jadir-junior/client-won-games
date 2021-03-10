import Home, { HomeTemplateProps } from 'templates/Home'
import { gql, useQuery } from '@apollo/client'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  const { data, loading, error } = useQuery(gql`
    query getGames {
      games {
        name
      }
    }
  `)

  if (loading) return <p>Loading...</p>

  if (error) return <p>{error}</p>

  if (data) return <p>{JSON.stringify(data, null, 2)}</p>

  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
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
