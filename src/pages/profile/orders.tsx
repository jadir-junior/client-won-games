import OrdersList, { OrderListProps } from 'components/OrdersList'
import {
  QueryOrders,
  QueryOrdersVariables
} from 'graphql/generated/QueryOrders'

import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import { QUERY_ORDERS } from 'graphql/queries/orders'
import { initializeApollo } from 'utils/apollo'
import { ordersMapper } from 'utils/mappers'
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
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryOrders, QueryOrdersVariables>({
    query: QUERY_ORDERS,
    variables: {
      identifier: session?.id as string
    }
  })

  return {
    props: { session, items: ordersMapper(data.orders) }
  }
}
