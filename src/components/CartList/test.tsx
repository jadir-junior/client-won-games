import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartList from '.'

import mockCartListItems from './mock'

describe('<CartList />', () => {
  it('should render the CardList', () => {
    const { container } = renderWithTheme(
      <CartList items={mockCartListItems} total="R$ 330,00" />
    )

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render a card list with two items', () => {
    renderWithTheme(<CartList items={mockCartListItems} total="R$ 330,00" />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
  })

  it('should render a footer with total and total price', () => {
    renderWithTheme(<CartList items={mockCartListItems} total="R$ 330,00" />)

    expect(screen.getByText(/total/i)).toBeInTheDocument()
    expect(screen.getByText('R$ 330,00')).toBeInTheDocument()
    expect(screen.getByText('R$ 330,00')).toHaveStyle({
      color: '#F231A5'
    })
  })
})