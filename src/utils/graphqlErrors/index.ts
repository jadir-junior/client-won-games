import { ApolloError } from '@apollo/client'

export function graphqlErrors(error: ApolloError) {
  return error?.graphQLErrors[0]?.extensions?.exception.data.message[0]
    .messages[0].message
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function forgotAndResetPasswordError(error: any) {
  return error?.message[0].messages[0].message
}
