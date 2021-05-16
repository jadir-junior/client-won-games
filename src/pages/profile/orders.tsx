import OrdersList, { OrderListProps } from 'components/OrdersList'

import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import ordersMock from 'components/OrdersList/mock'
import protectedRoutes from 'utils/protected-routes'

export default function Orders(props: OrderListProps) {
  return (
    <Profile>
      <OrdersList {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: { session, items: ordersMock }
  }
}
