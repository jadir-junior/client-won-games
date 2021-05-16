import { ApolloError } from '@apollo/client'

export function graphqlErrors(error: ApolloError) {
  return error?.graphQLErrors[0]?.extensions?.exception.data.message[0]
    .messages[0].message
}
