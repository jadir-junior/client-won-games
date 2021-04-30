import { GameFragment } from 'graphql/fragments/game'
import { HighligthFragment } from 'graphql/fragments/highlight'
import { gql } from '@apollo/client'

export const QUERY_RECOMMENDED = gql`
  query QueryRecommended {
    recommended {
      section {
        title
        highlight {
          ...HighligthFragment
        }
        games {
          ...GameFragment
        }
      }
    }
  }

  ${HighligthFragment}
  ${GameFragment}
`
