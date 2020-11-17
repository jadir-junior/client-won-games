import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the FormSignUp', () => {
    const { container } = renderWithTheme(<FormSignUp />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the form', () => {
    renderWithTheme(<FormSignUp />)
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/confirm password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignUp />)

    expect(screen.getByText(/already have an account/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign in/i })).toHaveAttribute(
      'href',
      '/sign-in'
    )
  })
})
