import { BannerFragment } from '../fragments/banner'
import { GameFragment } from 'graphql/fragments/game'
import { HighligthFragment } from 'graphql/fragments/highlight'
import { gql } from '@apollo/client'

export const QUERY_HOME = gql`
  query QueryHome($date: Date!) {
    banners {
      ...BannerFragment
    }

    newGames: games(
      where: { release_date_lte: $date }
      sort: "release_date:desc"
      limit: 8
    ) {
      ...GameFragment
    }

    upComingGames: games(
      where: { release_date_lte: $date }
      sort: "release_date:asc"
      limit: 8
    ) {
      ...GameFragment
    }

    freeGames: games(where: { price: 0 }, sort: "release_date:asc", limit: 8) {
      ...GameFragment
    }

    sections: home {
      newGames {
        title
        highlight {
          ...HighligthFragment
        }
      }

      popularGames {
        title
        highlight {
          ...HighligthFragment
        }
        games(limit: 6) {
          ...GameFragment
        }
      }

      upcomingGames {
        title
        highlight {
          ...HighligthFragment
        }
      }

      freeGames {
        title
        highlight {
          ...HighligthFragment
        }
      }
    }
  }

  ${HighligthFragment}
  ${GameFragment}
  ${BannerFragment}
`
