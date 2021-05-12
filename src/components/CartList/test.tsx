import { render, screen } from 'utils/test-utils'

import { CartContextDefaultValues } from 'hooks/use-cart'
import CartList from '.'
import items from './mock'

describe('<CartList />', () => {
  it('should render the CardList', () => {
    const { container } = render(<CartList />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render a card list with two items', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items
    }

    render(<CartList />, { cartProviderProps })

    expect(screen.getAllByRole('heading')).toHaveLength(2)
  })

  it('should render loading', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      loading: true
    }

    render(<CartList />, { cartProviderProps })

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('should render a footer with total and total price', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      total: '$330.00'
    }

    render(<CartList />, { cartProviderProps })

    expect(screen.getByText(/total/i)).toBeInTheDocument()
    expect(screen.getByText('$330.00')).toBeInTheDocument()
    expect(screen.getByText('$330.00')).toHaveStyle({
      color: '#F231A5'
    })
  })

  it('should render with a button', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      total: '$330.00'
    }
    render(<CartList hasButton />, { cartProviderProps })

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })

  it('should render empty if there are no games', () => {
    render(<CartList />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
