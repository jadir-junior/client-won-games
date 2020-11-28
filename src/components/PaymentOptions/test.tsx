import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PaymentOptions from '.'

import cardsMock from './mock'

const props = {
  cards: cardsMock
}

describe('<PaymentOptions />', () => {
  it('should render the PaymentOptions', () => {
    const { container } = renderWithTheme(
      <PaymentOptions {...props} handlePayment={jest.fn} />
    )

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render a list of cards and button to add card', () => {
    renderWithTheme(<PaymentOptions {...props} handlePayment={jest.fn} />)

    expect(screen.getByText(/4325/)).toBeInTheDocument()
    expect(screen.getByText(/4326/)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /add a new credit card/i })
    ).toBeInTheDocument()
  })

  it(`should render a footer with two button 'Continue shopping' and 'Buy now'`, () => {
    renderWithTheme(<PaymentOptions {...props} handlePayment={jest.fn} />)

    expect(
      screen.getByRole('link', { name: /continue shopping/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /buy now/i })).toBeInTheDocument()
  })
})
