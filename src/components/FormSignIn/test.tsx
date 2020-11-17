import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the FormSignIn', () => {
    const { container } = renderWithTheme(<FormSignIn />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render the form', () => {
    renderWithTheme(<FormSignIn />)
    //verifique email
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    //verifique password
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    //verifique button
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /forgot your password/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByText(/don’t have an account/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign up/i })).toHaveAttribute(
      'href',
      '/sign-up'
    )
  })
})
