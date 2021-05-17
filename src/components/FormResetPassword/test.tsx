import 'server.mock'

import { render, screen, waitFor } from 'utils/test-utils'

import FormResetPassword from '.'
import { signIn } from 'next-auth/client'
import userEvent from '@testing-library/user-event'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}

useRouter.mockImplementation(() => ({
  query
}))

jest.mock('next-auth/client', () => ({
  signIn: jest.fn()
}))

describe('<FormResetPassword />', () => {
  it('should render the FormResetPassword', () => {
    render(<FormResetPassword />)

    expect(screen.getByPlaceholderText('password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/confirm password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /reset password/i })
    ).toBeInTheDocument()
  })

  it('should show validation errors', async () => {
    render(<FormResetPassword />)

    await userEvent.type(screen.getByPlaceholderText('password'), '123')
    await userEvent.type(
      screen.getByPlaceholderText(/confirm password/i),
      '321'
    )

    userEvent.click(screen.getByRole('button', { name: /reset password/i }))

    expect(
      await screen.getByText(/confirm password does not match with password/i)
    ).toBeInTheDocument()
  })

  it('should show error when code provided is wrong', async () => {
    query = { code: 'wrong_code' }
    render(<FormResetPassword />)

    await userEvent.type(screen.getByPlaceholderText('password'), '123')
    await userEvent.type(
      screen.getByPlaceholderText(/confirm password/i),
      '123'
    )

    userEvent.click(screen.getByRole('button', { name: /reset password/i }))

    expect(
      await screen.findByText(/Incorrect code provided/i)
    ).toBeInTheDocument()
  })

  it('should reset the password and sign in the user', async () => {
    query = { code: 'right_code' }
    render(<FormResetPassword />)

    await userEvent.type(screen.getByPlaceholderText('password'), '123')
    await userEvent.type(
      screen.getByPlaceholderText(/confirm password/i),
      '123'
    )

    userEvent.click(screen.getByRole('button', { name: /reset password/i }))

    await waitFor(() => {
      expect(signIn).toHaveBeenLastCalledWith('credentials', {
        email: 'valid@email.com',
        password: '123',
        callbackUrl: '/'
      })
    })
  })
})
