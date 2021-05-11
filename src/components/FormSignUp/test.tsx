import { render, screen } from 'utils/test-utils'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the FormSignUp', () => {
    const { container } = render(<FormSignUp />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the form', () => {
    render(<FormSignUp />)
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/confirm password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    render(<FormSignUp />)

    expect(screen.getByText(/already have an account/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign in/i })).toHaveAttribute(
      'href',
      '/sign-in'
    )
  })
})
