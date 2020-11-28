import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

    expect(screen.getByText(/continue shopping/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should handle select card when clicking on the label', async () => {
    renderWithTheme(<PaymentOptions {...props} handlePayment={jest.fn} />)

    userEvent.click(screen.getByLabelText(/4325/))
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/ })).toBeChecked()
    })
  })

  it('should not call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn()
    renderWithTheme(<PaymentOptions {...props} handlePayment={handlePayment} />)

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment when credit card is selected', async () => {
    const handlePayment = jest.fn()
    renderWithTheme(<PaymentOptions {...props} handlePayment={handlePayment} />)

    userEvent.click(screen.getByLabelText(/4325/))
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})
