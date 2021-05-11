import { render, screen } from 'utils/test-utils'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the FormSignIn', () => {
    const { container } = render(<FormSignIn />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render the form', () => {
    render(<FormSignIn />)
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument()
  })

  it('should render the forgot password link', () => {
    render(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /forgot your password/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    render(<FormSignIn />)

    expect(screen.getByText(/don’t have an account/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign up/i })).toHaveAttribute(
      'href',
      '/sign-up'
    )
  })
})
