import gql from 'graphql-tag'

export const QUERY_PROFILE_ME = gql`
  query QueryProfileMe {
    me {
      username
      email
    }
  }
`
