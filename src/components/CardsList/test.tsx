import { render, screen } from 'utils/test-utils'

import CardsList from '.'
import cardsMock from 'components/PaymentOptions/mock'

describe('<CardsList />', () => {
  it('should render the CardsList', () => {
    const { container } = render(<CardsList />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render the heading', () => {
    render(<CardsList />)

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()
  })

  it('should render the cards list', () => {
    render(<CardsList cards={cardsMock} />)

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/visa.png'
    )
    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/master-card.png'
    )

    expect(screen.getByText(/4325/)).toBeInTheDocument()
    expect(screen.getByText(/4326/)).toBeInTheDocument()
  })
})
