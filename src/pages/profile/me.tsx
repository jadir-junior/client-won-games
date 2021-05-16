import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import ProfileForm from 'components/ProfileForm'
import protectedRoutes from 'utils/protected-routes'

export default function Me() {
  return (
    <Profile>
      <ProfileForm />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: { session }
  }
}
