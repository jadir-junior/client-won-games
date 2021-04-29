import { BannerFragment } from '../fragments/banner'
import { GameFragment } from 'graphql/fragments/game'
import { gql } from '@apollo/client'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }

    newGames: games(
      where: { release_date_lte: "2021-04-29" }
      sort: "release_date:desc"
      limit: 8
    ) {
      ...GameFragment
    }

    upComingGames: games(
      where: { release_date_lte: "2021-04-29" }
      sort: "release_date:asc"
      limit: 8
    ) {
      ...GameFragment
    }
  }

  ${GameFragment}
  ${BannerFragment}
`
