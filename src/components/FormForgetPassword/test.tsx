import 'server.mock'

import { render, screen } from 'utils/test-utils'

import FormForgetPassword from '.'
import userEvent from '@testing-library/user-event'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const query = {}

useRouter.mockImplementation(() => ({
  query
}))

describe('<FormForgetPassword />', () => {
  let inputEmail: HTMLElement
  let buttonSendEmail: HTMLElement

  beforeEach(() => {
    render(<FormForgetPassword />)

    inputEmail = screen.getByPlaceholderText(/email/i)
    buttonSendEmail = screen.getByRole('button', { name: /send email/i })
  })

  it('should render the FormForgetPassword', () => {
    expect(inputEmail).toBeInTheDocument()
    expect(buttonSendEmail).toBeInTheDocument()
  })

  it('should validate the email', async () => {
    await userEvent.type(inputEmail, 'valid@email.com')

    userEvent.click(buttonSendEmail)

    expect(
      await screen.findByText(/You just received an email!/i)
    ).toBeInTheDocument()
  })

  it('should show an invalid email', async () => {
    await userEvent.type(inputEmail, 'invalidemail')

    userEvent.click(buttonSendEmail)

    expect(
      await screen.findByText(/"email" must be a valid email/i)
    ).toBeInTheDocument()
  })

  it('should show an inexistent email error', async () => {
    await userEvent.type(inputEmail, 'false@email.com')

    userEvent.click(buttonSendEmail)

    expect(
      await screen.findByText(/This email does not exist/i)
    ).toBeInTheDocument()
  })
})
