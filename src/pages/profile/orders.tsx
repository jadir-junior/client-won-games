import Profile from 'templates/Profile'

import OrdersList, { OrderListProps } from 'components/OrdersList'

import ordersMock from 'components/OrdersList/mock'

export default function Orders(props: OrderListProps) {
  return (
    <Profile>
      <OrdersList {...props} />
    </Profile>
  )
}

export async function getServerSideProps() {
  return {
    props: { items: ordersMock }
  }
}
