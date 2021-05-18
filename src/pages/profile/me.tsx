import ProfileForm, { FormProfileProps } from 'components/ProfileForm'
import {
  QueryProfileMe,
  QueryProfileMeVariables
} from 'graphql/generated/QueryProfileMe'

import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import { QUERY_PROFILE_ME } from 'graphql/queries/profile'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protected-routes'

export default function Me(props: FormProfileProps) {
  return (
    <Profile>
      <ProfileForm {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<
    QueryProfileMe,
    QueryProfileMeVariables
  >({
    query: QUERY_PROFILE_ME,
    variables: {
      identifier: session?.id as string
    }
  })

  return {
    props: { session, username: data?.user?.username, email: data?.user?.email }
  }
}
