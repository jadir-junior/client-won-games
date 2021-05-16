import ProfileForm, { FormProfileProps } from 'components/ProfileForm'

import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import { QUERY_PROFILE_ME } from 'graphql/queries/profile'
import { QueryProfileMe } from 'graphql/generated/QueryProfileMe'
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

  const { data } = await apolloClient.query<QueryProfileMe>({
    query: QUERY_PROFILE_ME
  })

  return {
    props: { session, username: data.me?.username, email: data.me?.email }
  }
}
