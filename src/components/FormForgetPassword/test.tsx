import 'server.mock'

import { render, screen } from 'utils/test-utils'

import FormForgetPassword from '.'
import userEvent from '@testing-library/user-event'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}

useRouter.mockImplementation(() => ({
  query
}))

describe('<FormForgetPassword />', () => {
  it('should render the FormForgetPassword', () => {
    render(<FormForgetPassword />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: /send email/i
      })
    ).toBeInTheDocument()
  })

  it('should validate the email', async () => {
    render(<FormForgetPassword />)

    await userEvent.type(
      screen.getByPlaceholderText(/email/i),
      'valid@email.com'
    )

    userEvent.click(
      screen.getByRole('button', {
        name: /send email/i
      })
    )

    expect(
      await screen.findByText(/You just received an email!/i)
    ).toBeInTheDocument()
  })

  it('should show an invalid email', async () => {
    render(<FormForgetPassword />)

    await userEvent.type(screen.getByPlaceholderText(/email/i), 'invalidemail')

    userEvent.click(
      screen.getByRole('button', {
        name: /send email/i
      })
    )

    expect(
      await screen.findByText(/"email" must be a valid email/i)
    ).toBeInTheDocument()
  })

  it('should show an inexistent email error', async () => {
    render(<FormForgetPassword />)

    await userEvent.type(
      screen.getByPlaceholderText(/email/i),
      'false@email.com'
    )

    userEvent.click(
      screen.getByRole('button', {
        name: /send email/i
      })
    )

    expect(
      await screen.findByText(/This email does not exist/i)
    ).toBeInTheDocument()
  })

  it('should autofill if comes via logged user', () => {
    query = { email: 'valid@email.com' }
    render(<FormForgetPassword />)

    expect(screen.getByPlaceholderText(/email/i)).toHaveValue('valid@email.com')
  })
})
