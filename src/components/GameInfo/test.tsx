import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'Title',
  description: 'Description',
  price: '200.00'
}

describe('<GameInfo />', () => {
  it('should render the GameInfo', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render game info', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()
    expect(screen.getByText(/description/i)).toBeInTheDocument()
    expect(screen.getByText('200.00')).toBeInTheDocument()
  })

  it('should render the buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(screen.getAllByRole('button')).toHaveLength(2)
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
