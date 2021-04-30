import { GameFragment } from 'graphql/fragments/game'
import { HighligthFragment } from 'graphql/fragments/highlight'
import { gql } from '@apollo/client'

export const QUERY_UPCOMING = gql`
  query QueryUpcoming($date: Date!) {
    upComingGames: games(
      where: { release_date_lte: $date }
      sort: "release_date:asc"
      limit: 8
    ) {
      ...GameFragment
    }

    showcase: home {
      upcomingGames {
        title
        highlight {
          ...HighligthFragment
        }
      }
    }
  }

  ${HighligthFragment}
  ${GameFragment}
`
